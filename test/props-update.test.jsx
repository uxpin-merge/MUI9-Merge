/**
 * Controlled-prop update suite: the UXPin editor re-renders a component with
 * NEW prop values on every properties-panel change. A component that copies a
 * prop into local state once (useState(props.value)) renders fine but ignores
 * every later change — the classic "I change the prop and nothing happens"
 * Merge bug. For every updatable prop this suite renders value A, re-renders
 * to value B, and requires the result to equal a FRESH render of value B.
 */
import * as React from 'react';
import { render, act } from '@testing-library/react';
import {
  components,
  docsByFile,
  candidatesFor,
  stringSample,
  stripUxpIds,
  applyPropDeep,
  captureBodyHtml,
  wrapForComponent,
  withCleanConsole,
} from './harness.jsx';
import { updateSkipProps } from './fixtures.jsx';

// transitions and enter/exit animations settle through timers/rAF — flush
// them so we always compare SETTLED markup, not a mid-animation frame
beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.useRealTimers();
});
const flush = () => {
  act(() => {
    jest.advanceTimersByTime(10000);
  });
};

// props that are initial-only BY DESIGN (default*/autoFocus) or timing
// values applied at the NEXT transition/timer (timeout, durations) — the
// update check does not apply
const UNCONTROLLED_PROPS = /^default|^autoFocus|^timeout$|^transitionDuration$|^autoHideDuration$|^resumeHideDuration$|^skipAnimation$/;

/** Pair of values to flip between, or null when the prop isn't updatable. */
function updatePair(componentName, propName, propInfo) {
  const candidates = candidatesFor(componentName, propName, propInfo);
  if (!candidates.length) return null;
  if (typeof candidates[0].value === 'function') return null;
  if (candidates.length >= 2) return [candidates[0], candidates[1]];

  const only = candidates[0];
  if (typeof only.value === 'number') return [only, { label: '3', value: 3 }];
  if (typeof only.value === 'string' && only.value === stringSample(propName)) {
    const second = `${only.value} 2`;
    return [only, { label: JSON.stringify(second), value: second }];
  }
  return null; // objects/nodes: no meaningful generic second value
}

describe.each(components)('$name', ({ name, file, presetFile }) => {
  const Component = require(file).default;
  const preset = stripUxpIds(require(presetFile).default);
  const doc = docsByFile.get(file);

  const props = doc ? doc.props : {};
  Object.keys(props)
    .sort()
    .forEach((propName) => {
      if (UNCONTROLLED_PROPS.test(propName)) return;
      if (Object.prototype.hasOwnProperty.call(updateSkipProps[name] || {}, propName)) return;
      const pair = updatePair(name, propName, props[propName]);
      if (!pair) return;
      const [a, b] = pair;

      it(`updates ${propName}: ${a.label} -> ${b.label}`, () => {
        // chart springs animate over rAF with nondeterministic frame counts —
        // compare settled, animation-free output
        const base = props.skipAnimation ? { skipAnimation: true } : {};
        const nodeA = applyPropDeep(preset, Component, { ...base, [propName]: a.value }).node;
        const nodeB = applyPropDeep(preset, Component, { ...base, [propName]: b.value }).node;

        const updatedHtml = withCleanConsole(() => {
          const result = render(wrapForComponent(name, nodeA));
          flush();
          result.rerender(wrapForComponent(name, nodeB));
          flush();
          const html = captureBodyHtml();
          result.unmount();
          result.container.remove();
          return html;
        });

        const freshHtml = withCleanConsole(() => {
          const result = render(wrapForComponent(name, nodeB));
          flush();
          const html = captureBodyHtml();
          result.unmount();
          result.container.remove();
          return html;
        });

        expect(updatedHtml).toBe(freshHtml);
      });
    });
});

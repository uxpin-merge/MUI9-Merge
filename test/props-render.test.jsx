/**
 * Generic prop-render suite: for EVERY component in src/components, render
 * its default preset, then re-render it once per declared prop value:
 * - union literals ('text' | 'outlined' | ...) -> each literal
 * - boolean -> true and false
 * - number/string/ReactNode/function -> a representative sample
 * Prop metadata comes from the TypeScript interfaces via
 * react-docgen-typescript, so the sweep follows the source of truth the
 * UXPin editor exposes as prop controls.
 *
 * A render passes only when nothing is thrown AND console.error stays clean
 * (React DOM-nesting/invalid-prop warnings and MUI runtime PropTypes both
 * report through console.error), so "renders" means "renders correctly".
 *
 * On top of that, every swept prop must have an OBSERVABLE EFFECT: at least
 * one of its values must change the rendered markup vs the other values or
 * the baseline. This catches silently-dropped props (e.g. MUI v9 removing
 * Stack's alignItems/justifyContent system props: emotion filters the
 * unknown prop, nothing warns, the control just stops working).
 */
import * as React from 'react';
import {
  components,
  docsByFile,
  candidatesFor,
  stripUxpIds,
  applyPropDeep,
  renderClean,
} from './harness.jsx';
import { effectSkipProps } from './fixtures.jsx';

// props whose effect is interaction/behavior-only — no static markup change
// is expected, so they are excluded from the no-op check (NOT from the
// render check). Keep each entry justified.
const EFFECT_EXEMPT = new Set([
  'autoFocus', // focus is a side effect, not markup
  'disableRipple', // ripple exists only after pointer interaction
  'disableFocusRipple',
  'disableTouchRipple',
  'centerRipple',
  'disableRestoreFocus',
  'disableEnforceFocus',
  'disableAutoFocus',
  'disableAutoFocusItem',
  'disableEscapeKeyDown', // keyboard behavior
  'disableScrollLock', // body attribute juggling outside the render tree
  'closeAfterTransition',
  'keepMounted', // only observable for closed overlays
  'disablePortal', // moves markup, but jsdom serialization already spans body
  'transitionDuration', // timing-only
  'delay', // transition-delay timing-only
  'timeout', // transition timing-only
  'skipAnimation', // animation timing-only
  'autoHideDuration', // timer-only
  'resumeHideDuration',
  'enterDelay',
  'leaveDelay',
  'disableInteractive',
  'followCursor',
  'loadingPosition', // visible only while loading with start/end icons
]);

describe.each(components)('$name', ({ name, file, presetFile }) => {
  // requires are lazy so a broken component fails ITS tests, not the suite
  const Component = require(file).default;
  const preset = stripUxpIds(require(presetFile).default);
  const doc = docsByFile.get(file);

  // normalized markup per render, accumulated across this component's tests
  // (jest runs the its of a describe serially in definition order)
  let baselineHtml = '';
  const htmlByProp = {};

  it('renders the default preset', () => {
    baselineHtml = renderClean(name, preset);
  });

  const props = doc ? doc.props : {};
  const sweptProps = [];
  Object.keys(props)
    .sort()
    .forEach((propName) => {
      const candidates = candidatesFor(name, propName, props[propName]);
      const isFunction = candidates.length === 1 && typeof candidates[0].value === 'function';
      const effectSkipped = Object.prototype.hasOwnProperty.call(effectSkipProps[name] || {}, propName);
      if (candidates.length && !isFunction && !EFFECT_EXEMPT.has(propName) && !effectSkipped) {
        sweptProps.push(propName);
      }
      candidates.forEach(({ label, value }) => {
        it(`renders with ${propName}=${label}`, () => {
          const { node, applied } = applyPropDeep(preset, Component, { [propName]: value });
          expect(applied).toBe(true);
          const html = renderClean(name, node);
          (htmlByProp[propName] = htmlByProp[propName] || []).push(html);
        });
      });
    });

  if (sweptProps.length) {
    it('every prop changes the rendered output (no silently dropped props)', () => {
      const noops = sweptProps.filter((propName) => {
        const outputs = htmlByProp[propName] || [];
        if (!outputs.length) return false; // its prop tests already failed
        return outputs.every((html) => html === baselineHtml);
      });
      if (noops.length) {
        throw new Error(
          `Props with NO observable render effect (silently dropped?): ${noops.join(', ')}.\n` +
            'If a prop is legitimately interaction-only, add it to EFFECT_EXEMPT with a reason.'
        );
      }
    });
  }
});

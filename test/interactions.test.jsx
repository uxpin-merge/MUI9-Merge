/**
 * Interaction smoke suite: UXPin interactions ride on the components' event
 * callbacks — a wrapper that loses onClick in a destructure silently kills
 * every interaction on the canvas. For each component this suite attaches a
 * spy to the handler props it has a TRIGGER STRATEGY for, simulates the
 * interaction, and requires the spy to have fired.
 *
 * Only handlers with a reliable generic trigger are tested (onClick,
 * onChange, onDelete, onClose on open overlays) — an untested handler is
 * better than a flaky pseudo-test.
 */
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  components,
  docsByFile,
  stripUxpIds,
  applyPropDeep,
  wrapForComponent,
} from './harness.jsx';
import { interactionSkips } from './fixtures.jsx';

/** prop name -> how to trigger it inside the rendered container/body.
 *  Returns true when a trigger target was found and fired. */
function clickSomething(container) {
  const target =
    container.querySelector(
      'button, [role="button"], a[href], [role="tab"], [role="menuitem"], [role="option"], input[type="checkbox"], input[type="radio"], li'
    ) || container.firstElementChild; // e.g. Backdrop: a plain overlay div
  if (!target) return false;
  fireEvent.click(target);
  return true;
}

const TRIGGERS = {
  onClick: clickSomething,
  onChange(container) {
    // NOTE: a comma selector list returns the first match in DOCUMENT order,
    // not list order — preferences must be separate queries
    // 1. an UNCHECKED toggle (clicking an already-selected radio emits nothing)
    const toggle =
      container.querySelector('input[type="checkbox"]:not(:checked), input[type="radio"]:not(:checked)') ||
      container.querySelector('input[type="checkbox"], input[type="radio"]');
    if (toggle) {
      fireEvent.click(toggle);
      return true;
    }
    const field = container.querySelector('input:not([readonly]):not([type="hidden"]), textarea');
    if (field) {
      fireEvent.change(field, { target: { value: field.type === 'number' ? '2' : 'changed' } });
      return true;
    }
    // 2. selection components (Tabs, Pagination, ToggleButton, Accordion...)
    // fire onChange from clicking a NON-selected, enabled option
    const option = container.querySelector(
      '[role="tab"][aria-selected="false"], button:not([disabled]):not([aria-current]):not(.Mui-selected)'
    );
    if (option) {
      fireEvent.click(option);
      return true;
    }
    return clickSomething(container);
  },
  onDelete(container) {
    const icon = container.querySelector('.MuiChip-deleteIcon');
    if (!icon) return false;
    fireEvent.click(icon);
    return true;
  },
  onClose(container) {
    // a rendered close button (Alert's X) wins; otherwise overlays listen
    // for Escape at the document level while open
    const closeButton = container.querySelector('button[title*="lose" i], button[aria-label*="lose" i]');
    if (closeButton) {
      fireEvent.click(closeButton);
      return true;
    }
    fireEvent.keyDown(document.activeElement || document.body, { key: 'Escape' });
    return true;
  },
};

describe.each(components)('$name', ({ name, file, presetFile }) => {
  const Component = require(file).default;
  const preset = stripUxpIds(require(presetFile).default);
  const doc = docsByFile.get(file);

  const props = doc ? doc.props : {};
  Object.keys(props)
    .sort()
    .filter((propName) => TRIGGERS[propName])
    .forEach((propName) => {
      if (Object.prototype.hasOwnProperty.call(interactionSkips[name] || {}, propName)) return;

      it(`fires ${propName}`, () => {
        const spy = jest.fn();
        const { node, applied } = applyPropDeep(preset, Component, { [propName]: spy });
        expect(applied).toBe(true);

        const result = render(wrapForComponent(name, node));
        const triggered = TRIGGERS[propName](result.container);
        expect(triggered).toBe(true);
        expect(spy).toHaveBeenCalled();
        result.unmount();
        result.container.remove();
      });
    });
});

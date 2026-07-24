/**
 * Theme-hook regression suite: the whole Token-First integration relies on
 * components reading CSS variables at RUNTIME — the emotion CSS emitted for
 * a component must reference the var() hooks from src/theme (component
 * tokens, typography variables, shape). MUI bakes plain theme values into
 * static CSS (e.g. Paper's borderRadius), so a lost styleOverride silently
 * disconnects the component from both theme editors. This suite renders key
 * components and asserts the collected stylesheet text contains their hooks.
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { components, stripUxpIds, wrapForComponent } from './harness.jsx';

/** component name -> var() references its emitted CSS must contain */
const EXPECTED_HOOKS = {
  Button: [
    'var(--mui-comp-button-radius',
    'var(--mui-comp-button-font',
    'var(--mui-comp-button-text-transform',
    'var(--mui-comp-button-shadow',
    'var(--mui-comp-button-hover-transform',
  ],
  Paper: ['var(--mui-comp-paper-radius', 'var(--mui-comp-paper-border'],
  Card: ['var(--mui-comp-paper-radius'], // Card renders a Paper
  Chip: ['var(--mui-comp-chip-radius'],
  TextField: ['var(--mui-comp-input-radius', 'var(--mui-comp-input-border-width'],
  Typography: ['var(--mui-font-family'],
};

function collectCssText() {
  // emotion inserts rules via CSSOM insertRule — style tags have empty
  // textContent; the rules live in sheet.cssRules
  return Array.from(document.querySelectorAll('style'))
    .map((el) => {
      try {
        return Array.from(el.sheet.cssRules)
          .map((rule) => rule.cssText)
          .join('\n');
      } catch (e) {
        return el.textContent || '';
      }
    })
    .join('\n');
}

describe.each(Object.keys(EXPECTED_HOOKS))('%s', (name) => {
  const entry = components.find((c) => c.name === name);

  it('emits CSS that reads its theme-token hooks', () => {
    expect(entry).toBeDefined();
    const preset = stripUxpIds(require(entry.presetFile).default);
    const result = render(wrapForComponent(name, preset));
    const css = collectCssText();
    result.unmount();
    result.container.remove();

    const missing = EXPECTED_HOOKS[name].filter((hook) => !css.includes(hook));
    if (missing.length) {
      throw new Error(
        `Emitted CSS is missing theme hooks: ${missing.join(', ')}.\n` +
          'The component is disconnected from the runtime theme tokens — check src/theme/components.ts styleOverrides.'
      );
    }
  });
});

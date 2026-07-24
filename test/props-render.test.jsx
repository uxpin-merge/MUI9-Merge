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
import * as fs from 'fs';
import * as path from 'path';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import * as docgen from 'react-docgen-typescript';
import theme from '../src/theme';
import { wrappers, skipProps, propValues, skipComponents, effectSkipProps } from './fixtures.jsx';

const ROOT = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(ROOT, 'src', 'components');

// props that make no sense to sweep generically
const GLOBAL_SKIP_PROPS = new Set(['children', 'uxpId', 'ref', 'key']);

// console.error lines that are environment noise, not component bugs
const CONSOLE_ALLOWLIST = [
  /not wrapped in act\(/,
  /useLayoutEffect does nothing on the server/,
];

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

function discoverComponents() {
  return fs
    .readdirSync(COMPONENTS_DIR)
    .filter((name) => {
      const file = path.join(COMPONENTS_DIR, name, `${name}.tsx`);
      const preset = path.join(COMPONENTS_DIR, name, 'presets', '0-default.jsx');
      return fs.existsSync(file) && fs.existsSync(preset) && !skipComponents[name];
    })
    .sort()
    .map((name) => ({
      name,
      file: path.join(COMPONENTS_DIR, name, `${name}.tsx`),
      presetFile: path.join(COMPONENTS_DIR, name, 'presets', '0-default.jsx'),
    }));
}

const components = discoverComponents();

// one shared TS program for all files — parsing per-file is 100x slower
const parser = docgen.withCustomConfig(path.join(ROOT, 'tsconfig.json'), {
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  propFilter: (prop) => !prop.parent || !prop.parent.fileName.includes('node_modules'),
});
const docsByFile = new Map(
  parser.parse(components.map((c) => c.file)).map((doc) => [doc.filePath, doc])
);

const TINY_IMG = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function stringSample(propName) {
  const lower = propName.toLowerCase();
  if (lower.includes('src') || lower.includes('image') || lower === 'avatar') return TINY_IMG;
  if (lower.includes('href') || lower.includes('url')) return 'https://example.com/test';
  if (lower.includes('width') || lower.includes('height')) return '100px';
  if (lower.includes('color')) return 'var(--mui-palette-primary-main)';
  return 'Test';
}

function parseLiteral(raw) {
  const value = String(raw).trim();
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  // "'contained'" -> contained
  return value.replace(/^['"]|['"]$/g, '');
}

/** Candidate values for a prop, derived from its TS type. */
function candidatesFor(componentName, propName, propInfo) {
  if (GLOBAL_SKIP_PROPS.has(propName)) return [];
  if ((skipProps[componentName] || []).includes(propName)) return [];

  const override = propValues[componentName] && propValues[componentName][propName];
  if (override) return override.map((value) => ({ label: JSON.stringify(value), value }));

  const type = propInfo.type || {};
  if (type.name === 'enum' && Array.isArray(type.value)) {
    return type.value
      .map((entry) => entry.value)
      .filter((raw) => raw !== 'undefined' && raw !== 'null')
      .map((raw) => {
        const value = parseLiteral(raw);
        return { label: JSON.stringify(value), value };
      });
  }
  switch (type.name) {
    case 'boolean':
      return [
        { label: 'true', value: true },
        { label: 'false', value: false },
      ];
    case 'number':
      return [{ label: '2', value: 2 }];
    case 'string':
      return [{ label: JSON.stringify(stringSample(propName)), value: stringSample(propName) }];
    case 'ReactNode':
      return [{ label: "'Node'", value: 'Node' }];
    default:
      break;
  }
  if (/^\(.*\)\s*=>/.test(type.name) || type.name === 'MouseEventHandler') {
    return [{ label: 'fn', value: () => {} }];
  }
  if (propName === 'sx') {
    return [{ label: '{ m: 1 }', value: { m: 1 } }];
  }
  // objects / arrays / unions of objects: the preset covers the shape; a
  // generically invented value would test our imagination, not the component
  return [];
}

/** UXPin consumes uxpId itself — components never receive it at runtime, so
 *  presets are rendered without it (otherwise it leaks into the DOM). */
function stripUxpIds(node) {
  if (Array.isArray(node)) return node.map(stripUxpIds);
  if (!React.isValidElement(node)) return node;
  // cloneElement cannot DELETE a prop (undefined still ships the key and
  // React warns on it) — rebuild the element from scratch without uxpId;
  // element-valued props (expandIcon, action, label...) are stripped too
  const { uxpId, children, ...rest } = node.props || {};
  Object.keys(rest).forEach((key) => {
    const value = rest[key];
    if (React.isValidElement(value) || (Array.isArray(value) && value.some(React.isValidElement))) {
      rest[key] = stripUxpIds(value);
    }
  });
  if (node.key != null) rest.key = node.key;
  if (children == null) return React.createElement(node.type, rest);
  return React.createElement(node.type, rest, React.Children.map(children, stripUxpIds));
}

/** Clones the preset tree, applying extraProps to the FIRST node of Component. */
function applyPropDeep(node, Component, extraProps) {
  if (!React.isValidElement(node)) return { node, applied: false };
  if (node.type === Component) {
    return { node: React.cloneElement(node, extraProps), applied: true };
  }
  const children = node.props ? node.props.children : null;
  if (children == null) return { node, applied: false };
  let applied = false;
  const mapped = React.Children.map(children, (child) => {
    if (applied) return child;
    const result = applyPropDeep(child, Component, extraProps);
    applied = applied || result.applied;
    return result.node;
  });
  if (!applied) return { node, applied: false };
  return { node: React.cloneElement(node, {}, mapped), applied: true };
}

/** React useId output (":r1:") differs between renders — normalize so two
 *  renders of the same UI serialize identically. */
function normalizeHtml(html) {
  return html.replace(/:r[0-9a-z]+:/g, ':id:');
}

function renderClean(componentName, ui) {
  const wrap = wrappers[componentName] || ((el) => el);
  const errors = [];
  let html = '';
  /* eslint-disable no-console */
  const originalError = console.error;
  console.error = (...args) => {
    errors.push(args.map((a) => (a instanceof Error ? a.message : String(a))).join(' '));
  };
  try {
    const result = render(<ThemeProvider theme={theme}>{wrap(ui)}</ThemeProvider>);
    // body catches portal output (Dialog, Menu, Snackbar) too
    html = normalizeHtml(document.body.innerHTML);
    result.unmount();
  } finally {
    console.error = originalError;
  }
  /* eslint-enable no-console */
  const real = errors.filter((line) => !CONSOLE_ALLOWLIST.some((re) => re.test(line)));
  if (real.length) {
    throw new Error(`console.error during render:\n${real.join('\n---\n')}`);
  }
  return html;
}

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

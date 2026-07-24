/**
 * Shared infrastructure for the generic component suites: discovery of
 * components + presets, TS-interface prop metadata (react-docgen-typescript),
 * preset tree utilities and the console-guarded renderer.
 */
import * as React from 'react';
import * as fs from 'fs';
import * as path from 'path';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import * as docgen from 'react-docgen-typescript';
import theme from '../src/theme';
import { wrappers, skipComponents, skipProps, propValues } from './fixtures.jsx';

export const ROOT = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(ROOT, 'src', 'components');

// props that make no sense to sweep generically
export const GLOBAL_SKIP_PROPS = new Set(['children', 'uxpId', 'ref', 'key']);

// console.error lines that are environment noise, not component bugs
const CONSOLE_ALLOWLIST = [
  /not wrapped in act\(/,
  /useLayoutEffect does nothing on the server/,
];

export function discoverComponents() {
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

export const components = discoverComponents();

// one shared TS program for all files — parsing per-file is 100x slower
const parser = docgen.withCustomConfig(path.join(ROOT, 'tsconfig.json'), {
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  propFilter: (prop) => !prop.parent || !prop.parent.fileName.includes('node_modules'),
});
export const docsByFile = new Map(
  parser.parse(components.map((c) => c.file)).map((doc) => [doc.filePath, doc])
);

export const TINY_IMG =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export function stringSample(propName) {
  const lower = propName.toLowerCase();
  if (lower.includes('src') || lower.includes('image') || lower === 'avatar') return TINY_IMG;
  if (lower.includes('href') || lower.includes('url')) return 'https://example.com/test';
  if (lower.includes('width') || lower.includes('height')) return '100px';
  if (lower.includes('color')) return 'var(--mui-palette-primary-main)';
  return 'Test';
}

export function parseLiteral(raw) {
  const value = String(raw).trim();
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  // "'contained'" -> contained
  return value.replace(/^['"]|['"]$/g, '');
}

export function isFunctionType(propInfo) {
  const typeName = (propInfo.type || {}).name || '';
  return /^\(.*\)\s*=>/.test(typeName) || /EventHandler|Handler$/.test(typeName);
}

/** UXPin consumes uxpId itself — components never receive it at runtime, so
 *  presets are rendered without it (otherwise it leaks into the DOM). */
export function stripUxpIds(node) {
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
export function applyPropDeep(node, Component, extraProps) {
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

/** React useId output (":r1:") and module-level instance counters
 *  ("mui-tree-view-3") differ between renders — normalize so two renders of
 *  the same UI serialize identically. */
export function normalizeHtml(html) {
  return html
    .replace(/:r[0-9a-z]+:/g, ':id:')
    .replace(/mui-([a-z-]+)-\d+/g, 'mui-$1-#')
    .replace(/ style=""/g, '');
}

/** innerHTML serializes the INITIAL attributes of form controls, not their
 *  live DOM properties — sync properties back into attributes so captured
 *  markup reflects the actual state (checked, value, disabled). */
export function captureBodyHtml() {
  // sync live form state into attributes FIRST, on the real elements
  // (innerHTML serializes only the INITIAL attributes, and DOM properties
  // are not copied by cloneNode)
  document.querySelectorAll('input').forEach((el) => {
    if (el.checked) el.setAttribute('checked', '');
    else el.removeAttribute('checked');
    if (el.value != null && el.value !== '') el.setAttribute('value', el.value);
    else el.removeAttribute('value');
  });
  document.querySelectorAll('option').forEach((el) => {
    if (el.selected) el.setAttribute('selected', '');
    else el.removeAttribute('selected');
  });

  // everything DESTRUCTIVE happens on a detached clone — removing nodes from
  // the live tree breaks React's unmount ("node to be removed is not a
  // child")
  const body = document.body.cloneNode(true);
  document.querySelectorAll('textarea').forEach((el, index) => {
    const clone = body.querySelectorAll('textarea')[index];
    if (clone) clone.textContent = el.value;
  });

  // x-charts machinery that floats around the DOM between mount and update:
  // the off-screen text-measurement svg and the hidden tooltip overlay
  body.querySelectorAll(':scope > svg[aria-hidden="true"]').forEach((el) => el.remove());
  body.querySelectorAll('[style*="display: hidden"]').forEach((el) => el.remove());

  // normalize per-element noise: mount-only imperative attributes,
  // transition-timing residue, then attribute/style-declaration ORDER
  // (React preserves insertion order, which differs mount vs update)
  body.querySelectorAll('*').forEach((el) => {
    // pickers set these imperatively on mount only (MUI internals)
    el.removeAttribute('spellcheck');
    el.removeAttribute('autocapitalize');
    el.removeAttribute('autocorrect');

    if (el.getAttribute && el.getAttribute('style') != null && el.style) {
      const declarations = [];
      for (let i = 0; i < el.style.length; i += 1) {
        const prop = el.style[i];
        // transitions are timing machinery; exited transitions also leave
        // junk like 'transition-timing-function: undefined' or a no-op
        // 'transform: none'
        if (prop.startsWith('transition')) continue;
        if (prop === 'transform' && el.style.getPropertyValue(prop) === 'none') continue;
        declarations.push(`${prop}: ${el.style.getPropertyValue(prop)}`);
      }
      declarations.sort();
      if (declarations.length) el.setAttribute('style', declarations.join('; ') + ';');
      else el.removeAttribute('style');
    }

    const attrs = Array.from(el.attributes)
      .map((a) => [a.name, a.value])
      .sort((x, y) => (x[0] < y[0] ? -1 : 1));
    attrs.forEach(([n]) => el.removeAttribute(n));
    attrs.forEach(([n, v]) => el.setAttribute(n, v));
  });

  return normalizeHtml(body.innerHTML);
}

export function wrapForComponent(componentName, ui) {
  const wrap = wrappers[componentName] || ((el) => el);
  return <ThemeProvider theme={theme}>{wrap(ui)}</ThemeProvider>;
}

/** Collects console.error lines during fn(); throws if any non-allowlisted
 *  line was reported. Returns fn()'s result. */
export function withCleanConsole(fn) {
  const errors = [];
  /* eslint-disable no-console */
  const originalError = console.error;
  console.error = (...args) => {
    errors.push(args.map((a) => (a instanceof Error ? a.message : String(a))).join(' '));
  };
  let result;
  try {
    result = fn();
  } finally {
    console.error = originalError;
  }
  /* eslint-enable no-console */
  const real = errors.filter((line) => !CONSOLE_ALLOWLIST.some((re) => re.test(line)));
  if (real.length) {
    throw new Error(`console.error during render:\n${real.join('\n---\n')}`);
  }
  return result;
}

/** Renders, captures normalized body markup (portals included), unmounts. */
export function renderClean(componentName, ui) {
  return withCleanConsole(() => {
    const result = render(wrapForComponent(componentName, ui));
    const html = captureBodyHtml();
    result.unmount();
    // unmount keeps the empty container div in body — drop it so multiple
    // renders inside one test don't accumulate residue that breaks
    // whole-body markup comparisons
    result.container.remove();
    return html;
  });
}

/** Candidate values for a prop, derived from its TS type. */
export function candidatesFor(componentName, propName, propInfo) {
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
  if (isFunctionType(propInfo)) {
    return [{ label: 'fn', value: () => {} }];
  }
  if (propName === 'sx') {
    return [{ label: '{ m: 1 }', value: { m: 1 } }];
  }
  // objects / arrays / unions of objects: the preset covers the shape; a
  // generically invented value would test our imagination, not the component
  return [];
}


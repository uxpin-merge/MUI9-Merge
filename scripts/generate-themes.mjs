/**
 * Generates themes.js (consumed by uxpin.config.js `settings.themes`) from the
 * SAME theme definition the library bundles (src/theme/tokens.json). UXPin's
 * properties panel reads this map to let users tweak the theme per canvas.
 *
 * Output shape (mirrors the shadcn-merge convention):
 *   { default: { light: { '--mui-...': value }, dark: { ... } } }
 *
 * Each mode contains the FULL variable set (scheme-agnostic vars merged in),
 * including derived *Channel tokens — the UXPin theme editor recomputes
 * channels when a color is edited, everything else is applied verbatim.
 *
 * Run: npm run generate:themes
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { createTheme } from '@mui/material/styles';

const require = createRequire(import.meta.url);
const tokens = require('../src/theme/tokens.json');

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: { palette: tokens.lightPalette },
    dark: { palette: tokens.darkPalette },
  },
  typography: tokens.typography,
  shape: tokens.shape,
  spacing: tokens.spacing,
});

// generateStyleSheets() returns e.g.:
//   [{ ':root': {...scheme-agnostic} }, { ':root, .light': {...} }, { '.dark': {...} }]
const sheets = theme.generateStyleSheets();

const base = {};
const light = {};
const dark = {};

for (const sheet of sheets) {
  for (const [selector, vars] of Object.entries(sheet)) {
    if (selector.includes('.dark')) {
      Object.assign(dark, vars);
    } else if (selector.includes('.light')) {
      Object.assign(light, vars);
    } else {
      Object.assign(base, vars);
    }
  }
}

// The theme defines typography.fontFamily as `var(--mui-font-family, <fallback>)`,
// so every generated --mui-font-* shorthand points at this single custom variable.
// Editing it in UXPin's theme editor swaps the font for the whole library at once.
const themes = {
  default: {
    light: { ...tokens.fontFamilyVar, ...base, ...light },
    dark: { ...tokens.fontFamilyVar, ...base, ...dark },
  },
};

const header = `// GENERATED FILE — do not edit by hand.
// Source of truth: src/theme/tokens.json + scripts/generate-themes.mjs
// Regenerate with: npm run generate:themes
`;

const outPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'themes.js');
writeFileSync(outPath, `${header}module.exports = ${JSON.stringify(themes, null, 2)};\n`);

console.log(
  `themes.js written: light=${Object.keys(themes.default.light).length} vars, dark=${Object.keys(themes.default.dark).length} vars`
);

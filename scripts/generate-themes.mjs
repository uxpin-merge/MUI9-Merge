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

// per-variant typography metrics resolve through our custom variables — same
// construction as src/theme/typography.ts (keep in sync)
const variantStyles = Object.fromEntries(
  Object.entries(tokens.typographyVariants).map(([variant, style]) => [
    variant,
    {
      fontWeight: `var(--mui-font-weight-${variant}, ${style.fontWeight})`,
      fontSize: `var(--mui-font-size-${variant}, ${style.fontSize})`,
      lineHeight: `var(--mui-font-lineHeight-${variant}, ${style.lineHeight})`,
    },
  ])
);

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: { palette: tokens.lightPalette },
    dark: { palette: tokens.darkPalette },
  },
  typography: { ...tokens.typography, ...variantStyles },
  shape: tokens.shape,
  spacing: tokens.spacing,
  breakpoints: tokens.breakpoints,
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

// MUI's generated `--mui-font-<variant>` shorthands are dead weight in our
// runtime: components bake typography styles into CSS at createTheme() time
// and never read those variables back (verified against @mui/material v9
// sources). Drop them; the working knobs are our custom variables below.
const DEAD_FONT_SHORTHAND = /^--mui-font-(h[1-6]|subtitle[12]|body[12]|button|caption|overline|inherit)$/;
for (const vars of [base, light, dark]) {
  for (const key of Object.keys(vars)) {
    if (DEAD_FONT_SHORTHAND.test(key)) {
      delete vars[key];
    }
  }
}

// Our custom, actually-consumed typography variables: the single font-family
// var (referenced from every baked variant style) + per-variant metrics.
const typographyVars = { ...tokens.fontFamilyVar };
for (const [variant, style] of Object.entries(tokens.typographyVariants)) {
  typographyVars[`--mui-font-weight-${variant}`] = String(style.fontWeight);
  typographyVars[`--mui-font-size-${variant}`] = String(style.fontSize);
  typographyVars[`--mui-font-lineHeight-${variant}`] = String(style.lineHeight);
}

const themes = {
  default: {
    light: { ...typographyVars, ...base, ...light },
    dark: { ...typographyVars, ...base, ...dark },
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

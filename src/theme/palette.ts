import type { PaletteOptions } from '@mui/material/styles';
import tokens from './tokens.json';

/**
 * Default palettes for both color schemes, sourced from tokens.json — the
 * single source of truth shared with scripts/generate-themes.mjs (which emits
 * themes.js consumed by UXPin's theme editor). Every token is emitted as a
 * `--mui-*` CSS variable and can be overridden at runtime by injecting a
 * stylesheet — never mutate these objects at runtime.
 */
export const lightPalette: PaletteOptions = tokens.lightPalette as PaletteOptions;

export const darkPalette: PaletteOptions = tokens.darkPalette as PaletteOptions;

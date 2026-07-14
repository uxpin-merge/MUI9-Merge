import { createTheme } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette';
import { typography } from './typography';
import { components } from './components';
import tokens from './tokens.json';

/**
 * THE theme. Created exactly once, at module scope. There is deliberately no
 * runtime API to modify it — all dynamic theming happens by overriding the
 * generated `--mui-*` CSS variables from outside (UXPin injects a <style>
 * block into the canvas iframe) and by toggling the color-scheme class on
 * <html> (`.mode-light` / `.mode-dark`).
 */
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: { palette: lightPalette },
    dark: { palette: darkPalette },
  },
  typography,
  shape: tokens.shape,
  spacing: tokens.spacing,
  // NOTE: breakpoints are NOT emitted as CSS variables by MUI — they are baked
  // into media queries at build time. Changing them requires rebuilding and
  // re-pushing the library; they are kept in tokens.json so every build-time
  // and runtime token lives in one file.
  breakpoints: tokens.breakpoints,
  components,
});

export default theme;

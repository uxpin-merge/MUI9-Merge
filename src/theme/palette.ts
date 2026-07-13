import type { PaletteOptions } from '@mui/material/styles';

/**
 * Default palettes for both color schemes. Every token defined here is emitted
 * as a `--mui-*` CSS variable and can be overridden at runtime by injecting a
 * stylesheet — never mutate these objects at runtime.
 */
export const lightPalette: PaletteOptions = {
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2',
    contrastText: '#ffffff',
  },
  error: { main: '#d32f2f' },
  warning: { main: '#ed6c02' },
  info: { main: '#0288d1' },
  success: { main: '#2e7d32' },
};

export const darkPalette: PaletteOptions = {
  primary: {
    main: '#90caf9',
    light: '#e3f2fd',
    dark: '#42a5f5',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  secondary: {
    main: '#ce93d8',
    light: '#f3e5f5',
    dark: '#ab47bc',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  error: { main: '#f44336' },
  warning: { main: '#ffa726' },
  info: { main: '#29b6f6' },
  success: { main: '#66bb6a' },
};

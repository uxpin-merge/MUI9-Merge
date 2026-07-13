import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import { ensureFonts } from '../theme/fonts';

ensureFonts();

export interface UXPinWrapperProps {
  children: React.ReactNode;
}

/**
 * Merge wrapper. Stateless by design: the theme is a module-level singleton
 * with CSS variables enabled, so every theme token is available in the DOM as
 * `--mui-*`. Runtime restyling = UXPin injecting a stylesheet with variable
 * overrides (plus font <link> tags) into the canvas iframe. No context, no
 * listeners, no theme recreation.
 */
export default function UXPinWrapper({ children }: UXPinWrapperProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

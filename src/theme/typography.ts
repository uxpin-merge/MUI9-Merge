import type { TypographyVariantsOptions } from '@mui/material/styles';
import tokens from './tokens.json';

interface VariantTokens {
  fontWeight: number;
  fontSize: string;
  lineHeight: number;
}

/**
 * MUI bakes typography variant styles into the emitted CSS at createTheme()
 * time (the generated `--mui-font-*` shorthands are NOT read back by
 * components). To make per-variant typography runtime-themable, every metric
 * is defined as a var() reference to our own custom variable with the default
 * as fallback — the same trick as `--mui-font-family`. The UXPin theme editor
 * overrides these variables; without overrides the fallbacks apply.
 */
const variantStyles = Object.fromEntries(
  Object.entries(tokens.typographyVariants as Record<string, VariantTokens>).map(([variant, style]) => [
    variant,
    {
      // per-variant family with the global font variable as fallback — lets a
      // theme give headings their own face (--mui-font-family-h1...) while
      // body text follows --mui-font-family
      fontFamily: `var(--mui-font-family-${variant}, ${tokens.typography.fontFamily})`,
      fontWeight: `var(--mui-font-weight-${variant}, ${style.fontWeight})`,
      fontSize: `var(--mui-font-size-${variant}, ${style.fontSize})`,
      lineHeight: `var(--mui-font-lineHeight-${variant}, ${style.lineHeight})`,
    },
  ])
);

export const typography: TypographyVariantsOptions = {
  fontFamily: tokens.typography.fontFamily,
  ...variantStyles,
};

import type { Components, Theme } from '@mui/material/styles';

/**
 * Component-level theme hooks.
 *
 * MUI bakes styleOverrides into the emitted CSS at build time, so component
 * styling is normally NOT runtime-themable. The trick used across this
 * library: bake `var(--mui-comp-*, <faithful default>)` REFERENCES into the
 * CSS — the values then live in CSS variables and can be swapped per canvas
 * by the UXPin theme editor / AI (uxpinThemeEdits), exactly like palette
 * tokens. With no override set, the fallbacks reproduce stock MUI, so these
 * hooks are invisible until a theme opts in.
 *
 * This is what makes library components REUSABLE under styled design
 * systems: "hand-drawn buttons with hard offset shadows" becomes a handful
 * of component tokens instead of per-instance sx — a Button dragged from
 * the library matches the AI-generated design automatically.
 */
export const components: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontFamily: 'var(--mui-comp-button-font, var(--mui-font-family, "Roboto", "Helvetica", "Arial", sans-serif))',
        textTransform: 'var(--mui-comp-button-text-transform, uppercase)' as 'uppercase',
        borderRadius: 'var(--mui-comp-button-radius, var(--mui-shape-borderRadius, 4px))',
        '&:hover': {
          transform: 'var(--mui-comp-button-hover-transform, none)',
        },
        '&:active': {
          transform: 'var(--mui-comp-button-active-transform, none)',
        },
      },
      contained: {
        boxShadow: 'var(--mui-comp-button-shadow, var(--mui-shadows-2))',
        '&:hover': {
          boxShadow: 'var(--mui-comp-button-shadow-hover, var(--mui-shadows-4))',
        },
        '&:active': {
          boxShadow: 'var(--mui-comp-button-shadow-active, var(--mui-shadows-8))',
        },
      },
      outlined: {
        borderWidth: 'var(--mui-comp-button-border-width, 1px)',
        borderStyle: 'var(--mui-comp-button-border-style, solid)' as 'solid',
        boxShadow: 'var(--mui-comp-button-shadow, none)',
        '&:hover': {
          boxShadow: 'var(--mui-comp-button-shadow-hover, none)',
        },
        '&:active': {
          boxShadow: 'var(--mui-comp-button-shadow-active, none)',
        },
      },
      // border-color hook falls back to the stock per-color values so plain
      // outlined buttons keep their palette tint until a theme sets one
      // design-wide border color (v9 has no per-color styleOverride slots —
      // target the composed classes instead)
      colorPrimary: {
        '&.MuiButton-outlined': {
          borderColor: 'var(--mui-comp-button-border-color, rgba(var(--mui-palette-primary-mainChannel) / 0.5))',
          '&:hover': {
            borderColor: 'var(--mui-comp-button-border-color, var(--mui-palette-primary-main))',
          },
        },
      },
      colorSecondary: {
        '&.MuiButton-outlined': {
          borderColor: 'var(--mui-comp-button-border-color, rgba(var(--mui-palette-secondary-mainChannel) / 0.5))',
          '&:hover': {
            borderColor: 'var(--mui-comp-button-border-color, var(--mui-palette-secondary-main))',
          },
        },
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      rounded: {
        borderRadius: 'var(--mui-comp-paper-radius, var(--mui-shape-borderRadius, 4px))',
      },
      // elevation papers only — outlined papers keep their own divider border
      elevation: {
        border: 'var(--mui-comp-paper-border, none)',
      },
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 'var(--mui-comp-chip-radius, 16px)',
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 'var(--mui-comp-input-radius, var(--mui-shape-borderRadius, 4px))',
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--mui-comp-input-focus-border-color, var(--mui-palette-primary-main))',
        },
      },
      notchedOutline: {
        borderWidth: 'var(--mui-comp-input-border-width, 1px)',
        borderStyle: 'var(--mui-comp-input-border-style, solid)' as 'solid',
        borderColor:
          'var(--mui-comp-input-border-color, rgba(var(--mui-palette-common-onBackgroundChannel) / 0.23))',
      },
    },
  },
};

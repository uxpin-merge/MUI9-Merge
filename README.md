# mui9-uxpin-merge

MUI v9 (+ MUI X v9) component library for UXPin Merge, written in TypeScript.
Successor of the MUI v5 `MUI-Merge` library — same wrapper conventions, completely
different theming architecture.

## Theming architecture

The theme is created **once**, at module scope, with CSS variables enabled
(`src/theme/index.ts`):

- Every theme token is emitted to the DOM as a `--mui-*` CSS variable
  (`--mui-palette-primary-main`, `--mui-spacing`, `--mui-shape-borderRadius`,
  `--mui-typography-fontFamily`, ...).
- Components consume `var(--mui-*)`, so **overriding a variable restyles the whole
  library without any React re-render and without recreating the theme**.
- Both color schemes are defined. Scheme switching = toggling the class on `<html>`
  (`colorSchemeSelector: 'class'` → `.light` / `.dark` per MUI's class convention).

There is **no ThemeCustomizer component and no runtime theming API** in this library.
Runtime theming is performed from outside (UXPin UI / API) by injecting into the
canvas iframe:

1. `<style id="uxpin-theme-tokens">:root { --mui-palette-primary-main: #6750A4; ... }</style>`
2. `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=...">` for any
   non-default fonts.

### Caveats for the injecting side

- Derived tokens (`*-light`, `*-dark`, `*-contrastText`, `*Channel`) are computed at
  `createTheme` time and do NOT recompute in CSS. The token generator must emit the
  full set (channels in `r g b` format) — otherwise hover/ripple/focus keep stale colors.
- `--mui-spacing` is the base spacing unit; overriding it rescales the entire library.
- Component `styleOverrides` (structural changes) are a build-time concern:
  `src/theme/components.ts`.

## Development

```bash
nvm use            # Node 22 (.nvmrc)
npm install        # .npmrc maps @uxpin scope to the public npm registry
npm start          # uxpin-merge experiment mode
npm run typecheck  # tsc --noEmit
```

## Conventions

- One folder per component: `src/components/<Name>/<Name>.tsx` + `presets/0-default.jsx`.
- Wrappers are thin pass-throughs over MUI; props limited to what makes sense on the
  canvas; every prop JSDoc-documented; `@uxpindocurl` + `@uxpindescription` on the component.
- No hardcoded colors anywhere — theme token paths (`'primary.main'`) or
  `var(--mui-palette-...)` strings (charts) only.
- MUI v9 notes: `Grid` uses the v9 API (`container` + `size`, no `item`/`xs`);
  `Button` has the `loading` prop (no separate LoadingButton); `Hidden` is gone
  (use `sx={{ display }}`); NumberField/Menubar are not in @mui/material 9.2.0.

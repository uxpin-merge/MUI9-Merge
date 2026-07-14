# Design System: Bauhaus (MUI9 token-first edition)

Philosophy: "Form follows function" through pure geometry and primary color
theory. Constructivist modernism — circles, squares, triangles; thick black
borders; pure primaries on off-white; hard offset shadows. Bold, asymmetric,
architectural.

## Theme (MANDATORY — apply as uxpinThemeEdits on the root element)

Every color/font/radius below is a THEME TOKEN. Components must reference
tokens (semantic props, sx paths, var()) — never raw values.

```
uxpinThemeType="light"
uxpinThemeEdits={{
  light: {
    "--mui-palette-primary-main": "#D02020",
    "--mui-palette-secondary-main": "#1040C0",
    "--mui-palette-warning-main": "#F0C020",
    "--mui-palette-background-default": "#F0F0F0",
    "--mui-palette-background-paper": "#FFFFFF",
    "--mui-palette-text-primary": "#121212",
    "--mui-palette-text-secondary": "#404040",
    "--mui-palette-divider": "#121212",
    "--mui-shape-borderRadius": "0px",
    "--mui-font-family": "\"Outfit\", \"Helvetica\", \"Arial\", sans-serif",
    "--ds-red": "#D02020",
    "--ds-blue": "#1040C0",
    "--ds-yellow": "#F0C020",
    "--ds-ink": "#121212",
    "--ds-canvas": "#F0F0F0",
    "--ds-muted": "#E0E0E0",
    "--ds-border": "4px solid #121212",
    "--ds-border-thin": "2px solid #121212",
    "--ds-shadow-sm": "4px 4px 0 0 #121212",
    "--ds-shadow-md": "6px 6px 0 0 #121212",
    "--ds-shadow-lg": "8px 8px 0 0 #121212",
    "--ds-accordion-open-bg": "#FFF9C4"
  },
  dark: {
    "--mui-palette-primary-main": "#FF4D4D",
    "--mui-palette-secondary-main": "#4D7CFF",
    "--mui-palette-warning-main": "#FFD54D",
    "--mui-palette-background-default": "#121212",
    "--mui-palette-background-paper": "#1E1E1E",
    "--mui-palette-text-primary": "#F0F0F0",
    "--mui-palette-text-secondary": "#B8B8B8",
    "--mui-palette-divider": "#F0F0F0",
    "--mui-shape-borderRadius": "0px",
    "--mui-font-family": "\"Outfit\", \"Helvetica\", \"Arial\", sans-serif",
    "--ds-red": "#FF4D4D",
    "--ds-blue": "#4D7CFF",
    "--ds-yellow": "#FFD54D",
    "--ds-ink": "#F0F0F0",
    "--ds-canvas": "#121212",
    "--ds-muted": "#2A2A2A",
    "--ds-border": "4px solid #F0F0F0",
    "--ds-border-thin": "2px solid #F0F0F0",
    "--ds-shadow-sm": "4px 4px 0 0 #F0F0F0",
    "--ds-shadow-md": "6px 6px 0 0 #F0F0F0",
    "--ds-shadow-lg": "8px 8px 0 0 #F0F0F0",
    "--ds-accordion-open-bg": "#3A3418"
  }
}}
```

Color rule: strictly Bauhaus primaries (`--ds-red/blue/yellow`) + ink & canvas.
No other colors — including grays: use `text.secondary` / `--ds-muted`.

## Typography

Font: Outfit (Google Fonts, weights 400/500/700/900) — set via
`--mui-font-family` (already in the theme above). Usage:

- Headlines: fontWeight 900, uppercase, letterSpacing '-0.03em', lineHeight 0.9
- Subheadings: fontWeight 700, uppercase
- Body: fontWeight 500
- Labels: fontWeight 700, uppercase, letterSpacing '0.2em'

Type scale via Typography variants (h1/h2/h6/body1/body2) — responsive
fontSize in sx `{ xs, md }` is allowed, weights/case as above.

## Shape, borders, shadows

- Radius is binary: `--mui-shape-borderRadius: 0px` globally; circles get
  `borderRadius: '50%'` locally. No in-between values.
- Borders: `border: 'var(--ds-border)'` (desktop) / `'var(--ds-border-thin)'`
  (mobile, small elements). Section dividers: `borderBottom: 'var(--ds-border)'`.
- Shadows: hard offsets only — `boxShadow: 'var(--ds-shadow-sm|md|lg)'`.
  Never soft/blurred.

## Components

- Buttons: `variant="contained"` + `color="primary|secondary|warning"` —
  bgcolor/text come from the theme. Add
  `sx={{ border: 'var(--ds-border-thin)', boxShadow: 'var(--ds-shadow-sm)',
  textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em',
  '&:active': { transform: 'translate(2px, 2px)', boxShadow: 'none' } }}`.
  Outline variant: `variant="outlined"` with the same sx (bg comes from
  background.paper). Never restate button colors inline.
- Cards: `bgcolor: 'background.paper'`, `border: 'var(--ds-border)'`,
  `boxShadow: 'var(--ds-shadow-lg)'`, corner decoration = small geometric
  shape in `var(--ds-red|blue|yellow)`. Hover: `translateY(-8px)`.
- Accordion (FAQ): closed = paper bg + `var(--ds-border)` +
  `var(--ds-shadow-sm)`; open header = `bgcolor: 'primary.main'` with
  `color: 'primary.contrastText'`; open content =
  `bgcolor: 'var(--ds-accordion-open-bg)'` + `borderTop: 'var(--ds-border)'`.
- Navigation links: Link or Button (variant="text") components — never
  Typography with cursor:pointer.

## Layout & color blocking (mandatory)

Full-bleed sections separated by `borderBottom: 'var(--ds-border)'`:
hero right panel `var(--ds-blue)`, stats `var(--ds-yellow)`, benefits
`var(--ds-red)`, blog `var(--ds-blue)`, final CTA `var(--ds-yellow)`,
footer `bgcolor: 'var(--ds-ink)'` with `color: 'var(--ds-canvas)'`.
Every colored section sets BOTH bgcolor and color (tokens) on the container —
children inherit, no per-text color patching.

## Geometric compositions (required)

- Logo: circle + square + triangle in the three primaries (`--ds-*` tokens).
- Hero/CTA: overlapping shapes, 45° rotations on every 3rd shape.
- Images: alternate circles (`borderRadius: '50%'`) and squares; grayscale by
  default (`filter: 'grayscale(1)'`), color on hover.

## Motion

duration 200–300ms, ease-out only; button press = translate(2px,2px) + drop
shadow; card hover = translateY(-6..8px). No bouncy easing.

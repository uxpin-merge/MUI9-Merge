import type { Components, Theme } from '@mui/material/styles';

/**
 * Static component overrides. This layer is NOT runtime-themable — anything
 * placed here is fixed at build time. Keep it minimal; user-tunable styling
 * belongs to theme tokens (palette/typography/spacing/shape), which flow
 * through CSS variables.
 */
export const components: Components<Theme> = {};

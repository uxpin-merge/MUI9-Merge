import * as React from 'react';
import MuiGrid from '@mui/material/Grid';

export interface GridProps {
  /** The content of the grid. */
  children?: React.ReactNode;
  /** If true, the component will have the flex container behavior. Set on the outer grid. */
  container?: boolean;
  /**
   * The size of the item relative to the number of columns, e.g. 6 or { xs: 12, md: 6 } or 'grow'.
   * NOTE: MUI v9 Grid API — there is no `item` / `xs` / `md` prop anymore.
   */
  size?: number | 'auto' | 'grow' | false | object;
  /** Column/row offset, e.g. 2, 'auto' or { md: 2 }. */
  offset?: number | 'auto' | object;
  /** Defines the space between children (theme spacing units). Set on the container. */
  spacing?: number | string | object;
  /** The number of columns in the grid (default 12). Set on the container. */
  columns?: number | object;
  /** Defines the flex-direction style property (v9 dropped column directions — use Stack for columns). */
  direction?: 'row' | 'row-reverse';
  /** Defines the flex-wrap style property. */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-grid/
 * @uxpindescription Responsive 12-column layout grid (MUI v9 API: use container + size, not item/xs).
 */
export default function Grid(props: GridProps) {
  // spacing/columns are container-only — passing them on an item makes MUI
  // warn; drop them silently so toggling `container` in the editor is safe
  const { container, spacing, columns, ...other } = props;
  return (
    <MuiGrid
      {...other}
      container={container}
      spacing={container ? spacing : undefined}
      columns={container ? columns : undefined}
    >
      {props.children}
    </MuiGrid>
  );
}

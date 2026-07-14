import * as React from 'react';
import MuiStack from '@mui/material/Stack';

export interface StackProps {
  /** The content of the stack. */
  children?: React.ReactNode;
  /** Defines the flex-direction style property. */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /** Defines the space between immediate children (theme spacing units). */
  spacing?: number | string;
  /** Defines the align-items style property. */
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  /** Defines the justify-content style property. */
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  /** Add an element between each child. */
  divider?: React.ReactNode;
  /** If true, the CSS flexbox gap is used instead of applying margin to children. */
  useFlexGap?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-stack/
 * @uxpindescription Manages layout of immediate children along the vertical or horizontal axis, with optional spacing and dividers.
 */
export default function Stack(props: StackProps) {
  // MUI v9 removed system props from Stack — alignItems/justifyContent passed
  // as top-level props leak into the DOM as attributes and do nothing, so map
  // them into sx (explicit sx values still win via the later spread)
  const { alignItems, justifyContent, sx, ...other } = props;
  return (
    <MuiStack {...other} sx={{ alignItems, justifyContent, ...((sx as object) || {}) }}>
      {props.children}
    </MuiStack>
  );
}

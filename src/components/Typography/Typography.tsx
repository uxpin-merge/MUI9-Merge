import * as React from 'react';
import MuiTypography from '@mui/material/Typography';

export interface TypographyProps {
  /** The content of the component. */
  children?: React.ReactNode;
  /** Applies the theme typography styles. */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';
  /** The color of the component (theme token path, e.g. 'primary.main', 'text.secondary'). */
  color?: string;
  /** Set the text-align on the component. */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  /** If true, the text will have a bottom margin. */
  gutterBottom?: boolean;
  /** If true, the text will not wrap, but instead will truncate with a text overflow ellipsis. */
  noWrap?: boolean;
  /** If true, the element will be a paragraph. */
  paragraph?: boolean;
  /** The component used for the root node (e.g. 'span', 'div', 'p'). */
  component?: React.ElementType;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-typography/
 * @uxpindescription Use typography to present your design and content as clearly and efficiently as possible.
 */
export default function Typography(props: TypographyProps) {
  // MUI v9 removed the `paragraph` prop — emulate the v5 behavior instead of
  // letting the flag leak onto the DOM element
  const { paragraph, component, color, sx, ...other } = props;
  const resolvedComponent = paragraph ? 'p' : component;
  // v9 removed Typography's color system prop — route it through sx (sx
  // resolves theme token paths like 'primary.main' and var() references)
  const mergedSx = {
    ...(color ? { color } : {}),
    ...(paragraph ? { marginBottom: '16px' } : {}),
    ...((sx as object) || {}),
  };
  return (
    <MuiTypography
      {...other}
      {...(resolvedComponent ? { component: resolvedComponent } : {})}
      {...(Object.keys(mergedSx).length ? { sx: mergedSx } : {})}
    >
      {props.children}
    </MuiTypography>
  );
}

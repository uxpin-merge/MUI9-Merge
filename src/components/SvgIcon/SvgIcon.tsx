import * as React from 'react';
import MuiSvgIcon from '@mui/material/SvgIcon';
import parse from 'html-react-parser';

export interface SvgIconProps {
  /** The <svg/> content: SVG markup as a string, or nodes. */
  children?: React.ReactNode;
  /** The color of the component. Supports both default and custom theme colors. */
  color?: 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The fontSize applied to the icon. */
  fontSize?: 'inherit' | 'large' | 'medium' | 'small';
  /**
   * Applies a color attribute to the SVG element.
   * @uxpincontroltype color
   */
  htmlColor?: string;
  /** If true, the root node will inherit the custom component's viewBox. */
  inheritViewBox?: boolean;
  /** Provides a human-readable title for the element that contains it. */
  titleAccess?: string;
  /** Allows you to redefine what the coordinates without units mean inside an SVG element. */
  viewBox?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/icons/#svgicon
 * @uxpindescription Extends the native <svg> element for custom icons. Accepts raw SVG markup as a string.
 */
export default function SvgIcon({ children, ...otherProps }: SvgIconProps) {
  return (
    <MuiSvgIcon {...otherProps}>{typeof children === 'string' ? parse(children) : children}</MuiSvgIcon>
  );
}

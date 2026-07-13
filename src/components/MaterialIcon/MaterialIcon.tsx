import * as React from 'react';
import parse from 'html-react-parser';
import { createSvgIcon } from '@mui/material/utils';

export interface MaterialIconProps {
  /** SVG markup of the icon (provided by the UXPin icon picker via iconMap). */
  children?: string;
  /**
   * @uxpinignoreprop
   */
  name?: string;
  /** The color of the component. Supports both default and custom theme colors. */
  color?: 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The fontSize applied to the icon. */
  fontSize?: 'inherit' | 'large' | 'medium' | 'small';
  /**
   * Applies a color attribute to the SVG element.
   * @uxpincontroltype color
   */
  htmlColor?: string;
  /** Provides a human-readable title for the element that contains it. */
  titleAccess?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/material-icons/
 * @uxpindescription Renders a specific Material Design icon, built on top of SvgIcon. Used by the UXPin icon picker.
 */
export default function MaterialIcon({ children, name, ...otherProps }: MaterialIconProps) {
  const parsed = typeof children === 'string' ? parse(children) : children;
  const IconComponent = createSvgIcon(parsed as React.ReactNode, name ?? 'MaterialIcon');
  return <IconComponent {...otherProps} />;
}

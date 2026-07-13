import * as React from 'react';
import MuiToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export interface ToggleButtonGroupProps {
  /** The content of the component: ToggleButton elements. */
  children?: React.ReactNode;
  /**
   * The currently selected value within the group. Provide an array when exclusive is false.
   * @uxpinbind onChange 1
   */
  value?: string | string[];
  /** If true, only allow one of the child ToggleButton values to be selected. */
  exclusive?: boolean;
  /** The component orientation (layout flow direction). */
  orientation?: 'horizontal' | 'vertical';
  /** The color of the buttons when they are in an active state. */
  color?: 'standard' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The size of the buttons. */
  size?: 'small' | 'medium' | 'large';
  /** If true, the component is disabled (applied to all children). */
  disabled?: boolean;
  /** If true, the button group takes up the full width of its container. */
  fullWidth?: boolean;
  /** Callback fired when the value changes. The second argument is the new value (or array of values when not exclusive). */
  onChange?: (event: React.MouseEvent<HTMLElement>, value: string | string[] | null) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-toggle-button/
 * @uxpindescription A Toggle Button Group groups related ToggleButton options.
 */
export default function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  return <MuiToggleButtonGroup {...props}>{props.children}</MuiToggleButtonGroup>;
}

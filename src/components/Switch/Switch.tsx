import * as React from 'react';
import MuiSwitch from '@mui/material/Switch';

export interface SwitchProps {
  /**
   * If true, the switch is checked.
   * @uxpinbind onChange 1
   */
  checked?: boolean;
  /** The color of the component. */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The size of the component. */
  size?: 'small' | 'medium';
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, the ripple effect is disabled. */
  disableRipple?: boolean;
  /** If true, the input element is required. */
  required?: boolean;
  /** The value of the component. */
  value?: string;
  /** The id of the input element. */
  id?: string;
  /** Callback fired when the state is changed. The second argument is the new checked state. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-switch/
 * @uxpindescription Switches toggle the state of a single setting on or off.
 */
export default function Switch(props: SwitchProps) {
  return <MuiSwitch {...props} />;
}

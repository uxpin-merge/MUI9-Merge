import * as React from 'react';
import MuiToggleButton from '@mui/material/ToggleButton';

export interface ToggleButtonProps {
  /** The content of the component (text or an Icon). */
  children?: React.ReactNode;
  /** The value to associate with the button when selected in a ToggleButtonGroup. */
  value?: string;
  /**
   * If true, the button is rendered in an active state.
   * @uxpinbind onChange 1
   */
  selected?: boolean;
  /** The color of the button when it is in an active state. */
  color?: 'standard' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The size of the button. */
  size?: 'small' | 'medium' | 'large';
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, the button takes up the full width of its container. */
  fullWidth?: boolean;
  /** Callback fired when the state changes. The second argument is the value of the selected button. */
  onChange?: (event: React.MouseEvent<HTMLElement>, value: string) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-toggle-button/
 * @uxpindescription A Toggle Button can be used to group related options.
 */
export default function ToggleButton(props: ToggleButtonProps) {
  return (
    <MuiToggleButton {...props} value={props.value ?? ''}>
      {props.children}
    </MuiToggleButton>
  );
}

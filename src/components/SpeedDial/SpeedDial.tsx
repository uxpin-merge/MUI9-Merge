import * as React from 'react';
import MuiSpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

export interface SpeedDialProps {
  /** SpeedDialActions to display when the component is open. */
  children?: React.ReactNode;
  /** The aria-label of the button element. Also used to provide the id for the SpeedDial element and its children. */
  ariaLabel?: string;
  /** The icon to display in the SpeedDial Fab. By default an animated SpeedDialIcon is used. */
  icon?: React.ReactNode;
  /** The direction the actions open relative to the floating action button. */
  direction?: 'up' | 'down' | 'left' | 'right';
  /**
   * If true, the component is shown.
   * @uxpinbind onOpen 0
   */
  open?: boolean;
  /** Callback fired when the component requests to be open. The reason can be "toggle", "focus" or "mouseEnter". */
  onOpen?: (event: React.SyntheticEvent<{}>, reason: 'toggle' | 'focus' | 'mouseEnter') => void;
  /** Callback fired when the component requests to be closed. The reason can be "toggle", "blur", "mouseLeave" or "escapeKeyDown". */
  onClose?: (event: React.SyntheticEvent<{}>, reason: 'toggle' | 'blur' | 'mouseLeave' | 'escapeKeyDown') => void;
  /** If true, the SpeedDial is hidden. */
  hidden?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-speed-dial/
 * @uxpindescription When pressed, a floating action button can display three to six related actions in the form of a Speed Dial.
 */
export default function SpeedDial(props: SpeedDialProps) {
  return (
    <MuiSpeedDial
      {...props}
      ariaLabel={props.ariaLabel ?? 'SpeedDial'}
      icon={props.icon ?? <SpeedDialIcon />}
    >
      {props.children}
    </MuiSpeedDial>
  );
}

import * as React from 'react';
import MuiSpeedDialAction from '@mui/material/SpeedDialAction';

export interface SpeedDialActionProps {
  /** The icon to display in the SpeedDial Fab (use MaterialIcon/Icon). */
  icon?: React.ReactNode;
  /** Label to display in the tooltip. */
  tooltipTitle?: React.ReactNode;
  /** Make the tooltip always visible when the SpeedDial is open. */
  tooltipOpen?: boolean;
  /** Placement of the tooltip. */
  tooltipPlacement?: 'bottom' | 'left' | 'right' | 'top';
  /** Adds a transition delay, to allow a series of SpeedDialActions to be animated. */
  delay?: number;
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/speed-dial-action/
 * @uxpindescription A single action button to be used inside the SpeedDial component.
 */
export default function SpeedDialAction(props: SpeedDialActionProps) {
  const { tooltipTitle, tooltipOpen, tooltipPlacement, ...other } = props;

  return (
    <MuiSpeedDialAction
      {...other}
      title={tooltipTitle}
      slotProps={{
        tooltip: {
          open: tooltipOpen,
          placement: tooltipPlacement,
        },
      }}
    />
  );
}

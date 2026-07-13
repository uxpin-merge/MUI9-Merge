import * as React from 'react';
import MuiChip from '@mui/material/Chip';

export interface ChipProps {
  /** The content of the component. */
  label?: React.ReactNode;
  /** The color of the component. */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /** The variant to use. */
  variant?: 'filled' | 'outlined';
  /** The size of the component. */
  size?: 'small' | 'medium';
  /** The Avatar element to display. Choose between displaying an Icon or an Avatar. */
  avatar?: React.ReactNode;
  /** Icon element displayed before the label (use MaterialIcon/Icon). */
  icon?: React.ReactNode;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, the chip will appear clickable, and will raise when pressed, even if the onClick prop is not defined. */
  clickable?: boolean;
  /** On click event for UXPin interactions. */
  onClick?: React.MouseEventHandler;
  /** Callback fired when the delete icon is clicked. If set, the delete icon will be shown. */
  onDelete?: React.EventHandler<React.SyntheticEvent>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-chip/
 * @uxpindescription Chips are compact elements that represent an input, attribute, or action.
 */
export default function Chip(props: ChipProps) {
  const { avatar, icon, ...other } = props;
  return (
    <MuiChip
      {...other}
      avatar={avatar as React.ReactElement | undefined}
      icon={icon as React.ReactElement | undefined}
    />
  );
}

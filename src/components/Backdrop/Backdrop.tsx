import * as React from 'react';
import MuiBackdrop from '@mui/material/Backdrop';

export interface BackdropProps {
  /** If true, the component is shown. */
  open?: boolean;
  /** The content of the component. */
  children?: React.ReactNode;
  /** If true, the backdrop is invisible. It can be used when rendering a popover or a custom select component. */
  invisible?: boolean;
  /** On click event for UXPin interactions. Clicking the backdrop also toggles its visibility. */
  onClick?: React.MouseEventHandler;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-backdrop/
 * @uxpindescription The Backdrop component narrows the user's focus to a particular element on the screen.
 */
export default function Backdrop(props: BackdropProps) {
  const { open = true, onClick, children, ...other } = props;
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]); // Only re-run the effect if open prop changes

  const handleClick = (event: React.MouseEvent) => {
    setIsOpen(!isOpen);
    onClick?.(event);
  };

  return (
    <MuiBackdrop {...other} open={isOpen} onClick={handleClick}>
      {children}
    </MuiBackdrop>
  );
}

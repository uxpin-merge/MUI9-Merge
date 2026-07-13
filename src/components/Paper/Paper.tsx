import * as React from 'react';
import MuiPaper from '@mui/material/Paper';

export interface PaperProps {
  /** The content of the paper. */
  children?: React.ReactNode;
  /** Shadow depth. It accepts values between 0 and 24 inclusive. */
  elevation?: number;
  /** The variant to use. */
  variant?: 'elevation' | 'outlined';
  /** If true, rounded corners are disabled. */
  square?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-paper/
 * @uxpindescription A surface to display content with optional elevation shadow.
 */
export default function Paper(props: PaperProps) {
  return <MuiPaper {...props}>{props.children}</MuiPaper>;
}

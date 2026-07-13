import * as React from 'react';
import MuiLinearProgress from '@mui/material/LinearProgress';

export interface LinearProgressProps {
  /** The variant to use. Use indeterminate or query when there is no progress value. */
  variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
  /** The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100. */
  value?: number;
  /** The value for the buffer variant. Value between 0 and 100. */
  valueBuffer?: number;
  /** The color of the component. */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'inherit';
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-progress/#linear
 * @uxpindescription Progress indicators express an unspecified wait time or display the length of a process.
 */
export default function LinearProgress(props: LinearProgressProps) {
  return <MuiLinearProgress {...props} />;
}

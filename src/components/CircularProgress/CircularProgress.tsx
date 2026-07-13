import * as React from 'react';
import MuiCircularProgress from '@mui/material/CircularProgress';

export interface CircularProgressProps {
  /** The variant to use. Use indeterminate when there is no progress value. */
  variant?: 'determinate' | 'indeterminate';
  /** The value of the progress indicator for the determinate variant. Value between 0 and 100. */
  value?: number;
  /** The color of the component. */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'inherit';
  /** The size of the circle in pixels. */
  size?: number;
  /** The thickness of the circle. */
  thickness?: number;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-progress/#circular
 * @uxpindescription Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.
 */
export default function CircularProgress(props: CircularProgressProps) {
  return (
    <div style={{ width: 'fit-content' }}>
      <MuiCircularProgress {...props} />
    </div>
  );
}

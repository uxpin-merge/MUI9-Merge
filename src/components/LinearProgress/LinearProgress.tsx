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
  // determinate/buffer variants require value/valueBuffer — default them so
  // switching the variant in the editor never warns before values are set
  const { variant, value, valueBuffer, ...other } = props;
  const needsValue = variant === 'determinate' || variant === 'buffer';
  return (
    <MuiLinearProgress
      {...other}
      variant={variant}
      value={value ?? (needsValue ? 50 : undefined)}
      valueBuffer={valueBuffer ?? (variant === 'buffer' ? 75 : undefined)}
    />
  );
}

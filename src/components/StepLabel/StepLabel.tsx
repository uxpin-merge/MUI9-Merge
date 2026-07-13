import * as React from 'react';
import MuiStepLabel from '@mui/material/StepLabel';

export interface StepLabelProps {
  /** The label of the step. */
  children?: React.ReactNode;
  /** The optional node to display below the label (e.g. a Typography with 'Optional'). */
  optional?: React.ReactNode;
  /** If true, the step is marked as failed. */
  error?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/step-label/
 * @uxpindescription The label with icon of a Step, to be used inside the Step component.
 */
export default function StepLabel(props: StepLabelProps) {
  return <MuiStepLabel {...props}>{props.children}</MuiStepLabel>;
}

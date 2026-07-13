import * as React from 'react';
import MuiStepper from '@mui/material/Stepper';

export interface StepperProps {
  /** Two or more Step components. */
  children?: React.ReactNode;
  /** Set the active step (zero based index). Set to -1 to disable all the steps. */
  activeStep?: number;
  /** The component orientation (layout flow direction). */
  orientation?: 'horizontal' | 'vertical';
  /** If set to true and orientation is horizontal, then the step label will be positioned under the icon. */
  alternativeLabel?: boolean;
  /** If set, the Stepper will not assist in controlling steps for linear flow. */
  nonLinear?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-stepper/
 * @uxpindescription Steppers convey progress through numbered steps, providing a wizard-like workflow.
 */
export default function Stepper(props: StepperProps) {
  return <MuiStepper {...props}>{props.children}</MuiStepper>;
}

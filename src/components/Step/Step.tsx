import * as React from 'react';
import MuiStep from '@mui/material/Step';

export interface StepProps {
  /** The content of the component, normally a StepLabel and (for vertical steppers) a StepContent. */
  children?: React.ReactNode;
  /** Sets the step as active. Is passed to child components by the parent Stepper. */
  active?: boolean;
  /** Mark the step as completed. Is passed to child components by the parent Stepper. */
  completed?: boolean;
  /** If true, the step is disabled and will not be clickable. Is passed to child components by the parent Stepper. */
  disabled?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/api/step/
 * @uxpindescription A single step to be used inside the Stepper component. The step index is handled by the parent Stepper.
 */
export default function Step(props: StepProps) {
  return <MuiStep {...props}>{props.children}</MuiStep>;
}

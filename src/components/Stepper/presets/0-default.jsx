import * as React from 'react';
import Stepper from '../Stepper';
import Step from '../../Step/Step';
import StepLabel from '../../StepLabel/StepLabel';

export default (
  <Stepper uxpId="stepper-1" activeStep={1} orientation="horizontal">
    <Step uxpId="stepper-step-1">
      <StepLabel uxpId="stepper-step-label-1">Select campaign settings</StepLabel>
    </Step>
    <Step uxpId="stepper-step-2">
      <StepLabel uxpId="stepper-step-label-2">Create an ad group</StepLabel>
    </Step>
    <Step uxpId="stepper-step-3">
      <StepLabel uxpId="stepper-step-label-3">Create an ad</StepLabel>
    </Step>
  </Stepper>
);

import * as React from 'react';
import MuiSlider from '@mui/material/Slider';

export interface SliderProps {
  /**
   * The value of the slider. For ranged sliders, provide an array with two values.
   * @uxpinbind onChange 1
   */
  value?: number | number[];
  /** The default value. Use when the component is not controlled. */
  defaultValue?: number | number[];
  /** The minimum allowed value of the slider. Should not be equal to max. */
  min?: number;
  /** The maximum allowed value of the slider. Should not be equal to min. */
  max?: number;
  /** The granularity with which the slider can step through values. */
  step?: number;
  /** Marks indicate predetermined values. If true, marks are spaced by the step. An array of { value, label } objects is also accepted. */
  marks?: boolean | { value: number; label?: string }[];
  /** Controls when the value label is displayed. */
  valueLabelDisplay?: 'auto' | 'off' | 'on';
  /** The component orientation. */
  orientation?: 'horizontal' | 'vertical';
  /** The color of the component. */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /** The size of the slider. */
  size?: 'small' | 'medium';
  /** The track presentation: a bar for the value, an inverted bar, or no bar. */
  track?: 'normal' | 'inverted' | false;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** Callback fired when the slider's value changes. The second argument is the new value. */
  onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
  /** Callback fired when the mouseup event is triggered. */
  onChangeCommitted?: (event: React.SyntheticEvent | Event, value: number | number[]) => void;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/material-ui/react-slider/
 * @uxpindescription Sliders allow users to make selections from a range of values.
 */
export default function Slider(props: SliderProps) {
  return <MuiSlider {...props} />;
}

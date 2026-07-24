import * as React from 'react';
import { Gauge as MuiGauge } from '@mui/x-charts/Gauge';

export interface GaugeProps {
  /** The value of the gauge. */
  value?: number;
  /** The minimal value of the gauge. */
  valueMin?: number;
  /** The maximal value of the gauge. */
  valueMax?: number;
  /** If true, the value arc renders without animation (like the other charts). */
  skipAnimation?: boolean;
  /** The start angle in degrees. */
  startAngle?: number;
  /** The end angle in degrees. */
  endAngle?: number;
  /** The radius between circle center and the beginning of the arc. Number in px or percentage string. */
  innerRadius?: number | string;
  /** The radius between circle center and the end of the arc. Number in px or percentage string. */
  outerRadius?: number | string;
  /** The radius applied to arc corners (similar to border radius). Set '50%' for fully rounded arcs. */
  cornerRadius?: number | string;
  /** The width of the chart in px. */
  width?: number;
  /** The height of the chart in px. */
  height?: number;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/x/react-charts/gauge/
 * @uxpindescription The Gauge displays a numeric value that varies within a defined range.
 */
export default function Gauge(props: GaugeProps) {
  const {
    value = 60,
    valueMin = 0,
    valueMax = 100,
    startAngle = 0,
    endAngle = 360,
    width = 200,
    height = 200,
    ...other
  } = props;

  return (
    <MuiGauge
      {...other}
      value={value}
      valueMin={valueMin}
      valueMax={valueMax}
      startAngle={startAngle}
      endAngle={endAngle}
      width={width}
      height={height}
    />
  );
}

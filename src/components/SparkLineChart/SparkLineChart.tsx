import * as React from 'react';
import { SparkLineChart as MuiSparkLineChart } from '@mui/x-charts/SparkLineChart';

const defaultData = [1, 4, 2, 5, 7, 2, 4, 6];

export interface SparkLineChartProps {
  /** Data to plot. An array of numbers. */
  data?: number[];
  /** Type of plot used. */
  plotType?: 'line' | 'bar';
  /** Color used to colorize the sparkline. Prefer CSS variables like 'var(--mui-palette-primary-main)'. */
  color?: string;
  /** If true, the spark line area is filled (line plot only). */
  area?: boolean;
  /** The curve interpolation to apply between points (line plot only). */
  curve?: 'catmullRom' | 'linear' | 'monotoneX' | 'monotoneY' | 'natural' | 'step' | 'stepAfter' | 'stepBefore';
  /** If true, a tooltip is shown on hover. */
  showTooltip?: boolean;
  /** If true, the hovered value is highlighted (point for line, band for bar). */
  showHighlight?: boolean;
  /** The width of the chart in px. */
  width?: number;
  /** The height of the chart in px. */
  height?: number;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/x/react-charts/sparkline/
 * @uxpindescription Sparklines are tiny charts meant to be rendered inline (tables, cards, dashboards). Renders demo data when empty.
 */
export default function SparkLineChart(props: SparkLineChartProps) {
  const {
    data = defaultData,
    color = 'var(--mui-palette-primary-main)',
    width = 200,
    height = 100,
    curve,
    area,
    ...other
  } = props;

  return (
    <MuiSparkLineChart
      {...other}
      data={data}
      color={color}
      curve={curve as never}
      area={area as never}
      width={width}
      height={height}
    />
  );
}

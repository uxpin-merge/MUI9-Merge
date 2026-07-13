import * as React from 'react';
import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart';
import type { LineChartProps as MuiLineChartProps } from '@mui/x-charts/LineChart';

/** JSON-friendly line series definition. */
export interface LineChartSeries {
  /** The id of this series. */
  id?: string;
  /** Data associated to each point. */
  data?: Array<number | null>;
  /** The key used to retrieve data from the dataset (alternative to data). */
  dataKey?: string;
  /** The label to display on the tooltip or the legend. */
  label?: string;
  /** The color of the series. Prefer CSS variables like 'var(--mui-palette-primary-main)'. */
  color?: string;
  /** If true, the area below the line is filled. */
  area?: boolean;
  /** The curve interpolation to apply between points. */
  curve?: 'catmullRom' | 'linear' | 'monotoneX' | 'monotoneY' | 'natural' | 'step' | 'stepAfter' | 'stepBefore';
  /** If true, a mark is shown at each data point. */
  showMark?: boolean;
  /** The stack id. Series with the same stack id are stacked on top of each other. */
  stack?: string;
  /** If true, line jumps over null values instead of breaking. */
  connectNulls?: boolean;
}

/** JSON-friendly axis configuration. */
export interface LineChartAxis {
  /** The id of the axis. */
  id?: string;
  /** The data used by the axis (categories for a point scale). */
  data?: Array<string | number>;
  /** The key used to retrieve data from the dataset. */
  dataKey?: string;
  /** The label of the axis. */
  label?: string;
  /** The scale type of the axis. Use 'point' for categorical x values. */
  scaleType?: 'band' | 'point' | 'linear' | 'log' | 'pow' | 'sqrt' | 'time' | 'utc';
  /** The minimal value of the axis domain. */
  min?: number;
  /** The maximal value of the axis domain. */
  max?: number;
}

const defaultSeries: LineChartSeries[] = [
  {
    id: 'pageviews',
    label: 'Page views',
    data: [30, 46, 29, 23, 38, 30, 15],
    area: true,
    showMark: true,
    color: 'var(--mui-palette-primary-main)',
  },
  {
    id: 'sessions',
    label: 'Sessions',
    data: [28, 32, 10, 18, 35, 25, 10],
    area: true,
    showMark: true,
    color: 'var(--mui-palette-secondary-main)',
  },
];

const defaultXAxis: LineChartAxis[] = [
  { scaleType: 'point', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
];

export interface LineChartProps {
  /** The series to display. An array of objects with `data` (numbers) or `dataKey` into the dataset. */
  series?: LineChartSeries[];
  /** The configuration of the x-axes. Use scaleType 'point' with `data` categories. */
  xAxis?: LineChartAxis[];
  /** The configuration of the y-axes. */
  yAxis?: LineChartAxis[];
  /** An array of plain objects used to populate series and axes via their `dataKey`. */
  dataset?: object[];
  /** The width of the chart in px. */
  width?: number;
  /** The height of the chart in px. */
  height?: number;
  /** Color palette used to colorize multiple series (fallback when a series has no color). */
  colors?: string[];
  /** Option to display a cartesian grid in the background. */
  grid?: { vertical?: boolean; horizontal?: boolean };
  /** If true, the legend is not rendered. */
  hideLegend?: boolean;
  /** If true, animations are skipped. */
  skipAnimation?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/x/react-charts/lines/
 * @uxpindescription Line charts express trends over an ordered dimension, optionally with a filled area. Renders demo data when empty.
 */
export default function LineChart(props: LineChartProps) {
  const {
    series = defaultSeries,
    xAxis = defaultXAxis,
    yAxis,
    dataset,
    width = 500,
    height = 300,
    ...other
  } = props;

  return (
    <MuiLineChart
      {...other}
      dataset={dataset as MuiLineChartProps['dataset']}
      series={series as unknown as MuiLineChartProps['series']}
      xAxis={xAxis as unknown as MuiLineChartProps['xAxis']}
      yAxis={yAxis as unknown as MuiLineChartProps['yAxis']}
      width={width}
      height={height}
    />
  );
}

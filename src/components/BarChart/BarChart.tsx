import * as React from 'react';
import { BarChart as MuiBarChart } from '@mui/x-charts/BarChart';
import type { BarChartProps as MuiBarChartProps } from '@mui/x-charts/BarChart';

/** JSON-friendly bar series definition. */
export interface BarChartSeries {
  /** The id of this series. */
  id?: string;
  /** Data associated to each bar. */
  data?: Array<number | null>;
  /** The key used to retrieve data from the dataset (alternative to data). */
  dataKey?: string;
  /** The label to display on the tooltip or the legend. */
  label?: string;
  /** The color of the series. Prefer CSS variables like 'var(--mui-palette-primary-main)'. */
  color?: string;
  /** The stack id. Series with the same stack id are stacked on top of each other. */
  stack?: string;
}

/** JSON-friendly axis configuration. */
export interface BarChartAxis {
  /** The id of the axis. */
  id?: string;
  /** The data used by the axis (categories for a band scale). */
  data?: Array<string | number>;
  /** The key used to retrieve data from the dataset. */
  dataKey?: string;
  /** The label of the axis. */
  label?: string;
  /** The scale type of the axis. Use 'band' for bar categories. */
  scaleType?: 'band' | 'point' | 'linear' | 'log' | 'pow' | 'sqrt' | 'time' | 'utc';
  /** The minimal value of the axis domain. */
  min?: number;
  /** The maximal value of the axis domain. */
  max?: number;
}

const defaultSeries: BarChartSeries[] = [
  { id: 'a', label: 'Series A', data: [4, 3, 5], color: 'var(--mui-palette-primary-main)' },
  { id: 'b', label: 'Series B', data: [1, 6, 3], color: 'var(--mui-palette-secondary-main)' },
  { id: 'c', label: 'Series C', data: [2, 5, 6], color: 'var(--mui-palette-success-main)' },
];

const defaultXAxis: BarChartAxis[] = [{ scaleType: 'band', data: ['Group A', 'Group B', 'Group C'] }];

export interface BarChartProps {
  /** The series to display. An array of objects with `data` (numbers) or `dataKey` into the dataset. */
  series?: BarChartSeries[];
  /** The configuration of the x-axes. Use scaleType 'band' with `data` categories for vertical bars. */
  xAxis?: BarChartAxis[];
  /** The configuration of the y-axes. */
  yAxis?: BarChartAxis[];
  /** An array of plain objects used to populate series and axes via their `dataKey`. */
  dataset?: object[];
  /** The width of the chart in px. */
  width?: number;
  /** The height of the chart in px. */
  height?: number;
  /** The direction of the bar elements. */
  layout?: 'horizontal' | 'vertical';
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
 * @uxpindocurl https://mui.com/x/react-charts/bars/
 * @uxpindescription Bar charts express quantities through a bar's length, using a common baseline. Renders demo data when empty.
 */
export default function BarChart(props: BarChartProps) {
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
    <MuiBarChart
      {...other}
      dataset={dataset as MuiBarChartProps['dataset']}
      series={series as unknown as MuiBarChartProps['series']}
      xAxis={xAxis as unknown as MuiBarChartProps['xAxis']}
      yAxis={yAxis as unknown as MuiBarChartProps['yAxis']}
      width={width}
      height={height}
    />
  );
}

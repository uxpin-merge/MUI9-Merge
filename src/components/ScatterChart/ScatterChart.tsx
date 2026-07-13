import * as React from 'react';
import { ScatterChart as MuiScatterChart } from '@mui/x-charts/ScatterChart';
import type { ScatterChartProps as MuiScatterChartProps } from '@mui/x-charts/ScatterChart';

/** JSON-friendly scatter point definition. */
export interface ScatterChartPoint {
  /** The x coordinate of the point. */
  x: number;
  /** The y coordinate of the point. */
  y: number;
  /** A unique identifier for the point. */
  id?: string | number;
}

/** JSON-friendly scatter series definition. */
export interface ScatterChartSeries {
  /** The id of this series. */
  id?: string;
  /** The points of the series. */
  data?: ScatterChartPoint[];
  /** The label to display on the tooltip or the legend. */
  label?: string;
  /** The color of the series. Prefer CSS variables like 'var(--mui-palette-primary-main)'. */
  color?: string;
  /** Size of the markers in px. */
  markerSize?: number;
}

/** JSON-friendly axis configuration. */
export interface ScatterChartAxis {
  /** The id of the axis. */
  id?: string;
  /** The label of the axis. */
  label?: string;
  /** The minimal value of the axis domain. */
  min?: number;
  /** The maximal value of the axis domain. */
  max?: number;
}

const defaultSeries: ScatterChartSeries[] = [
  {
    id: 'a',
    label: 'Series A',
    color: 'var(--mui-palette-primary-main)',
    data: [
      { x: 100, y: 200, id: 1 },
      { x: 120, y: 100, id: 2 },
      { x: 170, y: 300, id: 3 },
      { x: 140, y: 250, id: 4 },
      { x: 150, y: 400, id: 5 },
      { x: 110, y: 280, id: 6 },
    ],
  },
  {
    id: 'b',
    label: 'Series B',
    color: 'var(--mui-palette-secondary-main)',
    data: [
      { x: 300, y: 300, id: 1 },
      { x: 400, y: 500, id: 2 },
      { x: 200, y: 700, id: 3 },
      { x: 340, y: 350, id: 4 },
      { x: 560, y: 500, id: 5 },
      { x: 230, y: 780, id: 6 },
      { x: 500, y: 400, id: 7 },
      { x: 300, y: 500, id: 8 },
    ],
  },
];

export interface ScatterChartProps {
  /** The series to display. An array of objects with a `data` array of { x, y, id } points. */
  series?: ScatterChartSeries[];
  /** The configuration of the x-axes. */
  xAxis?: ScatterChartAxis[];
  /** The configuration of the y-axes. */
  yAxis?: ScatterChartAxis[];
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
 * @uxpindocurl https://mui.com/x/react-charts/scatter/
 * @uxpindescription Scatter charts express the relation between two variables, using points in a surface. Renders demo data when empty.
 */
export default function ScatterChart(props: ScatterChartProps) {
  const { series = defaultSeries, xAxis, yAxis, width = 500, height = 300, ...other } = props;

  return (
    <MuiScatterChart
      {...other}
      series={series as unknown as MuiScatterChartProps['series']}
      xAxis={xAxis as unknown as MuiScatterChartProps['xAxis']}
      yAxis={yAxis as unknown as MuiScatterChartProps['yAxis']}
      width={width}
      height={height}
    />
  );
}

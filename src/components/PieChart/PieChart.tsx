import * as React from 'react';
import { PieChart as MuiPieChart } from '@mui/x-charts/PieChart';
import type { PieChartProps as MuiPieChartProps } from '@mui/x-charts/PieChart';

/** JSON-friendly pie slice definition. */
export interface PieChartSlice {
  /** A unique identifier of the pie slice. */
  id?: string | number;
  /** The value of the slice. */
  value: number;
  /** The label to display on the tooltip, arc, or the legend. */
  label?: string;
  /** The color of the slice. Prefer CSS variables like 'var(--mui-palette-primary-main)'. */
  color?: string;
}

/** JSON-friendly pie series definition. */
export interface PieChartSeries {
  /** The id of this series. */
  id?: string;
  /** The slices of the pie. */
  data: PieChartSlice[];
  /** The radius between circle center and the beginning of the arc. Number in px or percentage string (e.g. '50%' for a donut). */
  innerRadius?: number | string;
  /** The radius between circle center and the end of the arc. Number in px or percentage string. */
  outerRadius?: number | string;
  /** The padding angle (deg) between two arcs. */
  paddingAngle?: number;
  /** The radius applied to arc corners (similar to border radius). */
  cornerRadius?: number | string;
  /** The start angle (deg) of the whole pie. */
  startAngle?: number;
  /** The end angle (deg) of the whole pie. */
  endAngle?: number;
  /** The label displayed on the arcs. */
  arcLabel?: 'value' | 'label' | 'formattedValue';
}

const defaultSeries: PieChartSeries[] = [
  {
    data: [
      { id: 0, value: 10, label: 'Series A', color: 'var(--mui-palette-primary-main)' },
      { id: 1, value: 15, label: 'Series B', color: 'var(--mui-palette-secondary-main)' },
      { id: 2, value: 20, label: 'Series C', color: 'var(--mui-palette-success-main)' },
    ],
  },
];

export interface PieChartProps {
  /** The series to display. An array of objects, each with a `data` array of slices ({ id, value, label, color }). */
  series?: PieChartSeries[];
  /** The width of the chart in px. */
  width?: number;
  /** The height of the chart in px. */
  height?: number;
  /** Color palette used to colorize slices without an explicit color. */
  colors?: string[];
  /** If true, the legend is not rendered. */
  hideLegend?: boolean;
  /** If true, animations are skipped. */
  skipAnimation?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/x/react-charts/pie/
 * @uxpindescription Pie charts express portions of a whole, using arcs or angles within a circle. Renders demo data when empty.
 */
export default function PieChart(props: PieChartProps) {
  const { series = defaultSeries, width = 400, height = 200, ...other } = props;

  return (
    <MuiPieChart
      {...other}
      series={series as unknown as MuiPieChartProps['series']}
      width={width}
      height={height}
    />
  );
}

import * as React from 'react';
import { RadarChart as MuiRadarChart } from '@mui/x-charts/RadarChart';
import type { RadarChartProps as MuiRadarChartProps } from '@mui/x-charts/RadarChart';

/** JSON-friendly radar series definition. */
export interface RadarChartSeries {
  /** The id of this series. */
  id?: string;
  /** One value per metric, in the same order as `radar.metrics`. */
  data: number[];
  /** The label to display on the tooltip or the legend. */
  label?: string;
  /** The color of the series. Prefer CSS variables like 'var(--mui-palette-primary-main)'. */
  color?: string;
  /** If true, the series area is filled. */
  fillArea?: boolean;
  /** If true, marks at value positions are hidden. */
  hideMark?: boolean;
}

/** JSON-friendly radar configuration. */
export interface RadarChartConfig {
  /** The metrics (spokes) shown by the radar. */
  metrics: string[];
  /** The default max value for radius axes. */
  max?: number;
  /** The starting angle of the rotation axis in degrees. */
  startAngle?: number;
}

const defaultSeries: RadarChartSeries[] = [
  {
    id: 'a',
    label: 'Product A',
    data: [80, 65, 90, 70, 85],
    color: 'var(--mui-palette-primary-main)',
    fillArea: true,
  },
  {
    id: 'b',
    label: 'Product B',
    data: [60, 90, 55, 85, 60],
    color: 'var(--mui-palette-secondary-main)',
    fillArea: true,
  },
];

const defaultRadar: RadarChartConfig = {
  metrics: ['Speed', 'Quality', 'Cost', 'Reach', 'Support'],
  max: 100,
};

export interface RadarChartProps {
  /** The series to display. An array of objects with `data` (one number per metric). */
  series?: RadarChartSeries[];
  /** The radar configuration: the `metrics` (spokes) and optional `max` / `startAngle`. */
  radar?: RadarChartConfig;
  /** The width of the chart in px. */
  width?: number;
  /** The height of the chart in px. */
  height?: number;
  /** If true, the legend is not rendered. */
  hideLegend?: boolean;
  /** If true, animations are skipped. */
  skipAnimation?: boolean;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: object;
}

/**
 * @uxpindocurl https://mui.com/x/react-charts/radar/
 * @uxpindescription Radar charts compare multivariate data on axes starting from the same point. Renders demo data when empty.
 */
export default function RadarChart(props: RadarChartProps) {
  const {
    series = defaultSeries,
    radar = defaultRadar,
    width = 400,
    height = 300,
    ...other
  } = props;

  return (
    <MuiRadarChart
      {...other}
      series={series as unknown as MuiRadarChartProps['series']}
      radar={radar as unknown as MuiRadarChartProps['radar']}
      width={width}
      height={height}
    />
  );
}

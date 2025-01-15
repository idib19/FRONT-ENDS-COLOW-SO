export interface ChartDataPoint {
  [key: string]: string | number;
}

export interface BaseChartProps {
  height?: number | string;
  width?: number | string;
}

export interface BarChartProps extends BaseChartProps {
  data: ChartDataPoint[];
  xAxisKey?: string;
  valueKey?: string;
}

export interface PieChartProps extends BaseChartProps {
  data: ChartDataPoint[];
  dataKey?: string;
}
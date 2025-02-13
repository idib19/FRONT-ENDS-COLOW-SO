"use client";

import {
  Bar,
  BarChart as RechartsBar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BarChartProps } from './types';
import { CHART_COLORS, DEFAULT_CHART_CONFIG } from '@/lib/chart-utils';

export function BarChart({ 
  data, 
  xAxisKey = "month", 
  valueKey = "value",
  height = "100%",
  width = "100%"
}: BarChartProps) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <RechartsBar data={data} margin={DEFAULT_CHART_CONFIG.margin}>
        <CartesianGrid strokeDasharray={DEFAULT_CHART_CONFIG.gridDash} />
        <XAxis 
          dataKey={xAxisKey}
          fontSize={12}
          tickLine={false}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />
        <Tooltip />
        <Bar 
          dataKey={valueKey} 
          fill={CHART_COLORS.primary}
          radius={DEFAULT_CHART_CONFIG.barRadius as [number, number, number, number]}
        />
      </RechartsBar>
    </ResponsiveContainer>
  );
}
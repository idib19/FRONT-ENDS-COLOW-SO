"use client";

import {
  Cell,
  Pie,
  PieChart as RechartsPie,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { PieChartProps } from './types';
import { CHART_COLORS } from '@/lib/chart-utils';

export function PieChart({ 
  data, 
  dataKey = "value",
  height = "100%",
  width = "100%"
}: PieChartProps) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <RechartsPie>
        <Pie
          data={data}
          dataKey={dataKey}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={60}
        >
          {data.map((_, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={CHART_COLORS.status[index % CHART_COLORS.status.length]} 
            />
          ))}
        </Pie>
        <Tooltip />
      </RechartsPie>
    </ResponsiveContainer>
  );
}
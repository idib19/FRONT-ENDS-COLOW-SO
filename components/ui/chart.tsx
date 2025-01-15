"use client";

import {
  Bar,
  BarChart as RechartsBar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Pie,
  PieChart as RechartsPie,
  Cell,
  CartesianGrid
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface ChartData {
  [key: string]: string | number;
}

interface BarChartProps {
  data: ChartData[];
  xAxisKey?: string;
  valueKey?: string;
}

interface PieChartProps {
  data: ChartData[];
  dataKey?: string;
}

export function BarChart({ 
  data, 
  xAxisKey = "month", 
  valueKey = "value" 
}: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBar data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey={xAxisKey}
          tick={{ fontSize: 12 }}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <Bar 
          dataKey={valueKey} 
          fill="#8884d8"
          radius={[4, 4, 0, 0]}
        />
      </RechartsBar>
    </ResponsiveContainer>
  );
}

export function PieChart({ 
  data, 
  dataKey = "value" 
}: PieChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
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
              fill={COLORS[index % COLORS.length]} 
            />
          ))}
        </Pie>
        <Tooltip />
      </RechartsPie>
    </ResponsiveContainer>
  );
}
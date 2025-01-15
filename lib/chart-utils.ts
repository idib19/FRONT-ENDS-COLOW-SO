// Utility functions for charts
export const formatChartValue = (value: number) => {
  return new Intl.NumberFormat('fr-FR').format(value);
};

export const CHART_COLORS = {
  primary: '#8884d8',
  secondary: '#82ca9d',
  status: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
};

export const DEFAULT_CHART_CONFIG = {
  margin: { top: 10, right: 10, left: 10, bottom: 10 },
  barRadius: [4, 4, 0, 0],
  gridDash: '3 3',
};
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import React from 'react';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

interface PieChartProps {
  chartData: number[];
  chartOptions: ApexOptions;
}

const PieChart: React.FC<PieChartProps> = ({ chartData, chartOptions }) => {
  return (
    <Chart
      options={chartOptions}
      series={chartData}
      type="pie"
      width="100%"
      height="100%"
    />
  );
};

export default PieChart;

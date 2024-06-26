import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = ({ oee, downtime, goodCount, scrapCount, oeeLoss }) => {
  const seriesData = [oee, downtime, goodCount, scrapCount, oeeLoss];

  const options = {
    chart: {
      type: 'bar',
      height: 380,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['OEE', 'Downtime', 'Good Units', 'Bad Units', 'OEE Loss'],
    },
  };

  return (
    <div id="chart" className="text-center">
      <h3>OEE LOSSES</h3>
      <ReactApexChart options={options} series={[{ data: seriesData }]} type="bar" height={380} />
    </div>
  );
};

export default BarChart;

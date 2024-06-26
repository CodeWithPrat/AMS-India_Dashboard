import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Highcharts options for each gauge chart
const chartOptions = {
  chart: {
    type: 'gauge',
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  pane: {
    center: ['50%', '60%'],
    size: '80%',
    startAngle: -150,
    endAngle: 150,
    background: {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        stops: [
          [0, '#9ef01a'], // Start color
          [1, '#582f0e']  // End color
        ]
      },
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  },
  yAxis: {
    min: 0,
    max: 10, // Set a fixed min and max value
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    labels: {
      distance: 10,
      style: {
        color: '#333',
        fontSize: '12px'
      }
    }
  },
  plotOptions: {
    gauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  },
  series: [{
    name: 'Voltage',
    data: [0], // Initial value
    dataLabels: {
      format: '<div style="text-align:center"><span style="font-size:25px">{y}</span></div>'
    }
  }]
};


const VoltageInput = () => {
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cmti-edge.online/smddc/AMSINDIA.php');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setChartData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const intervalId = setInterval(fetchData, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const { vin1 = 0, vin2 = 0, vin3 = 0, vin4 = 0 } = chartData;

  return (
    <div className=''>
      <div className='d-flex ps-3 mt-4 ms-4 bg-sky-700 w-full h-16 justify-center items-center text-white rounded-[20px] md:w-80'>
        <h2>Voltage Input (V)</h2>
      </div>
      <div className='vol_one grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-5'>
        <div className='col'>
          <HighchartsReact
            highcharts={Highcharts}
            options={{ ...chartOptions, title: { text: 'Voltage Input 1' }, series: [{ ...chartOptions.series[0], data: [vin1 / 1] }] }}
          />
        </div>
        <div className='col'>
          <HighchartsReact
            highcharts={Highcharts}
            options={{ ...chartOptions, title: { text: 'Voltage Input 2' }, series: [{ ...chartOptions.series[0], data: [vin2 / 1] }] }}
          />
        </div>
        <div className='col mt-3'>
          <HighchartsReact
            highcharts={Highcharts}
            options={{ ...chartOptions, title: { text: 'Voltage Input 3' }, series: [{ ...chartOptions.series[0], data: [vin3 / 1] }] }}
          />
        </div>
        <div className='col mt-3'>
          <HighchartsReact
            highcharts={Highcharts}
            options={{ ...chartOptions, title: { text: 'Voltage Input 4' }, series: [{ ...chartOptions.series[0], data: [vin4 / 1] }] }}
          />
        </div>
      </div>
    </div>
  );
};

export default VoltageInput;

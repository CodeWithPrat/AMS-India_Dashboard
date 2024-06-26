import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

import SimpleBackdrop from '../Loading/Loader';
import './Temperature.css'



function Rtd() {
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://cmti-edge.online/smddc/AMSINDIA.php');
                setValues(response.data);
                setLoading(false);
            } catch (err) {
                console.log("Error Fetching Data:", err);
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const getGaugeOptions = (title, valueKey) => {
        return {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                height: '80%'
            },
            title: {
                text: title
            },
            yAxis: {
                min: 0,
                max: 200,
                tickPixelInterval: 72,
                tickPosition: 'inside',
                tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
                tickLength: 20,
                tickWidth: 2,
                minorTickInterval: null,
                labels: {
                    distance: 20,
                    style: {
                        fontSize: '14px'
                    }
                },
                lineWidth: 0,
                plotBands: [{
                    from: 0,
                    to: 120,
                    color: '#55BF3B', // green
                    thickness: 20
                }, {
                    from: 120,
                    to: 160,
                    color: '#DDDF0D', // yellow
                    thickness: 20
                }, {
                    from: 160,
                    to: 200,
                    color: '#DF5353', // red
                    thickness: 20
                }]
            },
            series: [{
                name: title,
                data: [values[valueKey] / 1],
                tooltip: {
                    valueSuffix: ''
                },
                dataLabels: {
                    format: `${values[valueKey] / 1} °C`,
                    borderWidth: 0,
                    color: (
                        Highcharts.defaultOptions.title &&
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || '#333333',
                    style: {
                        fontSize: '22px'
                    }
                },
                dial: {
                    radius: '80%',
                    backgroundColor: 'gray',
                    baseWidth: 12,
                    baseLength: '0%',
                    rearLength: '0%'
                },
                pivot: {
                    backgroundColor: 'gray',
                    radius: 6
                }
            }]
        };
    };

    if (loading) {
        return <SimpleBackdrop open={loading} />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='temperature_content'>
            

            <div className='mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-1 '>
                <div className='col'>
                    <HighchartsReact highcharts={Highcharts} options={getGaugeOptions('RTD 1', 'rtd1')} />
                </div>
                <div className='col'>
                    <HighchartsReact highcharts={Highcharts} options={getGaugeOptions('RTD 2', 'rtd2')} />
                </div>
                <div className='col'>
                    <HighchartsReact highcharts={Highcharts} options={getGaugeOptions('RTD 3', 'rtd3')} />
                </div>
                <div className='col'>
                    <HighchartsReact highcharts={Highcharts} options={getGaugeOptions('RTD 4', 'rtd4')} />
                </div>
            </div>
        </div>
    );
}

export default Rtd;

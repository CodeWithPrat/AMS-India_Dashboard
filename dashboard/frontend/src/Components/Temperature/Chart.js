import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import moment from 'moment';
import 'highcharts/modules/data';
import 'highcharts/modules/exporting';
import 'highcharts/modules/export-data';
import 'highcharts/modules/accessibility';

const Chart = () => {
    const [values, setValues] = useState({});
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
    const [startTime, setStartTime] = useState('08:00');
    const [endTime, setEndTime] = useState('17:00');

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get('https://cmti-edge.online/smddc/AMSINDIA.php');
            setValues(response.data);
        } catch (err) {
            console.log('Error Fetching Data:', err);
        }
    }, []);

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 1000);
        return () => clearInterval(interval);
    }, [fetchData]);

    const updateGraph = useCallback(() => {
        axios.get(`https://cmti-edge.online/smddc/graph1.php?date=${selectedDate}`)
            .then(response => {
                const data = response.data;
    
                const labels = [];
                const rtd1Data = [];
                const rtd2Data = [];
                const rtd3Data = [];
                const rtd4Data = [];
                const tc1Data = [];
                const tc2Data = [];
                const tc3Data = [];
                const tc4Data = [];
    
                // Generate labels for x-axis from 8:00 to 17:00 with 15-minute intervals
                const startHour = 8;
                const endHour = 17;
                for (let hour = startHour; hour <= endHour; hour++) {
                    for (let minute = 0; minute < 60; minute += 15) {
                        const time = moment(`${selectedDate}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00`);
    
                        labels.push(time.toISOString());
                    }
                }
    
                // Fill data arrays based on the fetched data
                labels.forEach(label => {
                    const dataObject = data.find(obj => {
                        const createdTime = moment(obj.created_at, 'YYYY-MM-DD HH:mm:ss');
                        return createdTime.isSame(label, 'minute');
                    });
    
                    rtd1Data.push(dataObject ? parseFloat(dataObject.rtd1) : 0);
                    rtd2Data.push(dataObject ? parseFloat(dataObject.rtd2) : 0);
                    rtd3Data.push(dataObject ? parseFloat(dataObject.rtd3) : 0);
                    rtd4Data.push(dataObject ? parseFloat(dataObject.rtd4) : 0);
                    tc1Data.push(dataObject ? parseFloat(dataObject.tc1) : 0);
                    tc2Data.push(dataObject ? parseFloat(dataObject.tc2) : 0);
                    tc3Data.push(dataObject ? parseFloat(dataObject.tc3) : 0);
                    tc4Data.push(dataObject ? parseFloat(dataObject.tc4) : 0);
                });
    
                updateHighcharts(labels, rtd1Data, rtd2Data, rtd3Data, rtd4Data, tc1Data, tc2Data, tc3Data, tc4Data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [selectedDate]);
    

    const updateHighcharts = (labels, rtd1Data, rtd2Data, rtd3Data, rtd4Data, tc1Data, tc2Data, tc3Data, tc4Data) => {
        Highcharts.chart('container', {
            chart: {
                type: 'line'
            },
            title: {
                text: "Temperature Graph",
            },
            xAxis: {
                categories: labels,
                type: "datetime",
                labels: {
                    formatter: function () {
                        const date = new Date(this.value);
                        const hours = date.getHours();
                        const minutes = date.getMinutes();
                        const ampm = hours >= 12 ? 'PM' : 'AM';
                        const formattedHours = hours % 12 || 12; // Convert hours to 12-hour format
                        const formattedMinutes = minutes.toString().padStart(2, '0'); // Add leading zero if needed
                        return `${formattedHours}:${formattedMinutes} ${ampm}`;
                    },
                },
                title: {
                    text: "Time",
                },
            },
            
            yAxis: {
                title: {
                    text: "Temperature (°C)",
                },
            },
            legend: {
                align: "left",
                verticalAlign: "top",
                borderWidth: 0,
            },
            tooltip: {
                shared: true,
                crosshairs: true,
            },
            plotOptions: {
                series: {
                    cursor: "pointer",
                    className: "popup-on-click",
                    marker: {
                        lineWidth: 1,
                    },
                },
            },
            series: [
                { name: 'RTD 1', data: rtd1Data },
                { name: 'RTD 2', data: rtd2Data },
                { name: 'RTD 3', data: rtd3Data },
                { name: 'RTD 4', data: rtd4Data },
                { name: 'TC 1', data: tc1Data },
                { name: 'TC 2', data: tc2Data },
                { name: 'TC 3', data: tc3Data },
                { name: 'TC 4', data: tc4Data },
            ],
        });
    };

    useEffect(() => {
        updateGraph();
    }, [updateGraph]);

    return (
        <div className="chart-container max-w-screen mx-auto px-4">
            <div className="controls mb-4">
                <label className="block">
                    Select Date:
                    <input type="date" className="mt-1 block w-57" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                </label>
                <label className="block">
                    Select Start Time:
                    <input type="time" className="mt-1 block w-57" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                </label>
                <label className="block">
                    Select End Time:
                    <input type="time" className="mt-1 block w-57" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                </label>
                <button onClick={updateGraph} className="update-button mt-2 p-2 bg-blue-500 text-white">Update Graph</button>
            </div>
            <div id="container" className="chart mb-8"></div>
        </div>
    );
};

export default Chart;

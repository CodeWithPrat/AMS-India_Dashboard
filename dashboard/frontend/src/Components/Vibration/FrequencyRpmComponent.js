import React, { useEffect, useState } from 'react';
import Plotly from 'plotly.js-dist';
import './Vibration.css';

const FrequencyRPM = () => {
    const [frequency, setFrequency] = useState('N/A');
    const [rpm, setRpm] = useState('N/A');
    const [xg, setXg] = useState('N/A');
    const [yg, setYg] = useState('N/A');
    const [zg, setZg] = useState('N/A');
    const [plotInitialized, setPlotInitialized] = useState(false);

    useEffect(() => {
        fetchData();
        fetchGraphData();

        const interval = setInterval(fetchData, 1000);
        initializePlot();

        return () => clearInterval(interval);
    }, []);

    const fetchData = () => {
        fetch('https://cmti-edge.online/smddc/AMSINDIA.php')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setFrequency(parseFloat(data.freq).toFixed(2));
                    setRpm((parseFloat(data.freq) * 60).toFixed(2));
                    setXg(data.xg);
                    setYg(data.yg);
                    setZg(data.zg);
                } else {
                    setFrequency('N/A');
                    setRpm('N/A');
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const initializePlot = () => {
        const layout = {
            title: 'FFT Spectrum',
            xaxis: { title: 'Frequency [Hz]', range: [0, 512] },
            yaxis: { title: 'Acceleration [g]', range: [0, 512], tickformat: ',d' }
        };
        Plotly.newPlot('myDiv', [], layout);
        setPlotInitialized(true);
    };

    const fetchGraphData = () => {
        fetch('https://cmti-edge.online/smddc/fft.php')
            .then(response => response.json())
            .then(data => {
                const xData = JSON.parse(data.x.replace(/"/g, ''));
                const yData = JSON.parse(data.y.replace(/"/g, ''));
                const trace = { x: xData, y: yData, mode: 'lines', type: 'scatter' };
                const layout = {
                    title: 'FFT Spectrum - 2D Plot',
                    xaxis: { title: 'Frequency [Hz]' },
                    yaxis: { title: 'Acceleration [g]' }
                };
                Plotly.newPlot('myDiv', [trace], layout);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const updateGraph = () => {
        if (!plotInitialized) initializePlot();
        fetchGraphData();
    };

    const updateGraphForDate = () => {
        const selectedDate = document.getElementById('datepicker').value;
        const url = `https://cmti-edge.online/smddc/fft_getdate.php?date=${selectedDate}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    clearGraph();
                    alert(data.error);
                } else {
                    const xData = JSON.parse(data.x.replace(/"/g, ''));
                    const yData = JSON.parse(data.y.replace(/"/g, ''));
                    const trace = { x: xData, y: yData, type: 'scatter', mode: 'lines', marker: { color: 'blue' } };
                    Plotly.newPlot('myDiv', [trace]);
                }
            })
            .catch(error => {
                clearGraph();
                console.error('Error fetching data:', error);
                alert('Error fetching data. Please try again later.');
            });
    };

    const clearGraph = () => {
        const layout = {
            title: 'FFT Spectrum',
            xaxis: { title: 'Frequency [Hz]', range: [0, 512] },
            yaxis: { title: 'Acceleration [g]', range: [0, 512], tickformat: ',d' }
        };
        Plotly.newPlot('myDiv', [], layout);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <h3>Frequency (Hz)</h3>
                    <input id="frequency_label" type="text" value={frequency} className="frequency_label" readOnly />
                </div>
                <div className="col-xl-6">
                    <h3>RPM</h3>
                    <input id="rpm_label" type="text" value={rpm} className="rpm_label" readOnly />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-12 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-titles">x axis (g)</h5>
                            <p className="axis-value">{xg}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-titles">y axis (g)</h5>
                            <p className="axis-value">{yg}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-titles">z axis (g)</h5>
                            <p className="axis-value">{zg}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div>
                    <button onClick={updateGraph} className="update-btn">Update the latest</button>
                </div>
                <div className="mt-3">
                    <label htmlFor="datepicker">Select Date:</label>
                    <input type="date" id="datepicker" />
                    <button onClick={updateGraphForDate} className="update-btn">Update Graph for Selected Date</button>
                </div>
                <div className="graph-container">
                    <div id="myDiv" className="graph"></div>
                </div>
            </div>
        </div>
    );
};

export default FrequencyRPM;

import React, { useEffect, useState, useCallback } from 'react';
import Chart from 'chart.js/auto';
import moment from 'moment';
import 'chartjs-adapter-moment';
import axios from 'axios';
import "./Machine.css"

const CurrentChart = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('17:00');

  const fetchMachineStatus = useCallback(() => {
    axios.get('https://cmti-edge.online/smddc/AMSINDIA.php')
      .then(response => {
        const data = response.data;
        const currentValueEm1_current = parseFloat(data.Em1_current);
        const currentValueEm2_current = parseFloat(data.Em2_current);

        const avgCurrent = (currentValueEm1_current + currentValueEm2_current) / 2;

        const cardTitle = document.querySelector('.card-title');
        const cardRunning = document.querySelector('.card-running');

        cardRunning.classList.remove('bg-danger', 'bg-warning', 'bg-success', 'bg-info');

        if (avgCurrent === 0) {
          cardTitle.textContent = 'Off';
          cardRunning.classList.add('bg-danger');
        } else if (avgCurrent > 0 && avgCurrent <= 1) {
          cardTitle.textContent = 'Idle';
          cardRunning.classList.add('bg-warning');
        } else if (avgCurrent > 1 && avgCurrent <= 3) {
          cardTitle.textContent = 'Running';
          cardRunning.classList.add('bg-success');
        } else {
          cardTitle.textContent = 'Machining';
          cardRunning.classList.add('bg-info');
        }
      })
      .catch(error => {
        console.error('Error fetching machine status:', error);
      });
  }, []);

  useEffect(() => {
    fetchMachineStatus();
    const interval = setInterval(fetchMachineStatus, 1000);
    return () => clearInterval(interval);
  }, [fetchMachineStatus]);

  const updateGraph = useCallback(() => {
    axios.get(`https://cmti-edge.online/smddc/graph1.php?date=${selectedDate}`)
      .then(response => {
        const data = response.data;

        const labels = [];
        const em1CurrentData = [];
        const em2CurrentData = [];

        for (let minute = 0; minute < 24 * 60; minute++) {
          const time = moment(`${selectedDate}T00:00:00`, 'YYYY-MM-DDTHH:mm:ss').add(minute, 'minutes');

          if (time.isBetween(`${selectedDate}T${startTime}`, `${selectedDate}T${endTime}`, null, '[]')) {
            const dataObject = data.find(obj => {
              const createdTime = moment(obj.created_at, 'YYYY-MM-DD HH:mm:ss');
              const timeDifference = Math.abs(time.diff(createdTime, 'minutes'));

              return timeDifference < 1;
            });

            em1CurrentData.push(dataObject ? parseFloat(dataObject.Em1_current) : 0);
            em2CurrentData.push(dataObject ? parseFloat(dataObject.Em2_current) : 0);
            labels.push(time.toISOString());
          }
        }

        updateChart(labels, em1CurrentData, em2CurrentData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [selectedDate, startTime, endTime]);

  const updateChart = (labels, em1CurrentData, em2CurrentData) => {
    const ctx = document.getElementById('averageCurrentChart').getContext('2d');

    if (Chart.getChart(ctx)) {
      Chart.getChart(ctx).destroy();
    }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Spindle Current',
          data: em1CurrentData,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false
        }, {
          label: 'Machine Current',
          data: em2CurrentData,
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'minute',
              stepSize: 15,
              displayFormats: {
                minute: 'HH:mm'
              }
            },
            title: {
              display: true,
              text: 'Date and Time'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Current'
            },
            ticks: {
              beginAtZero: true
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                label += context.parsed.y.toFixed(2);
                return label;
              }
            }
          }
        }
      }
    });
  };

  useEffect(() => {
    updateGraph();
  }, [updateGraph]);

  return (
    <div className="machine-status-tab tab-pane fade show active" id="graphContent" role="tabpanel" aria-labelledby="graphTab">
    <div className="row ">
        <div className="col-md-4">
            <h3>Machine Status</h3>
        </div>
    </div>
    <div className="row ">
        <div className="col-lg-2"></div>
        <div className="col-xl-8 ">
            <div className="card card-running ">
                <div className="card-body ">
                    <h5 className="card-title ">Loading...</h5>
                </div>
            </div>
        </div>
        <div className="col-lg-2"></div>
    </div>
    <div className="row">
        <div className="col-md-4">
            <h3>Machine Status Graph</h3>
        </div>
    </div>
    <label htmlFor="datePicker">Select Date:</label>
    <input type="date" id="datePicker" className="date-picker" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
    <br />
    <label htmlFor="startTime">Select Start Time:</label>
    <input type="time" id="startTime" className="start-time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
    <label htmlFor="endTime">Select End Time:</label>
    <input type="time" id="endTime" className="end-time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
    <br />
    <button onClick={updateGraph} className="update-button">Update Graph</button>
    <div className=' d-flex  justify-content-center  align-items-center '>
      <canvas id="averageCurrentChart" className="chart" width="600" height="300"></canvas>
    </div>
    
</div>

  );
};

export default CurrentChart;

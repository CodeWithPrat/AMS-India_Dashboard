import React, { useState, useEffect, useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import axios from "axios";
import './Machine.css'

// Initialize HighchartsMore
HighchartsMore(Highcharts);

function Machine() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cmti-edge.online/smddc/AMSINDIA.php"
        );
        if (response.status === 200) {
          setChartData(response.data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);


 // Memoize the options to prevent unnecessary re-renders
 const optionsone = useMemo(() => {
  return {
    chart: {
      type: "gauge",
      alignTicks: false,
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: "Energy Consumption (Wh)",
    },
    pane: {
      startAngle: -150,
      endAngle: 150,
    },
    yAxis: [
      {
        min: 0,
        max: 200,
        lineColor: "#52796f",
        tickColor: "#52796f",
        minorTickColor: "#52796f",
        offset: -25,
        lineWidth: 2,
        labels: {
          distance: -25,
          rotation: "auto",
        },
        tickLength: 5,
        minorTickLength: 5,
        endOnTick: false,
      },
      {
        tickPosition: "outside",
        lineColor: "#52796f",
        lineWidth: 2,
        minorTickPosition: "outside",
        tickColor: "#52796f",
        minorTickColor: "#52796f",
        tickLength: 5,
        minorTickLength: 5,
        labels: {
          distance: 12,
          rotation: "auto",
        },
        offset: -20,
        endOnTick: false,
      },
    ],
    series: chartData
      ? [
          {
            name: "Energy Consumption",
            data: [chartData.Em1_Energy / 1],
            dataLabels: {
              format:
                '<span style="color:#339; font-size: 20px; display: flex; justify-content: center; align-items: center; padding: 8px;">{y}</span><br/>',
              backgroundColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1,
                },
                stops: [
                  [0, "#DDD"],
                  [1, "#FFF"],
                ],
              },
            },
          },
        ]
      : [], 
      
  };

}, [chartData]);


const optionstwo = useMemo(() => {
  return {
    chart: {
      type: "gauge",
      alignTicks: false,
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: "Power (P)",
    },
    pane: {
      startAngle: -150,
      endAngle: 150,
    },
    yAxis: [
      {
        min: 0,
        max: 200,
        lineColor: "#52796f",
        tickColor: "#52796f",
        minorTickColor: "#52796f",
        offset: -25,
        lineWidth: 2,
        labels: {
          distance: -25,
          rotation: "auto",
        },
        tickLength: 5,
        minorTickLength: 5,
        endOnTick: false,
      },
      {
        tickPosition: "outside",
        lineColor: "#52796f",
        lineWidth: 2,
        minorTickPosition: "outside",
        tickColor: "#52796f",
        minorTickColor: "#52796f",
        tickLength: 5,
        minorTickLength: 5,
        labels: {
          distance: 12,
          rotation: "auto",
        },
        offset: -20,
        endOnTick: false,
      },
    ],
    series: chartData
      ? [
          {
            name: "Power",
            data: [chartData.Em1_power / 1],
            dataLabels: {
              format:
                '<span style="color:#339; font-size: 20px; display: flex; justify-content: center; align-items: center; padding: 8px;">{y}</span><br/>',
              backgroundColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1,
                },
                stops: [
                  [0, "#DDD"],
                  [1, "#FFF"],
                ],
              },
            },
          },
        ]
      : [], 
    
  };
}, [chartData]);


  // Memoize the options to prevent unnecessary re-renders
  const optionsthree = useMemo(() => {
    return {
      chart: {
        type: "gauge",
        alignTicks: false,
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: "Voltage (V)",
      },
      pane: {
        startAngle: -150,
        endAngle: 150,
      },
      yAxis: [
        {
          min: 0,
          max: 200,
          lineColor: "#52796f",
          tickColor: "#52796f",
          minorTickColor: "#52796f",
          offset: -25,
          lineWidth: 2,
          labels: {
            distance: -25,
            rotation: "auto",
          },
          tickLength: 5,
          minorTickLength: 5,
          endOnTick: false,
        },
        {
          tickPosition: "outside",
          lineColor: "#52796f",
          lineWidth: 2,
          minorTickPosition: "outside",
          tickColor: "#52796f",
          minorTickColor: "#52796f",
          tickLength: 5,
          minorTickLength: 5,
          labels: {
            distance: 12,
            rotation: "auto",
          },
          offset: -20,
          endOnTick: false,
        },
      ],
      series: chartData
        ? [
            {
              name: "Voltage",
              data: [chartData.Em1_voltage / 1],
              dataLabels: {
                format:
                  '<span style="color:#339; font-size: 20px; display: flex; justify-content: center; align-items: center; padding: 8px;">{y}</span><br/>',
                backgroundColor: {
                  linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1,
                  },
                  stops: [
                    [0, "#DDD"],
                    [1, "#FFF"],
                  ],
                },
              },
            },
          ]
        : [], 
    };
  }, [chartData]);


  
    // Memoize the options to prevent unnecessary re-renders
    const optionsfour = useMemo(() => {
      return {
        chart: {
          type: "gauge",
          alignTicks: false,
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false,
        },
        title: {
          text: "Current (A)",
        },
        pane: {
          startAngle: -150,
          endAngle: 150,
        },
        yAxis: [
          {
            min: 0,
            max: 200,
            lineColor: "#52796f",
            tickColor: "#52796f",
            minorTickColor: "#52796f",
            offset: -25,
            lineWidth: 2,
            labels: {
              distance: -25,
              rotation: "auto",
            },
            tickLength: 5,
            minorTickLength: 5,
            endOnTick: false,
          },
          {
            tickPosition: "outside",
            lineColor: "#52796f",
            lineWidth: 2,
            minorTickPosition: "outside",
            tickColor: "#52796f",
            minorTickColor: "#52796f",
            tickLength: 5,
            minorTickLength: 5,
            labels: {
              distance: 12,
              rotation: "auto",
            },
            offset: -20,
            endOnTick: false,
          },
        ],
        series: chartData
          ? [
              {
                name: "Current",
                data: [chartData.Em1_current / 1],
                dataLabels: {
                  format:
                    '<span style="color:#339; font-size: 20px; display: flex; justify-content: center; align-items: center; padding: 8px;">{y}</span><br/>',
                  backgroundColor: {
                    linearGradient: {
                      x1: 0,
                      y1: 0,
                      x2: 0,
                      y2: 1,
                    },
                    stops: [
                      [0, "#DDD"],
                      [1, "#FFF"],
                    ],
                  },
                },
              },
            ]
          : [], 
      };
    }, [chartData]);


  // Memoize the options to prevent unnecessary re-renders
  const optionsfive = useMemo(() => {
    return {
      chart: {
        type: "gauge",
        alignTicks: false,
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: "PF (Average)",
      },
      pane: {
        startAngle: -150,
        endAngle: 150,
      },
      yAxis: [
        {
          min: 0,
          max: 200,
          lineColor: "#52796f",
          tickColor: "#52796f",
          minorTickColor: "#52796f",
          offset: -25,
          lineWidth: 2,
          labels: {
            distance: -25,
            rotation: "auto",
          },
          tickLength: 5,
          minorTickLength: 5,
          endOnTick: false,
        },
        {
          tickPosition: "outside",
          lineColor: "#52796f",
          lineWidth: 2,
          tickColor: "#52796f",
          minorTickColor: "#52796f",
          tickLength: 5,
          minorTickLength: 5,
          labels: {
            distance: 12,
            rotation: "auto",
          },
          offset: -20,
          endOnTick: false,
        },
      ],
      series: chartData
        ? [
            {
              name: "PF",
              data: [chartData.Em1_PF / 1],
              dataLabels: {
                format:
                  '<span style="color:#339; font-size: 20px; display: flex; margin-top: 12px; justify-content: center; align-items: center; padding: 8px;">{y}</span><br/>',
                backgroundColor: {
                  linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1,
                  },
                  stops: [
                    [0, "#DDD"],
                    [1, "#FFF"],
                  ],
                },
              },
            },
          ]
        : [], 
    };
  }, [chartData]);


  return (
    <div className="machine_gauge grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1">
      <div className=" col">
        {chartData && (
          <HighchartsReact highcharts={Highcharts} options={optionsone} />
        )}
      </div>
      <div className=" col">
        {chartData && (
          <HighchartsReact highcharts={Highcharts} options={optionstwo} />
        )}
      </div>
      <div className=" col">
        {chartData && (
          <HighchartsReact highcharts={Highcharts} options={optionsthree} />
        )}
      </div>
      <div className="col">
        {chartData && (
          <HighchartsReact highcharts={Highcharts} options={optionsfour} />
        )}
      </div>
      <div className="col">
        {chartData && (
          <HighchartsReact highcharts={Highcharts} options={optionsfive} />
        )}
      </div>
    </div>
  );
}

export default Machine;

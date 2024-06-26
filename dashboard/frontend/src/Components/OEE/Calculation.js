import React, { useState } from "react";
import APQ from "./Apqs";
import BarChart from "./PiChart";
import OEEChart from './OeeChart';

const OeeCalculator = () => {
  const [productionTime, setProductionTime] = useState(0);
  const [plannedDowntime, setPlannedDowntime] = useState(0);
  const [unplannedDowntime, setUnplannedDowntime] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [scrapCount, setScrapCount] = useState(0);
  const [availability, setAvailability] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [quality, setQuality] = useState(null);
  const [oee, setOee] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateOee = () => {
    if (productionTime === 0 || plannedDowntime === 0 || unplannedDowntime === 0 || totalCount === 0 || scrapCount === 0) {
      alert("Please fill in all input fields");
      return;
    }

    const scheduledProductionTime = productionTime;
    const downTime = plannedDowntime + unplannedDowntime;
    const operatingTime = productionTime - downTime;

    const availabilityValue = (operatingTime / scheduledProductionTime) * 100;
    const availability = availabilityValue.toFixed(2);

    const idealCycleTime = 60;
    const performancePercentage = (totalCount / (idealCycleTime * operatingTime)) * 100;
    const performance = performancePercentage.toFixed(2);

    const goodCount = totalCount - scrapCount;
    const qualityPercentage = (goodCount / totalCount) * 100;
    const quality = qualityPercentage.toFixed(2);

    const calculatedOee = (availabilityValue * performancePercentage * qualityPercentage) / 10000;
    const oee = calculatedOee.toFixed(2);

    setAvailability(availability);
    setPerformance(performance);
    setQuality(quality);
    setOee(oee);
    setIsCalculated(true);
  };

  const handleCalculate = () => {
    calculateOee();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      calculateOee();
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="calculator_card text-black p-4 mx-auto my-3">
        <h2 className="text-center mb-3">OEE Calculator</h2>
        <div className="calculator_body pb-2 rounded-2xl ps-2 pr-3 pt-1">
          <div className="mb-1 row">
            <label className="form-label fs-5 col-sm-6 col-lg-4">Production Time (minutes):</label>
            <input
              type="number"
              className="form-control col-sm-6 col-lg-8"
              onChange={(e) => setProductionTime(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="mb-1 row">
            <label className="form-label fs-5 col-sm-6 col-lg-4">Planned Downtime (minutes):</label>
            <input
              type="number"
              className="form-control col-sm-6 col-lg-8"
              onChange={(e) => setPlannedDowntime(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="mb-1 row">
            <label className="form-label fs-5 col-sm-6 col-lg-4">Unplanned Downtime (minutes):</label>
            <input
              type="number"
              className="form-control col-sm-6 col-lg-8"
              onChange={(e) => setUnplannedDowntime(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="mb-1 row">
            <label className="form-label fs-5 col-sm-6 col-lg-4">Total Parts Produced:</label>
            <input
              type="number"
              className="form-control col-sm-6 col-lg-8"
              onChange={(e) => setTotalCount(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="mb-1 row">
            <label className="form-label fs-5 col-sm-6 col-lg-4">Scrap Parts Produced:</label>
            <input
              type="number"
              className="form-control col-sm-6 col-lg-8"
              onChange={(e) => setScrapCount(parseInt(e.target.value))}
              required
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <button onClick={handleCalculate} className="oee-btn mb-2 mb-sm-0">Calculate OEE</button>
            <h4 className="mb-2 mb-sm-0">OEE: {oee}</h4>
          </div>
        </div>
      </div>

      {isCalculated && (
        <div className="oee_items w-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">
            <div className="BarChart-card">
              <div className="flex justify-center items-center mt-4">
                <BarChart
                  oee={parseFloat(oee)}
                  downtime={parseFloat(plannedDowntime) + parseFloat(unplannedDowntime)}
                  goodCount={parseFloat(totalCount) - parseFloat(scrapCount)}
                  scrapCount={parseFloat(scrapCount)}
                  oeeLoss={100 - parseFloat(oee)}
                />
              </div>
            </div>

            <div className="APQ-card">
              <div className="flex justify-center items-center mt-4">
                <APQ
                  availabilityPercentage={parseFloat(availability)}
                  performancePercentage={parseFloat(performance)}
                  qualityPercentage={parseFloat(quality)}
                />
              </div>
            </div>

            <div className="OEEChart-card">
              <div className="d-flex justify-center items-center mt-4">
                <OEEChart oee={oee} />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default OeeCalculator;

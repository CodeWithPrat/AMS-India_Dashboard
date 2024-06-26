import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './Oee.css';

const Apqs = ({ availabilityPercentage, performancePercentage, qualityPercentage }) => {
  const renderProgressCircle = (percentage, color, text) => (
    <div className="progress-circle">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={10 + (14 - 10) * (100 - percentage) / 100} // Dynamic strokeWidth based on percentage
        styles={buildStyles({
          rotation: 0.5 + (1 - percentage / 100) / 2,
          pathColor: color,
        })}
      />
      <h3 className="oee_text text-center">{text}</h3>
    </div>
  );

  return (
    <div>
       <div className="apq_card container d-flex justify-content-center align-items-center gap-5">
      {renderProgressCircle(availabilityPercentage, "#fb8b24", "Availability")}
      {renderProgressCircle(performancePercentage, "#2196f3", "Performance")}
      {renderProgressCircle(qualityPercentage, "#ba181b", "Quality")}
    </div>
    </div>
   
  );
};

export default Apqs;

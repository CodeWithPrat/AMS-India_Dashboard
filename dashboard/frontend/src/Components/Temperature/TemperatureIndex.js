import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import BackNavigation from "../Navbar/NavHistory";
import Temperature from '../Temperature/Temperature';
import Chart from "./Chart";
import './Temperature.css'
import AssistiveNav from "../AssistiveNav/AssistiveNav";


const TemperatureIndex = () => {
  const [activeComponent, setActiveComponent] = useState("machineStatus");

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className=" ">
      
        <div>
            <NavBar />
        </div>
        <div className="row w-100">
        <div className="back_nav ms-4 col  mt-1 p-2">
            <BackNavigation />
        </div>
        <div className="assist_bar d-flex col  justify-content-end">
          <AssistiveNav/>
        </div>
        </div>

      <div className="">
        <div className="ms-3 p-3">
          <div className="tem_buttong btn-group btn-group-lg w-full md:w-auto" role="group">
            <button
              type="button"
              className={`tem_button btn w-full md:w-80 ${activeComponent === "machineStatus" ? "bg-info text-white" : "bg-transparent text-info border border-info"}`}
              onClick={() => handleComponentChange("machineStatus")}
            >
              Temperature
            </button>
            
            <button
              type="button"
              className={`tem_button btn w-full md:w-80 ${activeComponent === "spindle" ? "bg-info text-white" : "bg-transparent text-info border border-info"}`}
              onClick={() => handleComponentChange("spindle")}
            >
              Temperature Graph
            </button>
            
          </div>
        </div>
        <div className="card-body">
          {activeComponent === "machineStatus" && <Temperature />}
          {activeComponent === "spindle" && <Chart />}
          
        </div>
      </div>
    </div>
  );
};

export default TemperatureIndex;

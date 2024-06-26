import React, { useState, useCallback } from "react";
import MachineStatus from "./MachineStatus";
import Spindle from "./EnergyManagement";
import Machine from "./Machine";
import NavBar from "../Navbar/NavBar";
import BackNavigation from "../Navbar/NavHistory";
import AssistiveNav from "../AssistiveNav/AssistiveNav";
import './Machine.css';

const components = {
  Spindle: <Spindle />,
  Machine: <Machine />,
  machineStatus: <MachineStatus />,
};

const MachineIndex = () => {
  const [activeComponent, setActiveComponent] = useState("Spindle");

  const handleComponentChange = useCallback((component) => {
    setActiveComponent(component);
  }, []);

  return (
    <div>
      <NavBar />
      
      <div className="container-fluid">
      <div className="row w-100">
        <div className="back_nav ms-4 col  mt-1 p-2">
            <BackNavigation />
        </div>
        <div className="assist_bar d-flex col  justify-content-end">
          <AssistiveNav/>
        </div>
        </div>
        <div className="row justify-content-center align-items-center mt-3">
          <div className="col-12 col-md-10 col-lg-8 d-flex justify-content-center align-items-center">
            <div className="machine_texts w-100 fs-2 bg-violet-800 text-white rounded-3 text-center p-3">
              <p className="machine_text m-0">Machine Status and Energy Management</p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="ms-3 p-3">
              <div className="machine_button btn-group w-100" role="group">
                {Object.keys(components).map((key) => (
                  <button
                    key={key}
                    type="button"
                    className={`btn ${activeComponent === key ? "btn-success" : "btn-outline-primary"}`}
                    onClick={() => handleComponentChange(key)}
                  >
                    {key === "machineStatus" ? "Machine Status and Graph" : key}
                  </button>
                ))}
              </div>
            </div>
            <div className="card-body">
              {components[activeComponent]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineIndex;

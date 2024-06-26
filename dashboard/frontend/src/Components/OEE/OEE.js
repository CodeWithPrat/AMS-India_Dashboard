import React from "react";
import OeeCalculator from "./Calculation";
import NavBar from "../Navbar/NavBar";
import BackNavigation from "../Navbar/NavHistory";
import AssistiveNav from "../AssistiveNav/AssistiveNav";

const OEE = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <NavBar />
        <div className="row w-100">
          <div className="back_nav ms-4 col  mt-1 p-2">
            <BackNavigation />
          </div>
          <div className="assist_bar d-flex col  justify-content-end">
            <AssistiveNav />
          </div>
        </div>
        <div className="oee-head-container d-flex justify-content-center align-items-center">
          <div className="oee-sub-container bg-violet-800 h-24 w-1/2 text-white rounded-full p-4 text-center">
            <p>Overall Equipment Effectiveness</p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <OeeCalculator />
        </div>
      </div>
    </>
  );
};

export default OEE;

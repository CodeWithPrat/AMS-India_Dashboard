import React from "react";

import FrequencyRpmComponent from "./FrequencyRpmComponent";
import NavBar from '../Navbar/NavBar'
import BackNavigation from '../Navbar/NavHistory';
import AssistiveNav from "../AssistiveNav/AssistiveNav";



function Vibration() {
  return (
    <div>
      <NavBar />
      <div className="row w-100">
        <div className="back_nav ms-4 col  mt-1 p-2">
            <BackNavigation />
        </div>
        <div className="assist_bar d-flex col  justify-content-end">
          <AssistiveNav/>
        </div>
        </div>

      <div className="freq_vib">
        <div className="">
        <FrequencyRpmComponent />
        </div>
      </div>
    
     
     
    </div>
  );
}

export default Vibration;

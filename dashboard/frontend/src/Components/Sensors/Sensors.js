import React, { useState } from 'react';
import VoltageInput from './VoltageInput';
import CurrentInput from './CurrentInput';
import NavBar from '../Navbar/NavBar';
import BackNavigation from '../Navbar/NavHistory';
import Loader from '../Loading/Loader'; 
import AssistiveNav from "../AssistiveNav/AssistiveNav";


function Sensors() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div className='vh-100'>
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
      <h1 className='ms-5'>Sensors</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <VoltageInput />
          </div>
          <div>
            <CurrentInput />
          </div>
        </>
      )}
    </div>
  )
}

export default Sensors;

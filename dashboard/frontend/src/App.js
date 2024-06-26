import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import UserIndex from "./Components/Login/UserIndex";
import Oee from './Components/OEE/OEE';
import MachineIndex from './Components/MachineStatus/MachineIndex';
import Digital from './Components/Digital/Digital';
import EtopDigital from './Components/Digital/EtopDigital';
import Sensors from './Components/Sensors/Sensors';
import VibrationComponent from './Components/Vibration/Vibration';
import TemperatureIndex from './Components/Temperature/TemperatureIndex';
import ModuleManual from './Components/Manual/ModuleManual';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<UserIndex />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/temperature' element={<TemperatureIndex />}></Route>
          <Route path='/machinestatus' element={<MachineIndex />}></Route>
          <Route path='/digital' element={<Digital />}></Route>
          <Route path='/etopdigital' element={<EtopDigital />}></Route>
          <Route path='/sensors' element={<Sensors />}></Route>
          <Route path='/oee' element={<Oee />}></Route>
          <Route path='/vibration' element={<VibrationComponent />}></Route>
          <Route path='/modulemanual' element={<ModuleManual />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

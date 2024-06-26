import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import './AssistiveNav.css';
import { FaTemperatureHigh, FaPlus } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { MdSensors } from "react-icons/md";
import { DiGitBranch, DiGitPullRequest } from "react-icons/di";
import { RiSensorFill } from "react-icons/ri";
import { ImCalculator } from "react-icons/im";
import { IoHome } from "react-icons/io5";

const AssistiveNav = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  const iconComponents = useMemo(() => ({
    temperature: { icon: <FaTemperatureHigh size={25} color='white' />, text: "Temperature" },
    machinestatus: { icon: <SlEnergy size={25} color='white' />, text: "Machine Status" },
    vibration: { icon: <MdSensors size={25} color='white'/>, text: "Vibration" },
    digital: { icon: <DiGitBranch size={25} color='white'/>, text: "Digital" },
    etopdigital: { icon: <DiGitPullRequest size={30} color='white'/>, text: "Etop Digital" },
    sensors: { icon: <RiSensorFill size={25} color='white'/>, text: "Sensors" },
    oee: { icon: <ImCalculator size={25} color='white'/>, text: "OEE Calculator" },
    dashboard: { icon: <IoHome size={25} color='white'/>, text: "Home" }
  }), []);

  return (
    <div className={`menu ${active ? 'active' : 'inactive'}`}>
      <div className="toggle" onClick={toggleMenu}>
        <FaPlus color='white' />
        <div className="toggle-text">Parameters</div>
      </div>
      {Object.entries(iconComponents).map(([route, { icon, text }], index) => (
        <li key={route} style={{ '--i': index }}>
          <NavLink to={`/${route}`} activeClassName="active" className='text-decoration-none'>
            <div className='assist_icon'>{icon}</div>
            <div className={`assist_text ${active ? 'show' : ''}`}>{text}</div>
          </NavLink>
        </li>
      ))}
    </div>
  );
};

export default AssistiveNav;

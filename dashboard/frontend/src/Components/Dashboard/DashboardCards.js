import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTemperatureHigh, FaCalculator } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { GiVibratingShield } from "react-icons/gi";
import { DiGitCompare, DiGitBranch } from "react-icons/di";
import { RiSensorFill } from "react-icons/ri";

// Memoized Card component to prevent unnecessary re-renders
const Card = React.memo(({ to, icon, text }) => {
  return (
    <div className="box">
      <NavLink to={to} className="card-overlay text-decoration-none">
        <div className="icon-wrapper">{icon}</div>
        <p className="card-text">{text}</p>
      </NavLink>
    </div>
  );
});

// Function to render the dashboard cards
function DashboardCards() {
  // Define an array of card data using useMemo to memoize the result
  const cards = useMemo(() => [
    { to: '/temperature', icon: <FaTemperatureHigh size={50} />, text: 'Temperature' },
    { to: '/machinestatus', icon: <SlEnergy size={45} />, text: 'Energy Management and Machine Status' },
    { to: '/vibration', icon: <GiVibratingShield size={50} />, text: 'Vibration' },
    { to: '/digital', icon: <DiGitBranch size={50} />, text: 'Digital I/O' },
    { to: '/etopdigital', icon: <DiGitCompare size={50} />, text: 'ETOP Digital I/O' },
    { to: '/sensors', icon: <RiSensorFill size={50} />, text: 'Sensors' },
    { to: '/oee', icon: <FaCalculator size={50} />, text: 'OEE Calculator' },
  ], []);

  return (
    <div className="cards flex justify-center items-center">
      <div className="dashboard_cards flex">
        {/* Map through the card data and render each card component */}
        {cards.map((card, index) => (
          <Card key={index} to={card.to} icon={card.icon} text={card.text} />
        ))}
      </div>
    </div>
  );
}

export default DashboardCards;

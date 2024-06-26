import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './AssistiveDashboard.css';
import tempIMG from '../../Images/SimpleCardImages/temperature.png';
import enmngtIMG from '../../Images/SimpleCardImages/bulb.png';
import vibIMG from '../../Images/SimpleCardImages/vibe.png';
import DIOIMG from '../../Images/SimpleCardImages/IO.png';
import EtopIMG from '../../Images/SimpleCardImages/etop-io.png';
import senIMG from '../../Images/SimpleCardImages/Sensor.png';
import calIMG from '../../Images/SimpleCardImages/calculator.png';
import manualImg from '../../Images/SimpleCardImages/manual.png';


const AssistiveDashboard = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const imgData = [
        { id: 'temperature', src: tempIMG, text: "Temperature" },
        { id: 'machinestatus', src: enmngtIMG, text: "Machine Status" },
        { id: 'vibration', src: vibIMG, text: "Vibration" },
        { id: 'digital', src: DIOIMG, text: "Digital I/O" },
        { id: 'modulemanual', src: manualImg, text: "Manual" },
        { id: 'etopdigital', src: EtopIMG, text: "ETOP Digital I/O" },
        { id: 'sensors', src: senIMG, text: "Sensors" },
        { id: 'oee', src: calIMG, text: "OEE Calculator" },
        
    ];

    return (
        <div className="containerss">
            <div className="icon">
                {imgData.map((img, index) => (
                    <NavLink
                        key={img.id}
                        to={`/${img.id}`} // Specify the path you want the NavLink to navigate to
                        className={`imgBx ${activeIndex === index + 1 ? 'actives' : ''}`}
                        style={{ '--i': index + 1 }}
                        onMouseOver={() => setActiveIndex(index + 1)}
                    >
                        <img src={img.src} alt={img.text} />
                        <div className="hoverText">{img.text}</div> {/* Add hover text */}
                    </NavLink>
                ))}
            </div>

            <div className="contentss">
                {imgData.map((img, index) => (
                    <div
                        key={img.id}
                        className={`contentBx ${activeIndex === index + 1 ? 'actives' : ''}`}
                        id={img.id}
                    >
                        <div className="card">
                            <div className="imgBx">
                                <img src={img.src} alt={img.text} />
                            </div>
                            <div className="textBx">
                                <h2>{img.text}</h2> {/* Display the text */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AssistiveDashboard;

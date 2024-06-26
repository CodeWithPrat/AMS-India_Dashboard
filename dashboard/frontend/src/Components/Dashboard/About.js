import React, { useState, useEffect } from 'react';
import Imgtwo from "../../Images/bg images/product1.jpg";
import Imgthree from "../../Images/bg images/product2.jpg";
import Imgfive from "../../Images/bg images/product3.jpg";
import Imgsix from "../../Images/bg images/product4.jpg";
import AssistiveDashboard from '../AssistiveDashboard/AssistiveDashboard';


// Define the functional component 'About'
function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to manage the current image index for slideshow
  const images = [Imgtwo, Imgthree, Imgfive, Imgsix ]; // Array of images for the slideshow

  // useEffect hook to handle the image slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Update the image index every 1800ms
    }, 1800);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <div className="">
      <div className="background row align-items-start mt-4">
        <div className="background_contents col">
          <p className="content d-flex justify-content-center align-items-center ">About the Module</p>
          <div className='content_text_body w-100' >
            <p className="content-text w-100 ps-5 pb-10 ">
              The CMTI's <span className="emphasized">MTCM EDGE MODULE</span> represents a significant leap forward in compact
              <span className="emphasized"> EDGE modules</span>, harnessing Open-Source Hardware technology to offer adaptable
              input/output capabilities tailored for lightweight automation solutions.
              Powered by the <span className="emphasized"> Teensy 4.0, </span> featuring an <span className="emphasized"> ARM Cortex-M7</span> processor running at <span className="emphasized">600MHz</span>, and
              anchored by the <span className="emphasized"> NXP iMXRT1062 chip —</span> renowned in microcontroller technology — this module establishes
              a benchmark in both performance and efficiency.
              With integrated <span className="emphasized">Wi-Fi</span> and <span className="emphasized">BLE</span> functionalities, it seamlessly connects to networks and clouds,
              enabling effortless communication. In industrial environments laden with a variety of sensors,
              from <span className="emphasized">temperature gauges</span> to <span className="emphasized">vibration Sensors</span> and <span className="emphasized">energy meters</span>, this module serves as the central data hub,
              gathering and processing information locally before sending it to the cloud for further examination.
              Enclosed in a sturdy aluminum casing, this portable device excels in harsh conditions, exhibiting resilience across a wide temperature range.
              Its compatibility with the <span className="emphasized">Arduino IDE</span> platform ensures accessibility for programmers of all skill levels, emphasizing its versatility and user-friendly interface.
            </p>
          </div>
        </div>
        <div className="background_content  col">
          <img
            src={images[currentImageIndex]}
            alt=""
            className="background_img object-fit-cover "
          ></img>
        </div>
        <div className="assist_bars col justify-content-end">
          <AssistiveDashboard />
        </div>
      </div>

    </div>
  );
}

export default About;

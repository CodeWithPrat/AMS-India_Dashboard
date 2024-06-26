import React, { useState, useEffect, useCallback } from "react";
import BackNavigation from "../Navbar/NavHistory";
import NavBar from "../Navbar/NavBar";
import AssistiveNav from "../AssistiveNav/AssistiveNav";



const DigitalIOPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      fetch("https://cmti-edge.online/smddc/AMSINDIA.php")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchData();

    const interval = setInterval(fetchData, 1000); // Fetch data every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Memoized function to update switch and LED
  const updateSwitchAndLED = useCallback((id, value) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.backgroundColor = value === "1" ? "green" : "red";
    }
  }, []);

  // Memoized function to update toggle button
  const updateToggleButton = useCallback((id, value) => {
    const element = document.getElementById(id);
    if (element) {
      element.checked = value === "1";
      element.parentElement.classList.toggle("on", value === "1");
    }
  }, []);

  // Update switch and LED when data changes
  useEffect(() => {
    Object.keys(data).forEach((key) => {
      if (key.startsWith("Din")) {
        updateSwitchAndLED(key, data[key]);
      } else if (key.startsWith("Do")) {
        updateToggleButton(`${key}Toggle`, data[key]);
      }
    });
  }, [data, updateSwitchAndLED, updateToggleButton]);

  // Update toggle button periodically for digital outputs
  useEffect(() => {
    const fetchDataAndToggle = (id, valueId) => {
      const value = data[valueId];
      updateToggleButton(id, value);
    };

    Object.keys(data).forEach((key) => {
      if (key.startsWith("Do")) {
        fetchDataAndToggle(`${key}Toggle`, key);
        const interval = setInterval(() => fetchDataAndToggle(`${key}Toggle`, key), 1000);
        return () => clearInterval(interval);
      }
    });
  }, [data, updateToggleButton]);

  return (
    <div className="dio-main">
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
      <p className="dio-head">ETOP Digital I/O</p>
      <div className="row">
        <div className="col">
          <p className="dio-subhead">ETOP Digital Inputs</p>
          <table className="dio-table">
            <thead>
              <tr>
                <th>Input</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((input) => (
                <tr key={`input${input}`}>
                  <td>Input {input}</td>
                  <td>
                    <div id={`Din${input}`} className={`led-indicator ${data[`Din${input}`] === '1' ? 'on' : 'off'}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col">
          <p className="dio-subhead">ETOP Digital Outputs</p>
          <table className="dio-table">
            <thead>
              <tr>
                <th>Output</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((output) => (
                <tr key={`output${output}`}>
                  <td>Output {output}</td>
                  <td>
                    <label className="switch">
                      <input id={`Do${output}Toggle`} type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DigitalIOPage;

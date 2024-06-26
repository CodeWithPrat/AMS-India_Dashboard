import React from 'react'
import pic1 from "../../Images/ModuleManualImages/pic1.jpg"
import BackNavigation from "../Navbar/NavHistory";
// import cabelpic from "../../Images/ModuleManualImages/cabel.jpg"
// import ardbrd1 from "../../Images/ModuleManualImages/ardwin1.jpg"
// import ardbrd2 from "../../Images/ModuleManualImages/ardwin2.jpg"
// import mod1 from "../../Images/ModuleManualImages/modulepic1.jpg"
// import mod2 from "../../Images/ModuleManualImages/modulepic2.jpg"
// import mod3 from "../../Images/ModuleManualImages/modulepic3.jpg"
// import pindesc1 from "../../Images/ModuleManualImages/pindesc1.jpg"
// import pindesc2 from "../../Images/ModuleManualImages/pindesc2.jpg"
// import contflow1 from "../../Images/ModuleManualImages/contflow1.jpg"
// import contflow2 from "../../Images/ModuleManualImages/contflow2.jpg"
// import contflow3 from "../../Images/ModuleManualImages/contflow3.jpg"
// import contflow4 from "../../Images/ModuleManualImages/contflow4.jpg"
// import contflow5 from "../../Images/ModuleManualImages/contflow5.jpg"
// import contflow6 from "../../Images/ModuleManualImages/contflow6.jpg"
// import contflow7 from "../../Images/ModuleManualImages/contflow7.jpg"
// import motherboard1 from "../../Images/ModuleManualImages/motherboard.jpg";
// import motherboard2 from "../../Images/ModuleManualImages/motherboard2.jpg";
// import motherboard3 from "../../Images/ModuleManualImages/motherboard3.jpg";
// import thermocop from "../../Images/ModuleManualImages/thermocop.jpg"
// import triaxial from "../../Images/ModuleManualImages/triaxial.jpg"
// import datatrans from "../../Images/ModuleManualImages/datatransmission.jpg"
// import flowchart from "../../Images/ModuleManualImages/flowchart.jpg"



import "./ModuleManual.css"

function ModuleManual() {
  return (
    <div className=' '>
      <div className="back-navigator ml-6  mt-3 p-1">
            <BackNavigation />
        </div>
      <div className="manual-container">
        <div className="manual-main-head">MTCM EDGE MODULE MANUAL</div>

        <div className="manual-para">
          <div className="manual-subhead">Introduction</div>
          <p className="manual-text">
            The CMTI's MTCM EDGE MODULE represents a significant leap forward in compact EDGE modules, harnessing Open-Source Hardware technology to offer adaptable input/output capabilities tailored for lightweight automation solutions. Powered by the Teensy 4.0, featuring an ARM Cortex-M7 processor running at 600MHz, and anchored by the NXP iMXRT1062 chip — renowned in microcontroller technology — this module establishes a benchmark in both performance and efficiency. With integrated Wi-Fi and BLE functionalities, it seamlessly connects to networks and clouds, enabling effortless communication. In industrial environments laden with a variety of sensors, from temperature gauges to vibration detectors, this module serves as the central data hub, gathering and processing information locally before sending it to the cloud for further examination. Enclosed in a sturdy aluminium casing, this portable device excels in harsh conditions, exhibiting resilience across a wide temperature range. Its compatibility with the Arduino IDE platform ensures accessibility for programmers of all skill levels, emphasizing its versatility and user-friendly interface.
          </p>
        </div>

        <div className="manual-para">
          <div className="manual-subhead">Precautions for Safety</div>
          <div className="manual-list">
            <ul>
              <li>Incorrect use of this product can cause serious damage to the controller.</li>
              <li>Please consult the Device’s User Guide for wiring considerations.</li>
              <li>Before using this product, it's your responsibility to thoroughly read the product’s User Guide and all accompanying documentation.</li>
              <li>Avoid placing the board on conductive surfaces to prevent short circuits.</li>
              <li>Always turn off the power supply to this product and any connected devices before connecting or disconnecting them.</li>
              <li>Remember to remove the power supply before installing or removing the Add-on board inside the MTCM module.</li>
              <li>Operate the MTCM module with both end panels installed.</li>
              <li>Do not plug in or unplug any sensors while the device is powered on.</li>
              <li>Avoid disconnecting equipment in the presence of flammable or combustible atmospheres.</li>
              <li>Exercise caution when handling electrostatic sensitive components and follow the manufacturer's recommendations for their servicing.</li>
            </ul>
          </div>
        </div>

        <div className="manual-para">
          <div className="manual-subhead">Product Overview</div>
          <p className="manual-text">
            The MTCM Edge module represents a cutting-edge solution tailored for industrial machinery control, akin to PLC systems but enriched with advanced functionalities. Seamlessly integrating into the Arduino hardware and software environment, it facilitates real-time monitoring through both Cloud and Local servers. This empowers professionals to upscale automation endeavors in industrial and building settings, granting immediate access to factory floor data and invaluable insights for optimizing manufacturing processes. Leveraging data from diverse sensors and computational outputs, the module efficiently drives a wide array of industrial machinery via its high-performance relays. With its comprehensive feature set, the device excels in product flow management, while its built-in connectivity ensures swift and reliable data delivery through visually appealing dashboards.
          </p>
        </div>

        <div className="manual-para">
          <div className="manual-subhead">Mechanical Dimension</div>
          <div className="manual-images">
            <img src={pic1} alt="module-mechanical-dimension" className="img-fluid" />
          </div>
        </div>
      </div>



      {/* <div className='tables-manual'>
        <p className='manual-subhead'>Features</p>
        <div className='manual-row row'>
          <div className='manual-tables manual-col col'>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">System</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CPU</td>
                  <td>Teensy 4.0 (ARM Cortex-M7, 600MHz CPU)</td>
                </tr>
                <tr>
                  <td>Memory</td>
                  <td>1024K RAM (512K tightly coupled), 1K EEPROM (emulated)</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>1984K Flash</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='manual-tables  manual-col col'>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Power Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Input Range</td>
                  <td>24V DC, 3A with OVP & RPP</td>
                </tr>
                <tr>
                  <td>Consumption</td>
                  <td>72W</td>
                </tr>
                <tr>
                  <td>Product Type</td>
                  <td>Programmable Controller</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='manual-row row'>
          <div className='manual-tables  manual-col col'>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Mechanical</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Casing</td>
                  <td>Extruded Aluminum</td>
                </tr>
                <tr>
                  <td>IP protection</td>
                  <td>IP54</td>
                </tr>
                <tr>
                  <td>Dimensions (W x H x D) mm</td>
                  <td>191.01 x 68.07 x 160.02</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='manual-tables  manual-col col'>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Environment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Operating Temperature</td>
                  <td>0 to 75 ° C</td>
                </tr>
                <tr>
                  <td>Humidity</td>
                  <td>10 to 90% RH, without condensation in operation</td>
                </tr>
                <tr>
                  <td>Electrical connection</td>
                  <td>Removable screw terminal block for inputs and outputs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className='manual-row row w-100'>
          <div className='manual-tables manual-col col'>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Functions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={3}>Analog Inputs </td>
                  <td>Industrial Standard</td>
                </tr>
                <tr>
                  <td>4x -- 0-10V DC</td>
                </tr>
                <tr>
                  <td>4x -- 4-20mA</td>
                </tr>
                <tr>
                  <td>Resolution</td>
                  <td>16 bits</td>
                </tr>
                <tr>
                  <td rowSpan={3}>Analog Outputs</td>
                  <td>Industrial Standard</td>
                </tr>
                <tr>
                  <td>4x -- 0-10V DC</td>
                </tr>
                <tr>
                  <td>4x -- 4-20mA</td>
                </tr>
                <tr>
                  <td>Resolution</td>
                  <td>12 bits</td>
                </tr>
                <tr>
                  <td>Digital Inputs</td>
                  <td>7x -24V DC</td>
                </tr>
                <tr>
                  <td rowSpan={2}>Digital Outputs</td>
                  <td style={{ borderBottom: 'none' }}>7x -24V DC</td>
                </tr>
                <tr>
                  <td style={{ borderBottom: 'none' }}>Current - Output / Channel - 50mA</td>
                </tr>
                <tr>
                  <td>RTD</td>
                  <td>4x -PT100</td>
                </tr>
                <tr>
                  <td>Thermocouple</td>
                  <td>4x -K, J, N, R, S, T, E, or B type</td>
                </tr>
                <tr>
                  <td>Vibration</td>
                  <td>Triaxial Accelerometer (ADXL356)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=' manual-col col'>
            <div className='manual-tables '>
              <table>
                <thead>
                  <tr>
                    <th colSpan="2">Embedded Communication</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Wi-Fi</td>
                    <td>On-chip 2.4GHz</td>
                  </tr>
                  <tr>
                    <td>Ethernet</td>
                    <td>TCP/IP, MODBUS TCP</td>
                  </tr>
                  <tr>
                    <td>Serial</td>
                    <td>RS485 (MODBUS RTU) (Half-duplex without termination resistance)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='manual-tables'>
              <table>
                <thead>
                  <tr >
                    <th style={{ textAlign: "center" }}>Extra Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "center" }}>Micro-SD Card support</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>RTC</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>LED Input/Output Indicators</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='manual-tables '>
              <table>
                <thead>
                  <tr>
                    <th colSpan="2">Software</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Programming method </td>
                    <td>Arduino</td>
                  </tr>
                  <tr>
                    <td rowSpan={2}>USB connectivity</td>
                    <td>Programming/Flashing, Power delivery for
                      programming (Not intended to drive external high-power peripherals)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className='manual-para'>
        <p className='manual-subhead'>Software Requirements</p>
        <div className='manual-list'>
          <ul style={{ listStyleType: 'square' }}>
            <li>Arduino IDE </li>
            <li>Teensyduino addon IDE from Teensy</li>
          </ul>
        </div>
        <p className='manual-text'>MTCM Edge modules are programmed using the Arduino IDE, a software built on the C language. While direct C programming is possible,
          leveraging the Arduino IDE proves notably advantageous due to its extensive library support. Since MTCM edge module integrate the Teensy 4.0 as their controller,
          installation of Teensyduino, an accompanying software, is imperative for executing sketches on Teensy controllers. </p>

        <p className='manual-text'>Notably, the vast majority of Arduino programs seamlessly function on Teensy platforms. All standard Arduino functions, such as
          digitalWrite, pinMode, and analogRead, are fully operational on Teensy. Moreover, Teensyduino boasts compatibility with numerous Arduino libraries,
          facilitating a smooth transition.</p>
      </div>

      <div className='manual-para'>
        <p className='manual-subhead'>Software Installation</p>
        <p className='manual-text'> Download the Arduino IDE software from Arduino's website, </p>
        <p className='manual-text'> After downloading and installation, open the Arduino IDE,</p>
        <p className='manual-text'>In the Arduino software, click File - Preferences. In "Additional boards manager URLs", copy this link: </p>
        <a style={{ marginLeft: "20px" }} href='https://www.pjrc.com/teensy/package_teensy_index.json'> https://www.pjrc.com/teensy/package_teensy_index.json</a>
        <p className='manual-text'> In the main Arduino window, open Boards Manager by clicking the left-side board icon search for "teensy", and click "Install".</p>
      </div>

      <div className='manual-para '>
        <p className='manual-subhead'>How to connect MTCM Module to PC </p>
        <p className='manual-text'> USB Connector</p>
        <div className='manual-list'>
          <ul style={{ listStyleType: 'square' }}>
            <li>The MTCM module can be connected to a computer (USB connection cable type A-B) via the USB port named <b style={{ color: "red" }}>“PROG”</b> that is attached to the front panel. </li>
            <li>Don’t use too much force when connecting the USB cable!</li>
            <li>The main function of the USB port is to program the Teensy controller inside the MTCM module</li>
            <li>Only meant for uploading or debugging, not always connected as a serial in a device</li>
          </ul>
        </div>
        <p className='manual-text'> -Open Arduino IDE interface:</p>
        <img style={{ marginLeft: "20%" }} src={cabelpic} alt='USB-CABLE'></img>
        <p className='manual-text'>Select your board type and port.  </p>
        <p className='manual-text'>-Click on Tools- Board menu that corresponds to your Teensy board and</p>
        <p className='manual-text'>Select the serial device of the board from the Tools(COM1 And COM2 are usually reserved for hardware serial ports)</p>
        <div className=' row'>
          <div className='  col'>
            <img style={{ marginLeft: "40px", height: "500px", width: "800px" }} src={ardbrd1} alt='ARDINO IDE'></img>
          </div>
          <div className='  col'>
            <img style={{ marginLeft: "-55px", height: "500px", width: "800px" }} src={ardbrd2} alt='ARDINO IDE'></img>
          </div>
        </div>
      </div>

      <div className='manual-para'>
        <p className='manual-subhead'>MTCM Edge Module Overview</p>
        <div className=' row'>
          <div className='  col gap-5'>
            <img style={{ marginLeft: "40px", height: "500px", width: "800px" }} src={mod1} alt='MTCM Edge Module'></img>
          </div>
          <div className='  col'>
            <img style={{ margin: "10px", height: "500px", width: "800px" }} src={mod2} alt='MTCM Edge Module'></img>
          </div>
          <div className='  col'>
            <img style={{ marginLeft: "5px", height: "500px", width: "800px" }} src={mod3} alt='MTCM Edge Module'></img>
          </div>
        </div>
      </div>

      <div className='manual-para'>
        <div className=' row'>
          <p className='manual-subhead'>Pin Description</p>
          <div className=' col'>
            <p className='manual-text text-success'>Front View:</p>
            <img style={{ marginLeft: "40px", height: "400px", width: "900px" }} src={pindesc1} alt='Front View'></img>
          </div>
          <div className=' col'>
            <p className='manual-text text-success'>Rear View</p>
            <img style={{ marginLeft: "0px", height: "350px", width: "930px" }} src={pindesc2} alt='Rear View'></img>
          </div>
          <p className='manual-text text-success'>Power supply</p>
          <p className='manual-text'>The MTCM Edge module requires a 24V DC power source. Its power supply circuit boasts built-in safeguards including
            reverse polarity protection and over-voltage protection. Additionally, a 5A fuse is installed to safeguard the module against excessive current and
            short circuits.</p>
          <p className='manual-text'>Connect 24V DC,3A supply and turn on the ON/OFF switch for energising the device.</p>
        </div>
      </div>

      <div className='manual-para'>
        <div className=' row'>
          <p className='manual-subhead'>Usage and connections:</p>
          <p className='manual-sub-subhead'>Analog Inputs (0-10V & 4-20mA):</p>
          <p className='manual-text'>When using analog inputs (0-10V and 4-20mA), signals are converted to suitable voltage levels in order to be compatible
            with the Teensy input pins. </p>
          <p className='manual-sub-subhead'>0-10V Wiring <p className=' text-success '>(* Use the DIP switch to change input voltage levels either 0-5V /0-10V *)</p></p>
          <div className=' d-flex  justify-content-center  align-items-center '>
            <img style={{ marginLeft: "0px", height: "600px", width: "70%" }} src={contflow1} alt='Analog Inputs (0-10V & 4-20mA)'></img>
          </div>

          <p className='manual-sub-subhead'>4-20mA Wiring</p>
          <p className='manual-text'>The 4-20mA input is only for loop powered devices. Loop-powered devices come with two input connections a positive (+) and a
            negative (-). The current signal enters through the positive (+) terminal and leaves via the negative (-) terminal. The power being provided comes from the
            signal circuit. Do not connect external power supply to the sensors</p>
          <div className=' d-flex  justify-content-center  align-items-center '>
            <img style={{ marginLeft: "0px", height: "600px", width: "70%" }} src={contflow2} alt='4-20mA Wiring'></img>
          </div>

          <p className='manual-sub-subhead'>Analog output</p>
          <p className='manual-sub-subhead'>4-20mA output</p>
          <p className='manual-text'>The 4-20mA output circuit requires an external supply voltage. Connect a 24 VDC power supply and the
            end device shall be connected between  <b> “ IOx ” </b>  with respect to COM terminals.</p>
          <div className=' d-flex  justify-content-center  align-items-center '>
            <img style={{ marginLeft: "0px", height: "600px", width: "70%" }} src={contflow3} alt='4-20mA output'></img>
          </div>
        </div>

        <p className='manual-sub-subhead'>0-10V output wiring <p className=' text-success '>(** Use the DIP switch to change output voltage levels to either 0-5V /0-10V)</p></p>
        <div className=' d-flex  justify-content-center  align-items-center '>
          <img style={{ marginLeft: "0px", height: "600px", width: "70%" }} src={contflow4} alt='0-10V output wiring '></img>
        </div>

        <p className='manual-sub-subhead'>Digital inputs </p>
        <p className='manual-text'>Digital inputs serve to capture signals existing in binary states, typically represented as high or low, true or false,
          among others. Furthermore, digital inputs operating within the range of 5 to 24 VDC are opto-isolated, affording them additional protection. These inputs
          utilize an external ground pin for reference.</p>
        <div className=' d-flex  justify-content-center  align-items-center '>
          <img style={{ marginLeft: "0px", height: "600px", width: "70%" }} src={contflow5} alt='Digital inputs '></img>
        </div>

        <p className='manual-sub-subhead'>Digital Outputs</p>
        <p className='manual-text'>The MTCM Edge Module digital outputs can provide a low (0 Vdc) or high (up to 24 Vdc) value.</p>
        <p className='manual-text'>The output high value can range between 5 and 24 Vdc. This voltage needs to be set using two pins: QVDC and G (-).
          For instance, if you want to set the output to 24V, the QVDC pin should be connected to 24V and the G (-) pin to GND of external power supply.
          The following diagram illustrates an example connection:</p>
        <div className=' d-flex  justify-content-center  align-items-center '>
          <img style={{ marginLeft: "0px", height: "600px", width: "70%" }} src={contflow6} alt='Digital Outputs'></img>
        </div>

        <p className='manual-sub-subhead'>RS-485 Wiring</p>
        <div className=' d-flex  justify-content-center  align-items-center '>
          <img style={{ marginLeft: "0px", height: "600px", width: "70%" }} src={contflow7} alt='RS-485 Wiring'></img>
        </div>

        <p className='manual-sub-subhead'>PT100 RTD Wiring</p>
        <p className='manual-text'>The MTCM Edge Module offers the capability to interface with 2-wire, 3-wire, and 4-wire PT100 RTD sensors.
          To enable this functionality, adjustments to the jumper settings are required, as illustrated in the attached image. Ensure that the female terminal
          blocks are removed from both end panels. Then, proceed to unscrew the screws at the end panels and carefully slide out the PCB to
          access the jumper settings.</p>
        <p className=' fs-5 fw-bold  ml-5  text-success'>2 wire method</p>
        <div className=' d-flex  justify-content-center  align-items-center '>
          <img style={{ marginLeft: "0px", height: "600px", width: "40%" }} src={motherboard1} alt='2 wire method'></img>
        </div>

        <p className=' fs-5 fw-bold  ml-5  text-success'>3 wire method</p>
        <div className=' d-flex  justify-content-center  align-items-center '>
          <img style={{ marginLeft: "0px", height: "600px", width: "40%" }} src={motherboard2} alt='3 wire method'></img>
        </div>

        <p className=' fs-5 fw-bold  ml-5  text-success'>4 wire method</p>
        <div className=' d-flex  justify-content-center  align-items-center '>
          <img style={{ marginLeft: "0px", height: "600px", width: "40%" }} src={motherboard3} alt='4 wire method'></img>
        </div>

        <p className='manual-sub-subhead'>Thermocouple wiring </p>
        <div className=' d-flex  justify-content-center  align-items-center '>
          <img style={{ marginLeft: "0px", height: "600px", width: "40%" }} src={thermocop} alt='Thermocouple wiring'></img>
        </div>

        <p className='manual-sub-subhead'>Triaxial Accelerometer wiring </p>
        <div className=' d-flex  justify-content-center  align-items-center '>
          <img style={{ marginLeft: "0px", height: "600px", width: "40%" }} src={triaxial} alt='Triaxial Accelerometer wiring '></img>
        </div>
      </div>

      <div className='manual-para'>
        <p className='manual-subhead'>Wi-Fi Capability & Data Storage</p>
        <p className='manual-text'>The built-in WiFi feature of this module enhances its suitability for IoT applications,
          enabling seamless streaming of acquired sensor data to either cloud or local servers. This data can then be visualized on a stunning dashboard.
          Additionally, the device comes equipped with an 8GB micro-SD card, allowing storage of accumulated data for later analysis.</p>
      </div>

      <div className='manual-para'>
        <p className='manual-subhead'>Pin Mapping</p>
        <p className='manual-text'>The following table shows the mapping of the inputs and outputs of the Teensy Controller</p>

        <div className='tables-manual'>
          <div className='manual-table'>
            <table className=' w-1/2  ml-40'>
              <tbody>
                <tr>
                  <td>Input Type</td>
                  <td>MTCM Edge Module input pins</td>
                  <td>Teensy 4.0 pins</td>
                </tr>
                <tr>
                  <td rowSpan={4} >Analog Inputs</td>
                  <td className=' no-border' >0-10V inputs</td>
                  <td rowSpan={4}>I2C Protocol (A4 & A5)</td>
                </tr>
                <tr>
                  <td className=' no-border'>VI0, VI1, VI2, VI3</td>
                </tr>
                <tr>
                  <td className=' no-border'>4-20mA inputs</td>
                </tr>
                <tr>
                  <td>IIN0, IIN1, IIN2, IIN3</td>
                </tr>

                <tr>
                  <td rowSpan={4}>Analog Outputs</td>
                  <td className=' no-border'>0-10V outputs</td>
                  <td rowSpan={4} >I2C Protocol (A4 & A5)</td>
                </tr>
                <tr>
                  <td className=' no-border'>AO0, AO1, AO2, AO3</td>
                </tr>
                <tr>
                  <td className=' no-border'>4-20mA outputs</td>
                </tr>
                <tr>
                  <td>IO0, IO1, IO2, IO3</td>
                </tr>


                <tr>
                  <td rowSpan={7}>Digital input</td>
                  <td>DI0</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>DI1</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>DI2</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>DI3</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>DI4</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>DI5</td>
                  <td>21</td>
                </tr>
                <tr>
                  <td>DI6</td>
                  <td>24</td>
                </tr>

                <tr>
                  <td rowSpan={7}>Digital output</td>
                  <td>Q0</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td>Q1</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Q2</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Q3</td>
                  <td>31</td>
                </tr>
                <tr>
                  <td>Q4</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>Q5</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td>Q6</td>
                  <td>25</td>
                </tr>

                <tr>
                  <td rowSpan={6}>Accelerometer</td>
                  <td>5v</td>
                  <td>SPI protocol </td>
                </tr>
                <tr>
                  <td>GND</td>
                  <td>MOSI- 11</td>
                </tr>
                <tr>
                  <td>AIN0</td>
                  <td>MISO- 12</td>
                </tr>
                <tr>
                  <td>AIN1</td>
                  <td>SCK-13</td>
                </tr>
                <tr>
                  <td>AIN2</td>
                  <td>CS-28</td>
                </tr>
                <tr>
                  <td>AIN3</td>
                  <td></td>
                </tr>

                <tr>
                  <td rowSpan={5}>PT100 RTD</td>
                  <td>F+</td>
                  <td>SPI protocol </td>
                </tr>
                <tr>
                  <td>RTD+</td>
                  <td>MOSI- 11</td>
                </tr>
                <tr>
                  <td>RTD-</td>
                  <td>MISO- 12</td>
                </tr>
                <tr>
                  <td>F-</td>
                  <td>SCK-13</td>
                </tr>
                <tr>
                  <td></td>
                  <td>CS-2, 4, 5, 3</td>
                </tr>

                <tr>
                  <td rowSpan={4}>Thermocouple</td>
                  <td>--</td>
                  <td>SPI protocol </td>
                </tr>
                <tr>
                  <td>--</td>
                  <td>MOSI- 12</td>
                </tr>
                <tr>
                  <td>--</td>
                  <td>MISO- 13</td>
                </tr>
                <tr>
                  <td>--</td>
                  <td>CS-6, 33, 10, 9</td>
                </tr>

                <tr>
                  <td >RS485</td>
                  <td>A, B</td>
                  <td>Serial2 (TX2-8 & RX2-7)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div className='manual-para'>
        <p className='manual-subhead'>Notes for Installation:</p>
        <p className='manual-text'>During drilling or wiring, ensure that metal particles or wire segments are prevented from entering the module casing,
          as they may lead to fire, faults, or malfunctions. </p>
        <p className='manual-text'>Avoid online connection, plugging, or unplugging of cables, as it can result in electric shock or circuit damage.
          It is imperative that installation and wire connections are both secure and reliable, as poor connections could cause malfunctions. </p>
        <p className='manual-text'>The installation environment must be devoid of dust, oil smoke, conductive particles, corrosive or flammable gases,
          high temperatures, condensation, and rain. The equipment should only be disconnected from the electrical network by removing the connectors that
          supply power to it.  </p>
        <p className='manual-text'>Once installed in the electrical cabinet, it is crucial to ensure the power connectors are properly engaged for optimal operation.</p>
      </div>

      <div className='manual-para'>
        <p className='manual-subhead'>Data Transmission to Cloud Database/ Localhost</p>
        <p className='manual-text'>The MTCM Edge Module incorporates ESP series Wi-Fi Module with Teensy controller for
          streaming sensor data to the cloud or a local host in an efficient way to leverage IoT capabilities. </p>
        <p className='manual-text'>Data is sent to a local server/ cloud server where a PHP script or similar server-side program processes the incoming
          data and stores it in a database like MySQL. Data is typically sent using HTTP POST or GET requests. These requests include the sensor data in the URL
          or as part of the request body. </p>
        <p className='manual-text'>Using dashboards provided by cloud services or custom web interfaces hosted on a local server, real-time sensor data can
          be visualized. This helps in monitoring conditions and making timely decisions. Storing data in a database allows for historical analysis. Trends and
          patterns can be identified, which is useful for predictive maintenance, environmental studies, and optimizing industrial processes.</p>
        <p className='manual-text'>Currently, the module is configured to Hostinger Cloud to host the MySQL database. However, any platform with a LAMP stack
          (Linux, Apache, MySQL/MariaDB, PHP) can be used. Alternatively, users can host the MySQL database locally on a Windows PC using XAMPP.</p>
        <p className='manual-text'>Data Transmission Overview</p>
        <div className=' d-flex  justify-content-center  align-items-center '>
          <img style={{ marginLeft: "0px", height: "40%", width: "50%" }} src={datatrans} alt='Data Transmission'></img>
        </div>
      </div>

      <div className='manual-para'>
        <p className='manual-subhead'>Prerequisites</p>
        <p className='manual-text'>Software Requirements </p>
        <p className='manual-text'>To develop and deploy the Real time machine tool condition monitoring dashboard, following software components and environments
          are required: </p>
        <div className='manual-list'>
          <ul style={{ listStyleType: 'square' }}>
            <li>Web Browser: Latest version of Google Chrome, Firefox, or Microsoft Edge</li>
            <li>Text Editor / IDE: Visual Studio Code or Notepad++</li>
            <li>Web Server: Hostinger (hosting service provider where the project is deployed), XAMPP (for localhost)</li>
            <li>Database: MYSQL database hosted on Hostinger</li>
            <li>Programming Languages: HTML, CSS, JavaScript, PHP</li>
            <li>Libraries and Frameworks: solid-gauge, chart.min, plotly, Justgage, jQuery, Highcharts, Bootstrap</li>
            <li>Database Management Tool: phpMyAdmin</li>
            <li>Version Control System: Git</li>
          </ul>
        </div>
      </div>

      <div className='manual-para'>
        <p className='manual-subhead'>Hosting and Deployment </p>
        <div className='manual-list'>
          <ol style={{ listStyleType: 'number' }}>
            <li>Hosting Provider:
              <ul style={{ listStyleType: 'square' }}>
                <li>Hostinger account with a configured domain and hosting package</li>
                <li>Hostinger’s File manager for uploading and managing files</li>
              </ul>
            </li>
            <li>Database Hosting:
              <ul style={{ listStyleType: 'square' }}>
                <li>MySQL database configured and hosted on Hostinger</li>
                <li>Database credentials (hostname, username, password, database name)</li>
              </ul>
            </li>
            <li>Server Configuration:
              <ul style={{ listStyleType: 'square' }}>
                <li>Ensure that PHP is properly configured on the Hostinger server</li>
                <li>SSL certificate for secure HTTPS connections</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div className='manual-para'>
        <p className='manual-subhead'>Process Flowchart</p>
        <div className=' d-flex  justify-content-center  align-items-center '>
          <img style={{ height: "700px" }} src={flowchart} alt='Process Flowchart'></img>
        </div>
      </div> */}
    </div>
  )
}

export default ModuleManual

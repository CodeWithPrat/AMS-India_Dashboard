import React from "react";
import Header from "./Header"; // Import the Header component
import DashboardCards from "./DashboardCards"; // Import the DashboardCards component
import About from "./About"; // Import the About component
import CalendarComponent from "../Calender/Calender"; // Import the CalendarComponent
import PDFGenerator from "../ReportGenration/ReportGenration"; // Import the PDFGenerator component
import BackgroundComponent from "../BackgroundComponent/Background"; // Import the BackgroundComponent
import Footer from "../Footer/Footer"; // Import the Footer component

function Dashboard() {
  return (
    // Dashboard container
    <div className="dashboard--container">
      {/* Background component */}
      <div className="dashboard--component">
        <BackgroundComponent />
      </div>
      <div className="all_component">
        <Header />
        <About />
        <DashboardCards />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="dash_cal">
                <CalendarComponent />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash_pdf">
                <PDFGenerator />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;

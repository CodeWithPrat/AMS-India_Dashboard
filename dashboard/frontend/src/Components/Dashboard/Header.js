import React from "react";
import "../Dashboard/Header.css";
import CompanyName from "../BackgroundComponent/CompanyName";
import CmtiLogo from '../../Images/cmti-logo.png';
import ProfileCardIndex from "../ProfileCard/ProfileCardIndex";

export default function Header() {
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Company name on left corner */}
                    <div className="col-6 col-md-10">
                        <div className="company-info d-flex justify-content-center align-align-content-center">
                            <CompanyName />
                        </div>
                    </div>
                    {/* Company logo on right corner */}
                    <div className="col-6 col-md-2">
                        <div className="cmti_logos text-md-right">
                            <img src={CmtiLogo} alt="" className="cmti_logo" />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="real_container d-flex justify-content-center align-items-center rounded-[50px]">
                        <p className="real_time p-3 text-center m-0 fs-1">Machine Tool Condition Monitoring Edge Module</p>
                    </div>
                    {/* <div>
                        <ProfileCardIndex />
                    </div> */}
                </div>
            </div>
        </header>
    );
}

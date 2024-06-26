import React from 'react';
import { ExternalLink } from './ExternalLink';
import AmsImg from '../../Images/ams.jpg';
import { SocialMediaIcons } from './SocialMediaIcons';
import './Footer.css'

function Footer() {
  return (
    <div className="footer_body container-fluid ch-footer2">
      <div className="ch-footer1 py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/*left corner*/}
          <div className="col">
            <p className="cmti_a p-3">
              Central Manufacturing Technology Institute Tumkur Road, Yeshwanthpur
              Industrial Area, Phase 1, Yeshwanthpur, Bengaluru – 560 022
            </p>
            <div className="social_media d-flex justify-content-start gap-3 ms-3">
              <SocialMediaIcons />
            </div>
          </div>

          {/*middle exact center*/}
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <div className="copy_container d-flex gap-3">
              <p className="copy_right text-center">
                Copyright © 2024 || Central Manufacturing Technology Institute
                Banglore 560022 || All Rights Reserved ||
                <a href="/privacy-policy" className="link"> Privacy Policy</a> ||
                <a href="/terms-and-conditions" className="link"> Terms and Conditions</a>
              </p>
            </div>
          </div>

          {/*right corner*/}
          <div className="ams_text col d-flex flex-column justify-content-center align-items-md-end text-center text-md-end">
            <h6>
              The technology licenced to Indian MSME, M/s. AMS-India Pvt Limited, Bengaluru.
            </h6>
            <ExternalLink href="https://ams-india.co.in/" target="_blank" rel="noreferrer" className="ams_container mt-3">
              <img src={AmsImg} alt="" className="ams_imgs rounded-2" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>




  );
}

export default Footer;

import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import './Footer.css'


const SocialMediaIcons = () => {
    return (
        <>
            <div className='social-container  bg-slate-300 ' >
                <a href="https://www.google.com/maps/place/Central+Manufacturing+Technology+Institute/@13.0329538,77.5355735,15z/data=!4m6!3m5!1s0x3bae142984e5cddb:0x9ecd3a5ee583fb59!8m2!3d13.0325955!4d77.5353885!16s%2Fg%2F11bycfcwt2?entry=ttu" target="_blank" rel="noreferrer">
                    <FaLocationDot size={32} color="black" />
                </a>
            </div>
            <div className='social-container bg-slate-300'>
                <a href="https://www.facebook.com/CmtiBengaluru/" target="_blank" rel="noreferrer">
                    <FaFacebook size={34} color="#0d47a1" />
                </a>
            </div>

            <div className='social-container bg-slate-300' >
                <a href="https://twitter.com/cmtibengaluru" target="_blank" rel="noreferrer">
                    <FaTwitter size={30} color="black" />
                </a>
            </div>

            <div className='social-container bg-slate-300 '  >
                <a href="https://www.youtube.com/CMTIBengaluru" target="_blank" rel="noreferrer">
                    <FaYoutube size={34} color="#9d0208" />
                </a>
            </div>

            <div className='social-container  bg-slate-300 ' >
                <a href="https://www.linkedin.com/company/cmti-bengaluru/" target="_blank" rel="noreferrer">
                    <FaLinkedin size={32} color="#023e8a" />
                </a>
            </div>
            
        </>
    );
};

export { SocialMediaIcons };

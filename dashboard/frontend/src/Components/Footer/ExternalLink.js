import React from 'react';
import './Footer.css'


const ExternalLink = ({ href, className, children }) => {
    return (
        <a href={href} className={className} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
};

export { ExternalLink };

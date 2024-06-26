import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BackNavigation = ({ containerStyle, linkStyle }) => {
  const location = useLocation();

  // Function to get the parts of the current URL path
  const getPathParts = () => {
    const pathParts = location.pathname.split('/').filter(part => part.trim() !== '');
    return pathParts;
  };

  // Function to render navigation links based on current path
  const renderNavigationLinks = () => {
    const pathParts = getPathParts();
    const links = [];
    let path = '';
    for (let i = 0; i < pathParts.length; i++) {
      path += '/' + pathParts[i];
      const isCurrentPage = i === pathParts.length - 1; // Check if this is the current page
      links.push(
        <span key={i} className='text-black text-[25px]'>
          {' / '}
          <Link to={path} className={ isCurrentPage ? 'text_black' : 'text_blue' }>{pathParts[i]}</Link>
        </span>
      );
    }
    return links;
  };

  return (
    <div className='back_navigator d-flex justify-content-center align-items-center'>
      {/* Link back to dashboard */}
      <Link to="/dashboard" className='text-blue mr-3 text-[25px]'>Dashboard</Link>
      {/* Render navigation links */}
      {renderNavigationLinks()}
    </div>
  );
};

export default BackNavigation;

import React from 'react';
import '../Loading/Loader.css';

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <span className="loader"></span>
    </div>
  );
}

export default Loader;

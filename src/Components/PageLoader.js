import React from 'react';
import './PageLoader.css';

function PageLoader({ isDone }) {
  return (
    <div className={`page-loader ${isDone ? 'page-loader--done' : ''}`} aria-hidden={isDone}>
      <div className="page-loader__content">
        <div className="page-loader__brand">
          <span className="brand-auto">AESHA</span> SEAT CLOTHS
        </div>
        <div className="page-loader__progress" />
      </div>
    </div>
  );
}

export default PageLoader;





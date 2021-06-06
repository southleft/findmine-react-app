import React from 'react';
import './mockPage.css';

const PageBottom = () => {
  return (
    <>
      <div className="page-bottom-desktop">
        <img src="/assets/images/page-bottom.png" alt="Mock page - bottom" />
      </div>
      <div className="page-bottom-mobile">
        <img
          src="assets/images/page-bottom-mobile.png"
          alt="Mock page - bottom"
        />
      </div>
    </>
  );
};

export default PageBottom;

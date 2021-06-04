import React from 'react';
import './mockPage.css';

const PageTop = () => {
  return (
    <>
      <div className="page-top-desktop">
        <img src="/assets/images/page-top.png" alt="Mock page - top" />
      </div>
      <div className="page-top-mobile">
        <img src="/assets/images/page-top-mobile.png" alt="Mock page - top" />
      </div>
    </>
  );
};

export default PageTop;

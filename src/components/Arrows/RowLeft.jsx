import React from 'react';

const RowLeft = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`row-left ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default RowLeft;

import React from 'react';

const RowRight = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`row-right ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default RowRight;

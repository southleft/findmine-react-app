import React from 'react';

const GroupRight = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`group-right ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default GroupRight;

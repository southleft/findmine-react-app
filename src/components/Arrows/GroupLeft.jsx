import React from 'react';

const GroupLeft = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`group-left ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default GroupLeft;

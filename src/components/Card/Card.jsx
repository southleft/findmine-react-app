import React from 'react';

import './card.css';

const Card = (props) => {
  return (
    <div className="card-content">
      <img src={`/assets/images/${props.image}`} alt={props.title} />
      <p className="card-title">{props.title}</p>
      <p className="card-sku">{props.sku}</p>
      <p className="card-price">
        {props.price}
        {props.strikethrough !== null ? (
          <span className="strikethrough">{props.strikethrough}</span>
        ) : (
          ''
        )}
      </p>
    </div>
  );
};

export default Card;

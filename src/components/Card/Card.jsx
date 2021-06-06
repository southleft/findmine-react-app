import React from 'react';

const Card = (props) => {
  return (
    <div
      className={`card-content--${props.layout}`}
      key={props.sku}
      id={`card-${props.sku}`}
    >
      <img src={`/assets/images/${props.image}`} alt={props.title} />
      <div className="card-text">
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
        <p className="card-payments">{props.payments}</p>
        <div className="card-hr"></div>
      </div>
    </div>
  );
};

export default Card;

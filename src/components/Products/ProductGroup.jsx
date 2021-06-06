import React from 'react';
import Slider from 'react-slick';
import { GroupLeft, GroupRight } from '../Arrows';
import Card from '../Card/Card';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slideToScroll: 1,
  swipe: true,
  nextArrow: <GroupRight />,
  prevArrow: <GroupLeft />,
};

const ProductGroup = (props) => {
  return (
      <Slider {...settings}>
        {props.products.map((product) => (
          <Card layout={props.layout} {...product} />
        ))}
      </Slider>
  );
};

export default ProductGroup;

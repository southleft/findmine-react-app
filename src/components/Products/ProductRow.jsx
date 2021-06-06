import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { RowLeft, RowRight } from '../Arrows';
import ProductGroup from './ProductGroup';
import { Row, Col } from 'react-bootstrap';

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slideToScroll: 1,
  swipe: false,
  prevArrow: <RowLeft />,
  nextArrow: <RowRight />,
};

const ProductRow = (props) => {
  return (
    <div className="product-row">
      <Slider {...settings}>
        <div className="product-group">
          <Row>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.cardigans} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.blouses} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.shoes} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.clutches} />
            </Col>
          </Row>
        </div>
        <div className="product-group">
          <Row>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.totes} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.necklaces} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.watches} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.scarves} />
            </Col>
          </Row>
        </div>
        <div className="product-group">
          <Row>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.hats} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.sunglasses} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.belts} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.beanies} />
            </Col>
          </Row>
        </div>
      </Slider>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    blouses: state.blouses,
    cardigans: state.cardigans,
    clutches: state.clutches,
    shoes: state.shoes,
    totes: state.totes,
    necklaces: state.necklaces,
    watches: state.watches,
    scarves: state.scarves,
    hats: state.hats,
    sunglasses: state.sunglasses,
    belts: state.belts,
    beanies: state.beanies,
  };
}

export const ConnectedProductRow = connect(mapStateToProps)(ProductRow);

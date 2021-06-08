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
              <ProductGroup layout={props.layout} products={props.jackets1} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.tops1} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.footwear1} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup
                layout={props.layout}
                products={props.accessories1}
              />
            </Col>
          </Row>
        </div>
        <div className="product-group">
          <Row>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.jackets2} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.tops2} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.footwear2} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup
                layout={props.layout}
                products={props.accessories2}
              />
            </Col>
          </Row>
        </div>
        <div className="product-group">
          <Row>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.jackets3} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.tops3} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup layout={props.layout} products={props.footwear3} />
            </Col>
            <Col xs={props.layout === 'mobile' ? 6 : 3}>
              <ProductGroup
                layout={props.layout}
                products={props.accessories3}
              />
            </Col>
          </Row>
        </div>
      </Slider>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    tops1: state.tops1,
    jackets1: state.jackets1,
    accessories1: state.accessories1,
    footwear1: state.footwear1,
    jackets2: state.jackets2,
    tops2: state.tops2,
    footwear2: state.footwear2,
    accessories2: state.accessories2,
    jackets3: state.jackets3,
    tops3: state.tops3,
    footwear3: state.footwear3,
    accessories3: state.accessories3,
  };
}

export const ConnectedProductRow = connect(mapStateToProps)(ProductRow);

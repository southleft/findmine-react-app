import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './card.css';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

const CardContainer = ({ ...props }) => (
  <Container className="px-24">
    <Row>
      <Col xs={6} md={3}>
        <Swiper pagination={true} className="swiper-card">
          {props.blouses.map((blouse) => (
            <SwiperSlide key={blouse.sku} className="blouse-card">
              <Card {...blouse} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
      <Col xs={6} md={3}>
        <Swiper pagination={true} className="swiper-card">
          {props.cardigans.map((cardigan) => (
            <SwiperSlide key={cardigan.sku} className="cardigan-card">
              <Card {...cardigan} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
      <Col xs={6} md={3}>
        <Swiper pagination={true} className="swiper-card">
          {props.clutches.map((clutch) => (
            <SwiperSlide key={clutch.sku} className="clutch-card">
              <Card {...clutch} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
      <Col xs={6} md={3}>
        <Swiper pagination={true} className="swiper-card">
          {props.shoes.map((shoe) => (
            <SwiperSlide key={shoe.sku} className="shoe-card">
              <Card {...shoe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </Row>
  </Container>
);

function mapStateToProps(state) {
  return {
    blouses: state.blouses,
    cardigans: state.cardigans,
    clutches: state.clutches,
    shoes: state.shoes,
  };
}

export const ConnectedCardContainer = connect(mapStateToProps)(CardContainer);

import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './card.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const CardContainer = ({ ...props }) => (
  <>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: false }}
      // pagination={{
      //   clickable: true,
      // }}
      navigation={true}
      className="outer-swiper"
    >
      <SwiperSlide>
        <Row className="swiper-row">
          <Col xs={6} md={3}>
            <Swiper pagination={true} loop={true} className="swiper-card">
              {props.blouses.map((blouse) => (
                <SwiperSlide key={blouse.sku} className="blouse-card">
                  <Card {...blouse} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col xs={6} md={3}>
            <Swiper pagination={true} loop={true} className="swiper-card">
              {props.cardigans.map((cardigan) => (
                <SwiperSlide key={cardigan.sku} className="cardigan-card">
                  <Card {...cardigan} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col xs={6} md={3}>
            <Swiper pagination={true} loop={true} className="swiper-card">
              {props.clutches.map((clutch) => (
                <SwiperSlide key={clutch.sku} className="clutch-card">
                  <Card {...clutch} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col xs={6} md={3}>
            <Swiper pagination={true} loop={true} className="swiper-card">
              {props.shoes.map((shoe) => (
                <SwiperSlide key={shoe.sku} className="shoe-card">
                  <Card {...shoe} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </SwiperSlide>

      <SwiperSlide>
        <Row className="swiper-row">
          <Col xs={6} md={3}>
            <Swiper pagination={true} loop={true} className="swiper-card">
              {props.totes.map((tote) => (
                <SwiperSlide key={tote.sku} className="tote-card">
                  <Card {...tote} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col xs={6} md={3}>
            <Swiper pagination={true} loop={true} className="swiper-card">
              {props.necklaces.map((necklace) => (
                <SwiperSlide key={necklace.sku} className="necklace-card">
                  <Card {...necklace} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col xs={6} md={3}>
            <Swiper pagination={true} loop={true} className="swiper-card">
              {props.watches.map((watch) => (
                <SwiperSlide key={watch.sku} className="watch-card">
                  <Card {...watch} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col xs={6} md={3}>
            <Swiper pagination={true} loop={true} className="swiper-card">
              {props.scarves.map((scarf) => (
                <SwiperSlide key={scarf.sku} className="scarf-card">
                  <Card {...scarf} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </SwiperSlide>

      <SwiperSlide>
        <Row className="swiper-row">
          <Col xs={6} md={3}>
            <Swiper pagination={true} loop={true} className="swiper-card">
              {props.hats.map((hat) => (
                <SwiperSlide key={hat.sku} className="hat-card">
                  <Card {...hat} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col xs={6} md={3}>
            <Swiper pagination={true} loop={true} className="swiper-card">
              {props.sunglasses.map((sunglasses) => (
                <SwiperSlide key={sunglasses.sku} className="sunglasses-card">
                  <Card {...sunglasses} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col xs={6} md={3}>
            <Swiper pagination={true} loop={true} className="swiper-card">
              {props.belts.map((belt) => (
                <SwiperSlide key={belt.sku} className="belt-card">
                  <Card {...belt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col xs={6} md={3}>
            <Swiper pagination={true} loop={true} className="swiper-card">
              {props.beanies.map((beanie) => (
                <SwiperSlide key={beanie.sku} className="beanie-card">
                  <Card {...beanie} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </SwiperSlide>


    </Swiper>
  </>
);

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

export const ConnectedCardContainer = connect(mapStateToProps)(CardContainer);

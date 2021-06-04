import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import Slide from './Slide';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination]);

const SlideContainer = () => (
  <Row>
    <Col>
      <Swiper pagination={{ dynamicBullets: true }} className="mySwiper">
        <Slide key={'1'}>Slide 1</Slide>
        <Slide key={'2'}>Slide 2</Slide>
        <Slide key={'3'}>Slide 3</Slide>
        <Slide key={'4'}>Slide 4</Slide>
      </Swiper>
    </Col>
  </Row>
);

export default SlideContainer;

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import Slide from './Slide';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Pagination, Navigation]);

const SlideContainer = () => (
  <Row>
    <h1>hello world</h1>
  </Row>
);

export default SlideContainer;

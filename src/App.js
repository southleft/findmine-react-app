import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ConnectedCardContainer } from './components/Card/CardContainer';
import { Container, Row, Col } from 'react-bootstrap';
import PageTop from './components/MockPage/PageTop';
import PageBottom from './components/MockPage/PageBottom';
// import SwiperTest from './components/Swiper/SlideContainer';

const App = () => {
  return (
    <Provider store={store}>
      <Container className="container" fluid>
        <Row>
          <Col>
            <PageTop />
            <ConnectedCardContainer />
            <PageBottom />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
};

export default App;

import React from 'react';
import Header from '../assets/img/page-top.png';
import Footer from '../assets/img/page-bottom.png';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <Container className="container" fluid>
      <Row>
        <Col>
          <div className="layout">
            <div className="page-top-desktop">
              <img src={Header} alt="Page top - desktop" />
            </div>
            <Row className="justify-content-md-center get-look--container">
              <div className="get-look-border"></div>
            </Row>
              <div className="spring-casual">SPRING CASUAL</div>
            {children}
            <div className="footer">
              <img src={Footer} alt="Page bottom - desktop" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;

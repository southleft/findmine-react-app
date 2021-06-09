import React from 'react';
import DesktopHeader from '../assets/img/page-top2.png';
import DesktopFooter from '../assets/img/page-bottom.png';
import MobileHeader from '../assets/img/page-top2-mobile.png';
import MobileFooter from '../assets/img/page-bottom-mobile.png';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = (props) => {
  return (
    <Container className={`container-${props.layout}`} fluid>
      <div className="main-content shadow rounded">
        <Row>
          <Col>
            <div className="layout">
              <div className={`page-top--${props.layout}`}>
                <img
                  className={`header-${props.layout}`}
                  src={props.layout === 'mobile' ? MobileHeader : DesktopHeader}
                  alt="Page top"
                />
              </div>
              {props.layout === 'desktop' && (
                <Row className="justify-content-md-center get-look--container">
                  <div className="get-look-border"></div>
                </Row>
              )}
              <div className="spring-casual">SPRING CASUAL</div>
              {props.children}
              <div className="footer">
                <img
                  className={`footer-${props.layout}`}
                  src={props.layout === 'mobile' ? MobileFooter : DesktopFooter}
                  alt="Page bottom"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Layout;

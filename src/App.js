import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Desktop from './pages/Desktop';
import Mobile from './pages/Mobile';
import './assets/styles/index.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Navbar bg="primary" variant="dark" fixed="top">
          <Nav className="mr-auto">
            <Navbar.Brand href="#"><h5>FindMine Demo</h5></Navbar.Brand>
            <NavDropdown title="Change Viewport Size" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">
                Desktop (1204px wide)
              </NavDropdown.Item>
              <NavDropdown.Item href="/mobile">
                Mobile (436px wide)
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Desktop} />
        <Route exact path="/mobile" component={Mobile} />
      </Provider>
    </Router>
  );
};

export default App;

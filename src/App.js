import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Mock1 from './pages/Mock1';
import Mock2 from './pages/Mock2';
import './assets/styles/index.css';
import { ConnectedCardContainer } from './components/Card/CardContainer';

// import SwiperTest from './components/Swiper/SlideContainer';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Container className="container" fluid>
//         <Row>
//           <Col>
//             <PageTop />
//             <ConnectedCardContainer />
//             <PageBottom />
//           </Col>
//         </Row>
//       </Container>
//     </Provider>
//   );
// };

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Route exact path="/" component={Mock1} />
        <Route exact path="/mock2" component={Mock2} />
      </Provider>
    </Router>
  );
};

export default App;

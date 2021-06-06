import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Desktop from './pages/Desktop';
import Mobile from './pages/Mobile';
import './assets/styles/index.css';


const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Route exact path="/" component={Desktop} />
        <Route exact path="/mobile" component={Mobile} />
      </Provider>
    </Router>
  );
};

export default App;

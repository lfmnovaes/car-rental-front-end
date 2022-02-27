import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Reserve from './components/Reserve';
import Nav from './components/Nav';
import Reservations from './components/Reservations';
import configureStore from './redux/configureStore';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="lg:flex">
          <Nav />
          <Routes>
            <Route path="/" exac element={<Home />} />
            <Route path="/reserve" exac element={<Reserve />} />
            <Route path="/reservations" exac element={<Reservations />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Nav from './components/Nav';
import Reservations from './components/Reservations';
import configureStore from './redux/configureStore';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex">
          <Nav />
          <Routes>
            <Route path="/" exac element={<Home />} />
            <Route path="/reservations" exac element={<Reservations />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

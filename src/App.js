import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Home from './components/Home';
import Nav from './components/Nav';
import Car from './components/Car';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex">
          <Nav />
          <Routes>
            <Route path="/" exac element={<Home />} />
            <Route path="/car/:id" exac element={<Car />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

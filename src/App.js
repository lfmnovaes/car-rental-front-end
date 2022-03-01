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
import CarDetails from './components/car/CarDetails';
import CarNew from './components/car/CarNew';
import Redirect from './components/Redirect';
import ProtectedRoute from './components/ProtectedRoute';
import Reservations from './components/Reservations';
import Login from './components/Login';
import configureStore from './redux/configureStore';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="lg:flex">
          <Nav />
          <Routes>
            <Route exact path="/" element={<ProtectedRoute />}>
              <Route path="/" exac element={<Home />} />
              <Route path="/car/:id" exac element={<CarDetails />} />
              <Route path="/car/new" exac element={<CarNew />} />
              <Route path="/redirect" exac element={<Redirect />} />
              <Route path="/reserve" exac element={<Reserve />} />
              <Route path="/reservations" exac element={<Reservations />} />
            </Route>
            <Route path="/login" exac element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

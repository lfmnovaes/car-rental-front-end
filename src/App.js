import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import configureStore from './redux/configureStore';
=======
>>>>>>> c6a7c9d38524bd8f8d26297281593b674a5937cc
import Home from './components/Home';
import Reserve from './components/Reserve';
import Nav from './components/Nav';
<<<<<<< HEAD
import CarDetails from './components/car/CarDetails';
import CarNew from './components/car/CarNew';
import Redirect from './components/Redirect';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
=======
import ProtectedRoute from './components/ProtectedRoute';
import Reservations from './components/Reservations';
import Login from './components/Login';
import configureStore from './redux/configureStore';
>>>>>>> c6a7c9d38524bd8f8d26297281593b674a5937cc

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
<<<<<<< HEAD
        <div className="flex">
=======
        <div className="lg:flex">
>>>>>>> c6a7c9d38524bd8f8d26297281593b674a5937cc
          <Nav />
          <Routes>
            <Route exact path="/" element={<ProtectedRoute />}>
              <Route path="/" exac element={<Home />} />
<<<<<<< HEAD
              <Route path="/car/:id" exac element={<CarDetails />} />
              <Route path="/car/new" exac element={<CarNew />} />
              <Route path="/redirect" exac element={<Redirect />} />
=======
              <Route path="/reserve" exac element={<Reserve />} />
              <Route path="/reservations" exac element={<Reservations />} />
>>>>>>> c6a7c9d38524bd8f8d26297281593b674a5937cc
            </Route>
            <Route path="/login" exac element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
<<<<<<< HEAD
=======

>>>>>>> c6a7c9d38524bd8f8d26297281593b674a5937cc
  );
}

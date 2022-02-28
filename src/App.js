import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import configureStore from './redux/configureStore';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex">
          <Nav />
          <Routes>
            <Route exact path="/" element={<ProtectedRoute />}>
              <Route path="/" exac element={<Home />} />
            </Route>
            <Route path="/login" exac element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>

  );
}

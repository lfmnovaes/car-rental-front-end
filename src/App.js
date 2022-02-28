import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
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
  );
}

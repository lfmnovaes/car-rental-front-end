import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';

export default function App() {
  return (
    <Router>
      <div className="lg:flex">
        <Nav />
        <Routes>
          <Route path="/" exac element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

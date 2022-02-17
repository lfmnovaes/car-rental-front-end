import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exac element={<Home />} />
      </Routes>
    </Router>
  );
}

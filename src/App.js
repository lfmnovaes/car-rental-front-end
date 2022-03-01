import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';

const App = () => (
  <BrowserRouter>
    <div className="relative min-h-screen flex">
      <Nav />
      <Routes>
        <Route path="/" exac element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;

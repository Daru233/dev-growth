import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './styles.module.css';
import { Home, Error, About, Footer, Navbar } from '../index';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

// https://www.youtube.com/watch?v=UjHT_NKR_gU
// https://www.youtube.com/watch?v=PwWHL3RyQgk&t=216s

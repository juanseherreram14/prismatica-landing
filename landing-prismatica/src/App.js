// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Component from './components/Component';
import WebFont from 'webfontloader';
import './index.css';

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Syne:400,700', 'Comfortaa:400,700']
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Component />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default App;

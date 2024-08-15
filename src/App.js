

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/contact/Contact';
import Header from './components/Header';

const App = () => {
  return (
    <div>
       <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
    </div>
  );
};

export default App;
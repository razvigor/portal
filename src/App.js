import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apple from './components/pages/Apple';
import Home from './components/pages/Home';
import Tesla from './components/pages/Tesla';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apple" element={<Apple /> } />
        <Route path="/tesla" element={<Tesla />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

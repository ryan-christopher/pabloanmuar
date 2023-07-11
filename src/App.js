import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Styling from './pages/styling'
import './styles/App.css';
import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styling" element={<Styling />} />
        </Routes>
      </div>
    </ParallaxProvider>
  );
}

export default App;

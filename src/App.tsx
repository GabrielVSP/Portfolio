import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"
//import background from "./images/background.jfif"

import Home from './pages/home';
import Header from './components/header';
import Skills from './pages/skills';
import Projects from './pages/projects';

function App() {
  return (

      <div style={{backgroundImage: `url(${'./images/background.jfif'})`}}>
      
        <Router>

          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>

        </Router>

      </div>

  );
}

export default App;

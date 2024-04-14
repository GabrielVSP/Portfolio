import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"
import "./anim.css"

import Home from './pages/home';
import Header from './components/header';
import Skills from './pages/skills';
import Projects from './pages/projects';

function App() {
  return (

      <div className='h-full'>

        <div className='container'>
          <div className='sky'>
              <div className='text #CODEVEMBER'></div>
              <div className='stars'></div>
              <div className='stars1'></div>
              <div className='stars2'></div>
              <div className='shooting-stars'></div>
          </div>
        </div>

        <Router>

          <Header />

          <Routes>
            <Route path="/Portofolio" element={<Home />} />
            <Route path="/Portofolio/skills" element={<Skills />} />
            <Route path="/Portofolio/projects" element={<Projects />} />
          </Routes>

        </Router>

      </div>

  );
}

export default App;

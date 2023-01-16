import * as React from 'react';
import './index.css';

//cmpts
import Home from './components/Home';
import Contact from './components/Contact';

//img

import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/contact' element = {<Contact />}/>
      <Route path='/portfolio' element = {<Portfolio />}/>
    </Routes>
  </>
  );
}

export default App;

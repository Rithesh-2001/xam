import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Destination from './components/Destination';
import Navbar from './components/Navbar';

function App(){
  return(
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </>

  );
}

export default App
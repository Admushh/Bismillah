import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter, Route ,Routes } from 'react-router-dom';
import React from 'react';
import Player from './Pages/Player';
import History from './Pages/History';
import Legends from './Pages/Legends';
import Home from './Pages/Home';
import Footer from './Component/Footer'
import About from './Pages/About'


const App= ()=> {
  return( 
    <div className='App'>
      <BrowserRouter>
  <Navbar/>
  <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Player" element= {<Player/>}></Route>
        <Route path="/Legends" element= {<Legends/>}></Route>
        <Route path="/History" element= {<History/>}></Route>
        <Route path="/About" element= {<About/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
</div>
  );
}

export default App;

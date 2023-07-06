import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter, Route ,Routes } from 'react-router-dom';
import React from 'react';
import Player from './Pages/Player';
import History from './Pages/History';
import Kit from './Pages/Kit';
import Home from './Pages/Home';


const App= ()=> {
  return( 
    <div className='App'>
      <BrowserRouter>
  <Navbar/>
  <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Player" element= {<Player/>}></Route>
        <Route path="/Kit" element= {<Kit/>}></Route>
        <Route path="/History" element= {<History/>}></Route>
      </Routes>
      </BrowserRouter>
</div>
  );
}

export default App;

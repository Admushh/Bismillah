import React from 'react';
import P1 from '../Picture/poto.png'

function Navbar() {
  return (
    <nav className="bg-red-600 pb-3 text-2xl h-[75px] fixed top-0 left-0 w-full  z-20">
      <div className="container mx-auto px-4">
        <div className="flex  items-center justify-between py-4">
          <div className='text-xl pb-'>
            <a href="/"><img src={P1} className='w-[50px] pt-'></img></a>
          </div>
          <div>
            <ul className="flex space-x-5 pb-2">
              <li><a href="/Player" className="text-white hover:text-sky-700 transition-colors duration-300 uppercase font-sans text-xl">Player</a></li>
          <li><a href="/Legends" className="text-white hover:text-sky-700 transition-colors duration-300 uppercase font-sans text-xl">Legends</a></li>
              <li><a href="/History" className="text-white hover:text-sky-700 transition-colors duration-300 uppercase font-sans text-xl">History</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
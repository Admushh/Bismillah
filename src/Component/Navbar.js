import React from 'react';
import P1 from '../Picture/poto.png'

function Navbar() {
  return (
    <nav className="bg-red-600 pb-3 text-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className='text-xl'>
            <a href="/"><img src={P1} className='w-[50px]'></img></a>
          </div>
          <div>
            <ul className="flex space-x-5">
              <li><a href="/Player" className="text-white hover:text-sky-700 transition-colors duration-300">Player👹</a></li>
          <li><a href="/Kit" className="text-white hover:text-sky-700 transition-colors duration-300">Newest KIT!👕</a></li>
              <li><a href="/History" className="text-white hover:text-sky-700 transition-colors duration-300">History!🎥</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
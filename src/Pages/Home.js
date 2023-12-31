import { Button } from 'flowbite-react';
import P4 from '../Picture/potos.jpg';
import Bottombg from '../Component/Bottombg'
import { Carousel } from '../Component/Carousel';
export default function Home() {

  return (
    <div className='bg-black'>
      <div className='h-screen flex items-center ' >
        <Carousel />

        <div className='flex-1'>
          <h1 className="text-stone-800 text-7xl font-extra-bold b-3 text-center text-white">Manchester<span className='text-red-500'> United.</span>  </h1>
          <h2 className="text-stone pr-9 font-extra-bold text-white pt-[12px] italic ">Once United Will Always be United.</h2>
        </div>
      </div>
      <Bottombg />
    </div>


  );
}
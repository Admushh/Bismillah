  import { Button } from 'flowbite-react';
  import P4 from '../Picture/potos.jpg';
  import Bottombg from '../Component/Bottombg'
  export default function Home() {

    return (
      <div className='bg-black'>
        <div className='h-screen flex items-center ' >
  <img src= {P4} className='w-[750px]  float-left rounded'></img>

  
    <div className='flex-1 ml-14'>
  <h1 className="text-stone-800 text-7xl font-extra-bold b-3 text-center text-white">Manchester<span className='text-red-500'> United.</span>  </h1>
  <h2 className="text-stone pr-9 font-extra-bold text-white pt-[12px]">Created with heart</h2>
  </div>
  </div>
  <Bottombg/>
  <footer>
    <div className='bg-black w-full h-[100px] border-4 border-black'>
      <p className='text-white text-2xl pt-[35px]'>Copyright@adms</p>

    </div>
  </footer>
    </div>
    
    
    );
  }
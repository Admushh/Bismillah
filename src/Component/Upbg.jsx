import React from "react";
import p2 from '../Picture/H1.jpg'
const Upbg = () => {
  return (
      <div className="relative bg-black  h-fit -pb-5">
         <div>
      <img className="object-cover w-full h-[400px] opacity-50 xl:-mt-90" src={p2} alt="Jumbotron 1" />
       </div>
  <div className="absolute inset-0 flex items-start justify-start mt-[350px] mr-[100px] mb-14">
  <div className="">
<h1 className="text-start text-3xl text-white font-extrabold ml-[45px] uppercase pt-[10px]">
                      Manchester <span className="text-red-500">  United! </span>
                  </h1>
<p className="text-white text-center pt-1"></p>
{ <p className="mt-3 text-lg text-white :mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl">
                    
</p> }
          </div>
      </div>
  </div>
  );
};

export default Upbg;

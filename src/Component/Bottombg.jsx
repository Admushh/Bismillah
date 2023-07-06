import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import p2 from '../Picture/poto2.jpg'

const Bottombg = () => {
    return (
        <div className="relative bg-black  h-fit -pb-5">
           <div>
        <img className="object-cover w-full h-[800px] opacity-50 xl:-mt-90" src={p2} alt="Jumbotron 1" />
         </div>
    <div className="absolute inset-0 flex items-center justify-center mb-14">
    <div className="text-center">
 <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                        Manchester United!
                    </h1>
 <p className="text-white text-center pt-1">Reason why?</p>
{ <p className="mt-3 text-lg text-white :mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl">
                      Its start when i was playing winning eleven at 2010 with my brother and i randomly choose Manchester United as the team  that i want to play with
                        and ya its the first time i knew Wayne Rooney and somehow i started to idolize him and Manchester United until now.
</p> }
            </div>
        </div>
    </div>
    );
};

export default Bottombg;
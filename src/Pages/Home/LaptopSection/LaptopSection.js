import React from 'react';
import { Link } from 'react-router-dom';
import sectionimg  from '../../../assests/images/section.jpg'

const LaptopSection = () => {
    return (
        <section className="text-gray-800 my-16">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-4xl uppercase font-bold leading-none sm:text-3xl">Looking For Second Hand Laptop:
                </h1>

                <p className='text-xl capitalize my-3'>Global Sources offers with a wide range of quality products, sourced directly from Asia. Source for high quality products at competitive price from Verified Suppliers now.</p>
               
                
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src={sectionimg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
        </div>
    </section>
    );
};

export default LaptopSection;
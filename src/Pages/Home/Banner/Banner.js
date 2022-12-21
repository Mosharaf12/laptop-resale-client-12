import React from 'react';
import banner1 from '../../../assests/images/banner/laptopbanner1.png'
import banner2 from '../../../assests/images/banner/laptopbanner2.jpg'
import banner3 from '../../../assests/images/banner/laptopbanner3.jpg'
import './Banner.css'

const Banner = () => {
    return (
      <>
        <div className='pt-24'>
          <div className="carousel w-full h-[560px] rounded-xl ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} alt="" className="w-full bannerimg" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle bg-green-500 mr-8">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-green-500">❯</a>
    </div>
      <div className='absolute  left-3 md:left-36 top-1/2'>
        <h2 className='text-5xl text-white font-bold'>LAPTOP MARKET</h2>
        <p className='text-3xl text-base-300 mt-3 font-semibold'>In the middle of every difficulty <br /> lies opportunity</p>

    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} alt="" className="w-full bannerimg" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle bg-green-500 mr-8">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-green-500">❯</a>
    </div>
      <div className='absolute  left-3 md:left-36 top-1/2'>
        <h2 className='text-5xl text-white font-bold'>LAPTOP MARKET</h2>
        <p className='text-3xl text-white mt-3 font-semibold'>In the middle of every difficulty <br /> lies opportunity</p>

    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner3} alt="" className="w-full bannerimg" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle bg-green-500 mr-8">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-green-500">❯</a>
    </div>
      <div className='absolute left-3 md:left-36 top-1/2'>
        <h2 className='text-5xl text-white font-bold'>LAPTOP MARKET</h2>
        <p className='text-3xl text-white mt-3 font-semibold'>In the middle of every difficulty <br /> lies opportunity</p>

    </div>
  </div> 
  
</div>
{/* web title and web description */}
<div className='mt-12'>
      <h3 className='text-3xl uppercase font-bold'>Select the Category</h3>
      
</div>
        </div>

        </>
    );
};

export default Banner;
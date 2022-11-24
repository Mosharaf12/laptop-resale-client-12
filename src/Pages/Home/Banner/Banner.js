import React from 'react';
import banner1 from '../../../assests/images/banner/laptopbanner1.jpg'
import banner2 from '../../../assests/images/banner/laptopbanner2.jpg'
import banner3 from '../../../assests/images/banner/laptopbanner3.jpg'

const Banner = () => {
    return (
        <div>
          <div className="carousel w-full h-[530px] rounded-xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner3} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
{/* web title and web description */}
<div className='my-5 mx-10'>
      <h3 className='text-2xl font-bold'>Laptop Resale Market</h3>
      <p className='mt-5 '>Laptop Resale Market is the best used laptop shop in Bangladesh and a leading seller of all kinds of IT products. It,s been a place of reliability for new and used laptops as well as other accessories since its beginning back in 2022.</p>
</div>
        </div>
    );
};

export default Banner;
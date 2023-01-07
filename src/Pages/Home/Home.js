import React from 'react';
import AllUsedProducts from './AllUsedProducts/AllUsedProducts';

import Banner from './Banner/Banner';
import LaptopSection from './LaptopSection/LaptopSection';
import GallerySection from './MeetSection/GallerySection/GallerySection';
import MeetSection from './MeetSection/MeetSection';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
           <div className='max-w-[1240px] mx-auto'>
           <AllUsedProducts></AllUsedProducts>
           </div>
            <LaptopSection></LaptopSection>
           <div className='max-w-[1240px] mx-auto'>
           <GallerySection></GallerySection>
           </div>
            <MeetSection></MeetSection>
        </div>
    );
};

export default Home;
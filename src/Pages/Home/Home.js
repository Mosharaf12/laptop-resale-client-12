import React from 'react';
import TripSection from '../TripSection';
import AllUsedProducts from './AllUsedProducts/AllUsedProducts';

import Banner from './Banner/Banner';
import Contact from './Contact';
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
            <div className='max-w-[1240px] mx-auto'>
            <Contact></Contact>
            </div>
            <MeetSection></MeetSection>
           <TripSection></TripSection>
        </div>
    );
};

export default Home;
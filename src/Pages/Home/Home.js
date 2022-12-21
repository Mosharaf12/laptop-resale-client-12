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
            <AllUsedProducts></AllUsedProducts>
            <LaptopSection></LaptopSection>
            <GallerySection></GallerySection>
            <MeetSection></MeetSection>
        </div>
    );
};

export default Home;
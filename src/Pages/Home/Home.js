import React from 'react';
import AllUsedProducts from './AllUsedProducts/AllUsedProducts';

import Banner from './Banner/Banner';
import LaptopSection from './LaptopSection/LaptopSection';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <AllUsedProducts></AllUsedProducts>
            <LaptopSection></LaptopSection>
        </div>
    );
};

export default Home;
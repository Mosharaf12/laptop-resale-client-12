import React from 'react';

import { useLoaderData } from 'react-router-dom';
import LaptopsCard from '../LaptopsCard/LaptopsCard';

const FilterByCategorey = () => {
    const laptops = useLoaderData()

   
    return (
        <div className='max-w-[1240px] mx-auto pt-20'>
           
           <div className='md:grid grid-cols-3 gap-10 py-24 '>
           {
                laptops.map(laptop => <LaptopsCard
                key={laptop._id}
                laptop={laptop}
                
                ></LaptopsCard>)
            }
           </div>
        </div>
    );
};

export default FilterByCategorey;
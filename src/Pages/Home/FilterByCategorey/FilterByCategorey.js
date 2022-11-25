import React from 'react';

import { useLoaderData } from 'react-router-dom';
import LaptopsCard from '../LaptopsCard/LaptopsCard';

const FilterByCategorey = () => {
    const laptops = useLoaderData()

   
    return (
        <div>
            <h2>{laptops.length}</h2>
           <div className='grid grid-cols-3'>
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
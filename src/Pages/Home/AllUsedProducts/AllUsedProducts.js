import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LaptopsCard from '../LaptopsCard/LaptopsCard';

const AllUsedProducts = () => {
    const {data:laptops =[]} = useQuery({
        queryKey:['laptops'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/usedLaptop')
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className='grid grid-cols-2 gap-10 my-20'>
            {
                laptops.map(laptop => <LaptopsCard
                key={laptop._id}
                laptop={laptop}
                ></LaptopsCard>)
            }
            
        </div>
    );
};

export default AllUsedProducts;
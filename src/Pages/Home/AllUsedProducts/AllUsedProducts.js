import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LaptopsCard from '../LaptopsCard/LaptopsCard';
import ProductCategory from '../ProductCategory/ProductCategory';

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
       <div className=''>
        <div className='mt-12 flex justify-center'>
            {
                laptops.map(laptop => <ProductCategory
                key={laptop._id}
                laptop={laptop}
                ></ProductCategory>)
            }
        </div>
        <div className='grid md:grid-cols-2 gap-10 my-10'>
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

export default AllUsedProducts;
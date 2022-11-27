import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={`/usedlaptop/Dell`}>
            <button className='btn btn-secondary mr-5  md:px-10'>Dell</button>
      </Link>
        <Link to={`/usedlaptop/Lenovo`}>
            <button className='btn btn-secondary mr-5  md:px-10'>Lenovo</button>
      </Link>
        <Link to={`/usedlaptop/Acer`}>
            <button className='btn btn-secondary mr-5  md:px-10'>Acer</button>
      </Link>
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
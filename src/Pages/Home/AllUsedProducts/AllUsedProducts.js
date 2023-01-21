import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import LaptopsCard from '../LaptopsCard/LaptopsCard';


const AllUsedProducts = () => {
    const {data:laptops =[]} = useQuery({
        queryKey:['laptops'],
        queryFn: async()=>{
            const res = await fetch('https://resale-market-server-kappa.vercel.app/usedLaptop')
            const data = await res.json()
            return data;
        }
    })


    return (
       <div className=''>
        <div className=' my-5 pb-20 bg-blue-100 rounded-md'>
            <div className='py-10'>
            <h3 className='text-3xl uppercase text-center text-[#1159AB] font-bold'>Select the Category</h3>
            </div>
            <div className='flex justify-center'>
            <Link to={`/usedlaptop/Dell`}>
            <button className='btn bg-[#1159AB] border-none mr-5  md:px-10'>Dell</button>
      </Link>
        <Link to={`/usedlaptop/Lenovo`}>
            <button className='btn bg-[#1159AB] border-none mr-5  md:px-10'>Lenovo</button>
      </Link>
        <Link to={`/usedlaptop/Acer`}>
            <button className='btn bg-[#1159AB] border-none mr-5  md:px-10'>Acer</button>
      </Link>
            </div>
        </div>
        <div className='grid md:grid-cols-3 gap-10 my-10'>
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
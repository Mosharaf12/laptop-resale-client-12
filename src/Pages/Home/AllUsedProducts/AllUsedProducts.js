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
            <div className='lg:flex justify-center grid grid-cols-3 gap-5 pl-4'>
            <Link to={`/usedlaptop/Dell`}>
            <button className='btn bg-white hover:bg-[#1159AB] border-none mr-5  md:px-10'> <img className='w-16' src="https://cdn.worldvectorlogo.com/logos/dell-computer.svg" alt="" srcset="" /></button>
      </Link>
        <Link to={`/usedlaptop/Lenovo`}>
            <button className='btn bg-white hover:bg-[#1159AB] border-none mr-5  md:px-10'><img className='w-20'
            src="https://i.insider.com/556c53886bb3f7790ecba7ad?width=1000&format=jpeg&auto=webp" alt="" srcset="" /></button>
      </Link>
        <Link to={`/usedlaptop/Acer`}>
            <button className='btn bg-white hover:bg-[#1159AB] border-none mr-5  md:px-10'> <img src="https://www.bdstall.com/asset/brand-image/1.jpg" alt="" srcset="" /></button>
      </Link>
        <Link to={`/usedlaptop/Acer`}>
            <button className='btn bg-white hover:bg-[#1159AB] border-none mr-5  md:px-10'> <img  src="https://www.citypng.com/public/uploads/preview/asus-red-logo-free-png-11661716308tvrrom8chd.png" className='w-20' alt="" srcset="" /></button>
      </Link>
        <Link to={`/usedlaptop/Acer`}>
            <button className='btn bg-white hover:bg-[#1159AB] border-none mr-5  md:px-10'> <img  src="https://e7.pngegg.com/pngimages/398/839/png-clipart-carplay-macbook-pro-apple-imac-united-states-name-text-logo-thumbnail.png" className='w-20' alt="" srcset="" /></button>
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
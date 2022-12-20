import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LaptopsCard from '../LaptopsCard/LaptopsCard';

const Advertising = () => {
    const {data: advertisings = [] , refetch , isLoading} = useQuery({
        queryKey: ['advertisings'],
        queryFn:async()=>{
            const res = await fetch(`https://resale-market-server-kappa.vercel.app/advertisingProduct`)
            const data = await res.json()
            return data;
        }
    })
    refetch()
    if(isLoading){
        return <p className='text-6xl'>Loading...</p>
    }
    return (
        <div>
            <h2>Advertising</h2>
           <div className='grid md:grid-cols-3 gap-10 grid-cols-1  py-24 '>
           {
                advertisings.map(advertis=> <LaptopsCard
                key={advertis._id}
                laptop={advertis}
                
                ></LaptopsCard>)
            }
           </div>
        </div>
    );
};

export default Advertising;
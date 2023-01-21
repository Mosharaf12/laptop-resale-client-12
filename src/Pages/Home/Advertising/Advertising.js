import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import LaptopsCard from '../LaptopsCard/LaptopsCard';
import { Zoom } from 'react-reveal';
import { BsLayoutSplit, BsLayoutThreeColumns, IconName } from "react-icons/bs";

const Advertising = () => {
    const [myGrid , setMyGrid] = useState(false)
    const handleGrid = () => {
        console.log("text");
        setMyGrid(!myGrid)
        
    }
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
        <div className='max-w-[1240px] mx-auto pt-20'>
            <Zoom>
            <h3 className='text-center text-3xl font-bold text-blue-600 pt-14'>ADVERTISING</h3>
            </Zoom>
            
            <div className='flex justify-end my-5'>
            <button onClick={handleGrid} className="btn bg-green-500 text-white text-xl border-none"> {myGrid ? <BsLayoutThreeColumns></BsLayoutThreeColumns> : <BsLayoutSplit></BsLayoutSplit>} <span className='ml-3'>Layout</span> </button>
            </div>
            
          <div className='flex justify-center'>
          <div className={myGrid ? "grid md:grid-cols-3 gap-10 grid-cols-1  py-24 " : "grid md:grid-cols-2 gap-10 grid-cols-1  py-24 "}>
           {
                advertisings.map(advertis=> <LaptopsCard
                key={advertis._id}
                laptop={advertis}
                
                ></LaptopsCard>)
            }
           </div>
          </div>
        </div>
    );
};

export default Advertising;
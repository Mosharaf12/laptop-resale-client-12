import React from 'react';
import { Link } from 'react-router-dom';

const LaptopsCard = ({laptop}) => {
    const {_id,picture,description,name,location,resaleprice,sallername,originalprice,yearsofuse}= laptop
    return (
       <div>
        <div className="rounded-md shadow-md sm:w-96 hover:shadow-2xl text-gray-800">

	<img src={picture} alt="" className="object-cover object-center w-full h-72 bg-gray-500" />
	<div className="p-3">

		<div className="flex flex-wrap items-center pt-3 pb-1">
    <h2 className="card-title text-black">{name}</h2>
          <p>{description?.slice(0,70)}...</p>
		</div>
		<div className="space-y-3">
    <div className='flex justify-between'>
            <h3 className='text-xl font-bold text-blue-600'>Discount Price: ৳ {resaleprice} </h3>
            <h3 className='text-xl'> ৳ <s>{originalprice}</s> </h3>
          </div>
          <div className='flex justify-between'>
          <p>Location: <span className='text-blue-600'>{location}</span> </p>
            <p>Use: {yearsofuse} Years</p>
          </div>
         
          <div className="">
            <Link className="btn bg-[#1159AB] border-none font-bold text-white w-full"to={`/laptop/${_id}`}>View Details</Link>
          </div>
		</div>
	</div>
</div>
       
       </div>
    );
};

export default LaptopsCard;
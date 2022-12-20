import React from 'react';
import { Link } from 'react-router-dom';

const LaptopsCard = ({laptop}) => {
    const {_id,picture,description,name,location,resaleprice,sallername,originalprice,yearsofuse}= laptop
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className='w-full' style={{width: "580px", height: "270px"}} src={picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description?.slice(0,100)}...</p>
          <div className='flex justify-between'>
            <h3 className='text-xl font-bold text-blue-600'> Price: ৳ {resaleprice} </h3>
            <h3 className='text-xl'> ৳ <s>{originalprice}</s> </h3>
          </div>
            <p>Location: <span className='text-primary'>{location}</span> </p>
            <p>Use: {yearsofuse} Years</p>
          <div className="card-actions justify-end">
            <Link to={`/laptop/${_id}`}><button className="btn btn-info font-bold text-white">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default LaptopsCard;
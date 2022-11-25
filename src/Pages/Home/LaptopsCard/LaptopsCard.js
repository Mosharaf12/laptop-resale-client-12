import React from 'react';
import { Link } from 'react-router-dom';

const LaptopsCard = ({laptop}) => {
    const {picture,description,name,location,resaleprice,sallername,originalprice,yearsofuse}= laptop
    return (
        <div className="card card-compact bg-base-100 shadow-xl h-3/4">
        <figure><img className='w-full' src={picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0,100)}...</p>
          <div className="card-actions justify-end">
            <Link to='/'><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default LaptopsCard;
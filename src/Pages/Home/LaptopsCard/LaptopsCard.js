import React from 'react';

const LaptopsCard = ({laptop}) => {
    const {picture,}= laptop
    return (
        <div className="card card-compact bg-base-100 shadow-xl h-3/4">
        <figure><img className='w-full' src={picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{laptop.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default LaptopsCard;
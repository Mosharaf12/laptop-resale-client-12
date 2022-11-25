import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsCard = () => {
    const detailsCard = useLoaderData()
    const {_id,picture,description,name,location,resaleprice,sallername,originalprice,yearsofuse}= detailsCard;


    return (
      <section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={picture} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">{name}</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">{description}</p>
            <button className="btn btn-info font-bold text-white">Book Now!</button>
		</div>

	</div>
</section>
    );
};

export default DetailsCard;
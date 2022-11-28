import React, { useContext, useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const DetailsCard = () => {
	const {user} = useContext(AuthContext)
	console.log(user);
	const [productData, setProductData] = useState(null)
	
    const detailsCard = useLoaderData()
    const {_id,picture,description,name,location,resaleprice,sellername,originalprice,yearsofuse}= detailsCard;


	
    const handleProductBooking = e => {
        e.preventDefault();
        const form = e.target;
        const username = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            productname: name,
            buyer: username,
            email,
            phone,
            location,
            resaleprice,
            originalprice,

		}	
		fetch(`http://localhost:5000/booking`,{
			method: "POST",
			headers:{
				'content-type': 'application/json'
			},
			body: JSON.stringify(booking)	
		})
		.then(res=> res.json())
		.then(data=>{
			console.log(data);
		})
	};
    return (
      <section className="text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={picture} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold mb-3 leading-none sm:text-6xl">{name}</h1>
			<hr />
			<p className="text-lg mt-5">{description}</p>
			<div className='md:flex justify-between'>
				<h3 className='text-xl font-bold text-blue-600'> Price: ৳ {resaleprice}</h3>
				<h4> ৳<s>{originalprice}</s> </h4>

			</div>
				<p>Used time: {yearsofuse} year</p>
			<p>Location: <span className='text-primary'>{location}</span> </p>
			<div className='p-3 shadow-xl md:flex items-center'>
				<h2 className='text-xl text-secondary mr-2'>seller name: {sellername} </h2>  <FaCheck className='text-blue-600'></FaCheck>
			</div>
            <label htmlFor='booking-modal' className="btn btn-info font-bold text-whit mt-3">Book Now!</label>
			<div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setProductData(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name} for </h3>
                    <form onSubmit={handleProductBooking}>
                        <input name='name'  type="text" defaultValue={user?.displayName} className="input input-bordered w-full my-3" disabled />
                        <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full my-3" disabled />
                        <div className='flex justify-between'>
                            <p>Price: ৳ {resaleprice}</p>
                            <p> ৳ <s>{originalprice}</s> </p>
                        </div>
                        <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full my-3" required />
                        <textarea name='location' className="textarea textarea-bordered w-full my-3" placeholder="You Location" required></textarea>
                        {
                            !user && <p>Please login</p>
                        }
                        <input type="submit" value='Submit' className={user ?
                            "btn btn-accent w-full"
                            :
                            "btn btn-accent w-full btn-disabled"
                        } />
                    </form>
                </div>
            </div>
        </div>

		</div>

	</div>
</section>
    );
};

export default DetailsCard;
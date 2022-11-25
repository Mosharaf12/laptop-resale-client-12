import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const ProductCategory = ({laptop}) => {
    const {categorey} = laptop;

    //  const {data:laptops =[]} = useQuery({
    //     queryKey: ['laptops'],
    //     queryFn: async()=>{
    //         const res = await fetch(`http://localhost:5000/usedLaptop/categorey`)
    //         const data = await res.json()
    //         return data;
    //     }
    // })


    return (
      <Link to={`/usedlaptop/${categorey}`}>
            <button className='btn btn-secondary mr-5  md:px-10'>{categorey}</button>
      </Link>
    );
};

export default ProductCategory;
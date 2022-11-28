import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';

import MyProductTable from './MyProductTable';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProduct = () => {
    const {user} =useContext(AuthContext)
    console.log(user);

    const {data:myproducts =[] ,refetch} = useQuery({
        queryKey:['myprodusts'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`)
            const data = await res.json()
            return data;
        }

    })
    refetch();
    
    return (

        <div>
            <h2>product:{myproducts.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Brand Name</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
        {
            myproducts.map(myproduct=> <MyProductTable
            key={myproduct._id}
            myproduct={myproduct}

            ></MyProductTable>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProduct;
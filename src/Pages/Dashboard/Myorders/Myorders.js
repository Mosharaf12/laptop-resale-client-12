
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyOrderTable from './MyOrderTable';

const Myorders = () => {
    const {user} = useContext(AuthContext)

    const {data: myorders = [], refetch , isLoading} = useQuery({
        queryKey:['myorders'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    refetch();
    if(isLoading){
      return <h1 className='text-6xl'>Loading....</h1>
    }
    
    return (
        <div>
             <h1>booking:{myorders.length}</h1>
             <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th>Brand Name</th>
        <th>Price</th>
        <th>Report</th>
        <th>Remove</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    {
        myorders.map(myorder=> <MyOrderTable
        key={myorder._id}
        myorder={myorder}
        ></MyOrderTable> )
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myorders;
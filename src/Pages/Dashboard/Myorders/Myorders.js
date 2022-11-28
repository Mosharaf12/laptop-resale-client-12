
import { useQuery } from '@tanstack/react-query';
import React,{useContext} from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyOrderTable from './MyOrderTable';

const Myorders = () => {
    const {user} = useContext(AuthContext)
    const {data:myorders =[]} = useQuery({
        queryKey:['myorders'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/booking?email=${user?.email}`)
    //     .then(res=> res.json())
    //     .then(data=>{
    //         console.log(data)
    //         if(loading){
    //             return <progress className="progress w-56"></progress>
    //         }
    //     })
    // },[user?.email,loading])


    return (
        <div>
             <h1>booking:{myorders.length}</h1>
             <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th>Brand Name</th>
        <th>Price</th>
        <th>Remove</th>
        <th>Report</th>
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
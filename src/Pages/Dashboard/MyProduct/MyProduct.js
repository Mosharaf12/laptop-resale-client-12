import React,{useContext} from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProductTable from './MyProductTable';

const MyProduct = () => {
    const {user} =useContext(AuthContext);

    const {data:myproducts =[]} = useQuery({
        queryKey:['myproducts'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/usedlaptop?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    
    return (

        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
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
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedProduct = () => {

    const {data: allReporteds = [], refetch, isLoading} = useQuery({
        queryKey: ['allReporteds'],
        queryFn: async () => {
            const res = await fetch(`https://resale-market-server-kappa.vercel.app/allReported`);
            const data = await res.json();
            return data;
        }
    })

    refetch();
    if(isLoading){
        return <p className='text-6xl'>Loading...</p>
    }

    return (
        <div>
            <h2>reported</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>Picture</th>
        <th>Product Name</th>
        <th>Seller Name</th>
      </tr>
    </thead>
    <tbody>
        {
            allReporteds.map(allReported =>   <tr key={allReported._id} className="hover">
                
                <td>
                <div className="avatar">
                     <div className="w-24 rounded">
                         <img src={allReported.picture} alt=''/>
                     </div>
                 </div>
                 </td>
                <td>{allReported.name}</td>
                <td>{allReported.sellername}</td>
               
              </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ReportedProduct;
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch(`https://resale-market-server-kappa.vercel.app/users`)
            const data = await res.json()
            return data;
        }
    })
    const handleDeleteUser=(id)=>{
        console.log(id)
        const userPermission = window.confirm('Are you delete this users?');
        if(userPermission){
            fetch(`https://resale-market-server-kappa.vercel.app/users?id=${id}`,{
                method: "DELETE"

            })
            .then(res=> res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                toast.success('Deleted success')
                
                }

            })
        }
    }

    const handleVerifyUser=(id)=>{
       const getPermission = window.confirm('Do you want to verify?');
       if(getPermission){
        fetch(`https://resale-market-server-kappa.vercel.app/users?id=${id}`,{
            method: "PUT"
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('verified')

            }
        })
       }
    }
    return (
        <div>
            <h2>allusers</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Role</th>
        <th>Email</th>
        <th>Verify</th>
        <th>Delete User</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user, i)=>   <tr key={user._id} className="hover">
                <th>{i +1}</th>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>
                    {
                        user.verified ? 
                        <button disabled className='btn btn-secondary btn-sm'>verified</button>
                        :
                        <button onClick={()=>handleVerifyUser(user._id)} className='btn btn-secondary btn-sm'>verify</button>
                    }
                </td>
                <td><button onClick={()=> handleDeleteUser(user._id)} className='btn btn-error btn-sm'>Delete</button></td>

              </tr>)
        }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;
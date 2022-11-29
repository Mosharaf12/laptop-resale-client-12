import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const SellerRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useAdmin(user?.email);
    const location = useLocation()

    if(loading || isSellerLoading){
        return <p className='text-6xl'>Loading...</p>
    }
    if(user && isSeller){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>

};

export default SellerRoute;
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useSeller(user?.email);
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
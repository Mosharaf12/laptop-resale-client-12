import React,{useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";

import Header from "../Shared/Header";

const LayoutDashboard = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)

  return (
    <div>
          <Header> </Header>
      <div className="pt-24">
      <div className="drawer drawer-mobile">
        <input id="laptop-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <Outlet></Outlet>
         
        </div>
        <div className="drawer-side">
          <label htmlFor="laptop-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {
            !isSeller && !isAdmin && <li><Link to='/dashboard'>My orders</Link></li>
          }
         {
            isSeller &&  <>
              <li><Link to='/dashboard/addproduct'>Add product</Link></li>
             <li><Link to='/dashboard/myproduct'>My Product</Link></li>
            </>
         }
         {
           isAdmin && <>
           <li><Link to='/dashboard/allusers'>All Users</Link></li>
          <li><Link to='/dashboard/reported'>Reported</Link></li>
          </>
         }
         
          </ul>
        </div>
      </div>
      </div>
   
    </div>
     
  );
};

export default LayoutDashboard;

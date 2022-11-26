import React from "react";
import { Link, Outlet } from "react-router-dom";

import Header from "../Shared/Header";

const LayoutDashboard = () => {
  return (
    <div>
          <Header> </Header>
      <div className="drawer drawer-mobile">
        <input id="laptop-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <Outlet></Outlet>
         
        </div>
        <div className="drawer-side">
          <label htmlFor="laptop-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li><Link to='/dashboard'>My orders</Link></li>
          <li><Link to='/dashboard/addproduct'>Add product</Link></li>
          </ul>
        </div>
      </div>
   
    </div>
     
  );
};

export default LayoutDashboard;

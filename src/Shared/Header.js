import React,{useContext} from 'react';
import { NavLink,Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogButton = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error))
  };

  const navItems = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/blog'>Blog</NavLink></li>
    {
    user?.uid ?
        <>
            <li><Link to='/dashboard'><button>Dashboard</button></Link></li>
            <li><button onClick={handleLogButton}>Log Out</button></li>

        </>
        : <li><NavLink to='/login'>Login</NavLink></li>
}
  </>
  
    return (
      
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Laptop Resale Market</Link>
  </div>
 
 
  <div className="navbar-end">
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     {navItems}
    </ul>
  </div>
  <label for="laptop-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
 
  </div>
</div>
    );
};

export default Header;
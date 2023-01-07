import React,{useContext} from 'react';
import { NavLink,Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import logo from '../assests/footer images/footerimages.png'
import ScrollToTop from '../Pages/ScrollToTop';

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogButton = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error))
  };

  const navItems = <ScrollToTop>
    <li><NavLink className='font-semibold' to='/'>HOME</NavLink></li>
    <li><NavLink className='font-semibold' to='/blog'>BLOG</NavLink></li>
    <li><NavLink className='font-semibold' to='/about'>ABOUT</NavLink></li>
    <li><NavLink className='font-semibold' to='/contact'>CONTACT US</NavLink></li>
    <li><NavLink className='font-semibold' to='/advertising'>ADVERTISED ITEMS</NavLink></li>
    {
    user?.uid ?
        <>
            <li><Link className='font-semibold' to='/dashboard'><button>DASHBOARD</button></Link></li>
            <li><button onClick={handleLogButton}>LOG OUT</button></li>

        </>
        : <li><NavLink className='font-semibold' to='/login'>LOGIN</NavLink></li>
}
</ScrollToTop>
  
    return (
      
        <div className="navbar glass z-10 fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 bg-base-100 p-2 shadow rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <div className='flex items-center'>
    <img width="60" height="60" src={logo} alt="" />

    <Link to='/' className="btn btn-ghost normal-case text-black text-xl font-semibold">LAPTOP MARKET</Link>
    </div>

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
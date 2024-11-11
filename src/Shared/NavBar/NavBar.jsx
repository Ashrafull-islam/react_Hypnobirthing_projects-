import { NavLink } from "react-router-dom";
import Logo from '../../../public/Assets/images.png';

const NavBar = () => {
    const links=<>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/About">About</NavLink></li>
    <li><NavLink to="/Program">Program</NavLink></li>
    <li><NavLink to="/Contact">Contact</NavLink></li>
  
    </>
    return (
        <div className="font-playfair-bold text-xl max-w-[80%] mx-auto p-6 bg-[#FFFFFF]">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <img className="rounded-full h-[80px] w-[83px]" src={Logo} alt="logo-image" />
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
      <li className="bg-[#263B3C] text-white rounded-full"><NavLink to="/BookNow">Book now</NavLink></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default NavBar;
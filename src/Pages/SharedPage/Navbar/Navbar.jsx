import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar bg-gray-200 h-24 px-16">
      <div className="navbar-start">
        <img className="p-2" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <Link>Home</Link>
          </li>
          <li tabIndex={0}>
            <Link>About</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        
        <button className="btn btn-outline bg-[#ff6600] text-white">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // Menu icon from react-icons
import logo from "../assets/logo.jpg"
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white h-[90px] shadow">
      <div className="p-5 md:flex md:items-center  w-full z-auto md:justify-between">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center text-2xl font-black">
            <img src={logo} alt="logo" className="w-8 mr-2 " />
          </Link>
          <div className="text-3xl md:hidden " onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu />
          </div>
        </div>

        <ul
          className={`md:flex md:items-center absolute md:static bg-white w-full md:w-auto left-0 z-10 transition-all duration-500 ease-in 
            ${menuOpen ? 'top-[80px] opacity-100' : 'top-[-400px] opacity-0'} md:opacity-100 md:top-auto`}
        >
          <li className="mx-4 my-6 md:my-0">
            <Link to="/" className="text-xl hover:text-blue-500 duration-500">HOME</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="/about" className="text-xl hover:text-blue-500 duration-500">ABOUT</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="/doctors" className="text-xl hover:text-blue-500 duration-500">DOCTORS</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="/contact" className="text-xl hover:text-blue-500 duration-500">CONTACT</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/Appoinment"
              className="bg-blue-400 text-white px-6 py-2 rounded hover:bg-black transition duration-500"
            >
              Appointment
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

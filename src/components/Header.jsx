import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from "../assets/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false); // closes mobile menu on link click

  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-[90px] flex items-center justify-between">
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="flex items-center text-2xl font-black">
            <img src={logo} alt="logo" className="w-10 h-10 mr-2 rounded-full" />
            <span className="hidden sm:block">HealthCare</span>
          </Link>
          <button
            className="text-3xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <FiMenu />
          </button>
        </div>

        {/* Nav Items */}
        <nav
          className={`
            md:flex md:items-center md:static absolute left-0 top-[90px] rounded-[0px, 10px ,20px] w-full md:w-auto bg-white md:bg-transparent transition-all duration-500 ease-in-out z-40
            ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:opacity-100 md:visible
          `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:items-center text-left p-4 md:p-0">
            {[
              { to: '/', label: 'HOME' },
              { to: '/about', label: 'ABOUT' },
              { to: '/doctors', label: 'DOCTORS' },
              { to: '/contact', label: 'CONTACT' }
            ].map(({ to, label }) => (
              <li key={to} className="my-3 md:my-0">
                <Link
                  to={to}
                  onClick={handleLinkClick}
                  className="text-xl hover:text-blue-500 transition duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className="mt-4 md:mt-0">
              <Link
                to="/Appoinment"
                onClick={handleLinkClick}
                className="border-solid border-2 border-black rounded-2xl text-black  px-6 py-2  hover:bg-black hover:text-black transition duration-300"
              >
                Appointment
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

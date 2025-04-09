import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../assets/logo2.png"

const Header = () => {

  return (
<>
  <header className='bg-white  h-[90px] '>
    <div className='flex justify-between items-center w-[92%]  mx-auto'>
      <span className='text-3xl fond-[popins] text-white '>
           <img src={Logo} alt="" className='lg:h-[70px] h-[80px] py-[5px] ' />   
      </span>
      <div className='nav-links duration-500 md:static absolute z-20 lg:py-[15px]  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5'>
        <ul className='flex md:flex-row flex-col md:text-right md:gap-[4vw] gap-8 '>
          <li>
            <Link to={'/'} className='hover:text-white hover:bg-blue-600 rounded-2xl p-3  text-black text-[20px]' >
              Home
            </Link>
          </li>
          <li>
            <Link to={'/about'} className='hover:text-white hover:bg-blue-600  rounded-2xl p-3 text-black text-[20px] ' >
              About
            </Link>
          </li>
          <li>
            <Link to={'/Docters'} className='hover:text-white hover:bg-blue-600  rounded-2xl p-3 text-black text-[20px]'>
              Docters
            </Link>
          </li>
          <li>
            <Link to={'/contact'} className='hover:text-white hover:bg-blue-600  rounded-2xl p-3  text-black text-[20px]' >
              Contact
            </Link>
          </li>
        </ul>
        <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-600 duration-500 my-3 gap-6 W-'>
            <Link to={'/Appoinment'} className='  rounded-2xl p-3  text-white text-[20px]' >
            Appoinment
            </Link>
        </button>
      </div>
    </div>
  </header> 
</>
  )
}
export default Header 
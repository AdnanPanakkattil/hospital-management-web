import React from 'react'
 import {Link} from 'react-router-dom'
// import Logo from "../assets/logo2.png"

const Header = () => {

  return (
<>
  <header className='bg-white  h-[90px] '>
    <div class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center ">
        <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
          <span class="mr-2 w-8">
            <img src="/images/JOJj79gp_Djhwdp_ZOKLL.png" alt="" />
          </span>
          hospital
        </a>
        <span class="text-3xl cursor-pointer mx-2 md:hidden block">
          <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span>
      </div>
      <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li class="mx-4 my-6 md:my-0">
          <Link to={'/'} class="text-xl hover:text-blue-500 duration-500" >
            HOME
          </Link>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <Link to={'/about'} class="text-xl hover:text-blue-500 duration-500"  >
            ABOUT
          </Link>      
        </li>
        <li class="mx-4 my-6 md:my-0">
          <Link to={'/Doctors'}  class="text-xl hover:text-blue-500 duration-500">
            DOCTERS
          </Link>      
        </li>
        <li class="mx-4 my-6 md:my-0">
          <Link to={'/contact'} class="text-xl hover:text-blue-500 duration-500" >
            CONTACT
          </Link>
        </li>
        <button class="bg-blue-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-black rounded ">
          <Link to={'/Appoinment'} className='  rounded-2xl p-3  text-white text-[20px] md:text-[13px] ' >
            Appoinment
           </Link>
        </button>
        <h2 class=""></h2>
      </ul>
    </div>
  </header> 
</>
  )
}
export default Header 
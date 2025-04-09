import React from 'react'
import Frame from "../assets/image1.jpg"
import a4 from "../assets/1.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const Home = () => {  

  return (
 <>
    <div className='flex'>
      <img src={Frame} alt="" className='lg:w-full lg:h-[650px] sm:h-[400px] sm:w-full xl:w-full xl:h-[650px] 2xl:h-[700px]'/>
    </div> 
    <div className='lg:h-[300px] lg:w-[600px] 2xl:h-[400px] 2xl:w-[800px] absolute top-[180px] left-[100px] sm:top-[180px] sm:left-[100px] lg:top-[250px] lg:left-[50px] md:top-[150px] md:left-[50px] xl:top-[280px] xl:left-50px 2xl:top-[280px] 2xl:left-[150px]'>
      <div className='text-4xl sm:text-4xl lg:text-5xl  md:text-4xl xl:text-5xl 2xl:text-6xl mb-4 '>
        We Provide  <a href=""  className='text-blue-600 gap-10  ' >Medical</a>Servises
      </div>
      <div className=' text-4xl lg:text-5xl md:text-4xl xl:text-4xl 2xl:text-6xl mb-8'>
        That You Can <a href="" className='text-blue-600 gap-10'>Trust!</a>
      </div>
      <div className='mb-10 text-[15px] sm:text-1xl md:tetx-[2xl] lg:text-[xl] xl:text-1xl 2xl:text-2xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
        Tenetur maiores eaque dignissimos error molestiae aliquam unde.
      </div>
      <button className="transform transition-all duration-300">
        <a href="" className="text-white bg-blue-600 p-[15px] 2xl:p-[25px] rounded-2xl hover:scale-110 hover:origin-right hover:bg-black hover:text-white transform transition-all duration-300">
          Get Appointment
        </a>
      </button>
    </div>

    <div className="w-full h-[750px] sm:w-full sm:h-[750px] md:h-[500px] lg:h-[200px] xl:h-[200px] p-4">
      <div className="grid grid-cols-1 absolute lg:top-[670px] lg:left-[40px] xl:left-[170px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="w-[550px] h-[200px] sm:w-[600px]  md:w-[350px] lg:w-[300px] p-4 bg-blue-700 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-[15px] font-semibold text-white mb-0 text-left">Lorem Amet</h3>
          <h1 className="text-white text-[20px] font-semibold mb-4 text-left">Emergency Cases</h1>
          <p className="text-[15px] font-semibold text-white mb-0 text-left">Lorem ipsum sit amet consectetur</p>
          <p className="text-[15px] font-semibold text-white mb-0 text-left">adipiscing elit. Vivamus et erat in lacus</p>
          <p className="text-[15px] font-semibold text-white mb-0 text-left">convallis sodales.</p>
        </div>
        <div className="w-full h-[200px] md:w-[340px] lg:w-[300px] p-4 bg-blue-700 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-[15px] font-semibold text-white mb-0 text-left">Fusce Porttitor</h3>
          <h1 className="text-white text-[20px] font-semibold mb-4 text-left">Doctors Timetable</h1>
          <p className="text-[15px] font-semibold text-white mb-0 text-left">Lorem ipsum sit amet consectetur</p>
          <p className="text-[15px] font-semibold text-white mb-0 text-left">adipiscing elit. Vivamus et erat in lacus</p>
          <p className="text-[15px] font-semibold text-white mb-0 text-left">convallis sodales.</p>
        </div>
        <div className="w-full h-[200px] md:w-[735px] lg:w-[300px] p-4 bg-blue-700 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-[15px] font-semibold text-white mb-0 text-left">Donec luctus</h3>
          <h1 className="text-white text-[20px] font-semibold mb-4 text-left">Opening Hours</h1>
        <div className="flex justify-between text-[15px] font-semibold text-white">
          <p className="text-left">Monday - Friday</p>
          <p className="text-right">8.00-20.00</p>
        </div>
        <div className="flex justify-between text-[15px] font-semibold text-white">
          <p className="text-left">Saturday</p>
          <p className="text-right">9.00-18.30</p>
        </div>
        <div className="flex justify-between text-[15px] font-semibold text-white">
          <p className="text-left">Monday - Thursday</p>
          <p className="text-right">9.00-15.00</p>
        </div>
      </div>
    </div>
  </div>

  <div className='bg-white xl:w-full xl:h-[650px] w-full h-[1150px] sm:h-[1200px] md:h-[1250px] lg:h-[550px] '>
    <div>
      <img src={a4} alt="" className='xl:h-[570px] xl:w-[550px] absolute xl:left-[50px] left-2 h-[600px] w-[585px] sm:h-[600px] sm:w-[622px] md:left-[80px] md:w-[600px] lg:w-[500px] lg:h-[500px] lg:left-[10px] '/>
    </div>
    <div className='absolute xl:left-[50%] xl:top-[950px] top-[1900px] m-[30px] sm:left-[30px] md:top-[1650px] md:left-[60px] lg:top-[950px] lg:left-[530px]' >
      <div className='bg-blue-200 xl:h-[40px] xl:w-[200px] text-center justify-between xl:mb-4 xl:py-2 h-[40px] w-[200px] py-2 mb-5 lg:text-xl '>
        Health & Medicine
      </div>
      <div className='xl:text-5xl text-3xl sm:text-4xl md:text-4xl md:mb-5 lg:text-4xl'>
        The Heart And Science Of
      </div>
      <div className='xl:text-5xl text-3xl mb-4 sm:text-4xl sm:mb-6 md:text-4xl lg:text-4xl'>
        Medicine Service
      </div>
      <div className='xl:gap-3 xl:mb-10 text-1xl mb-8 text-[16px]  sm:text-[16px] lg:text-[13px] '> 
        There are many variations of Lorem Ipsum available, but the majority have <br/>
        suffered alteration in some form, by injected humor, or randomised words <br/>
        which don't look even slightly believable.
      </div>
      <div className=' xl:h-[100px] xl:w-[600px] '>
        <div className="flex justify-between xl:text-[15px] font-semibold xl:mb-6 mb-4 lg:text-[14px] ">
          <p className="xl:text-left"><i class="fa-solid fa-check text-blue-600 mr-2 lg:text-[10px] "></i>Mauris mattis lectus eget ligula</p>
          <p className="xl:text-right"><i class="fa-solid fa-check text-blue-600 mr-2 lg:text-[10px]"></i>Mauris mattis lectus eget ligula</p>
        </div>
        <div className="flex justify-between xl:text-[15px] font-semibold xl:mb-[70px] mb-10 mr-4 sm:mb-12 lg:text-[14px]">
          <p className="xl:text-left"><i class="fa-solid fa-check text-blue-600 mr-2 lg:text-[10px]"></i>Aenean facilisis erat et metus</p>
          <p className="xl:text-right"><i class="fa-solid fa-check text-blue-600 mr-2 lg:text-[10px]"></i>Aenean facilisis erat et metus</p>
        </div>
        <button className=''>
          <a href="" className='bg-blue-600 text-white xl:p-[20px] xl:px-10 rounded-xl p-5 px-10 hover:text-white hover:bg-black transform transition-all duration-600'>Read More</a>
        </button>
      </div>
    </div>
  </div>

  <div className='bg-white h-[500px] xl:h-[500px] md:h-[600px] lg:h-[650px] xl:mb-32 '>
    <div className='text-center lg:text-6xl text-4xl sm:text-5xl sm:mb-14 homehedding mb-10 md:mb-0 xl:mb-20'> 
      Our Latest Case Studies
    </div>
    <div className="flex items-center justify-center flex-col xl:h-[400px] md:h-[600px]  bg-white ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[270px] xl:w-[340px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>  

  <div className="bg-white xl:h-[400px] xl:w-full " >
    <div className="text-center">
      <p className='text-[15px] xl:mb-5 mb-3 sm:text-[15px] sm:mb-4 md:text-[16px] lg:text-1xl'>WHO WE ARE</p>
      <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl  font-semibold'>We are a modern diagnostic and</h1>
      <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl  xl:text-5xl font-semibold'>treatment centre that provides top quality</h1>
      <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl  xl:text-5xl font-semibold xl:mb-7 mb-3 md:mb-5'>are for every <span class="changecontent  font-semibold xl:text-5xl text-3xl sm:text-3xl md:text-4xl lg:text-4xl "></span></h1>
      <h6 className='xl:text-xl sm:text-[15px] text-[15px] lg:text-[20px] font-semibold xl:mb-2 md:text-[19px] lg:text-1xl'>Piter Bowman</h6>
      <p className='xl:text-[15px] text-[10px] sm:text-[10px] lg:text-[14px] f font-semibold mb-28 md:text-[14px] lg:text-1xl'>Head Physician</p>
    </div>
  </div>
  
 </>
  )
}
export default Home
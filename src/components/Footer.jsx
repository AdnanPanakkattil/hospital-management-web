import React from 'react'

const Footer = () => {
  return (
  <>
    <div className='bg-blue-700 w-full xl:h-[370px]'>
      <div class="container mx-auto p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-1">
          <div class="w-ful text-white rounded-lg  p-6">
            <p class="sm:text-xl mb-5 md:text-2xl lg:text-3xl font-semibold md:font-bold xl:text-[25px] underline decoration-white underline-offset-4 text-4xl">
              About Us
            </p>
            <p class="text-[18px] mb-5 sm:text-base md:text-lg lg:text-xl xl:text-[15px] xl:gap-1 font-bold lg:text-[20px]  ">
              Lorem ipsum dolor sit am <br/>
              consectetur adipisicing elit do <br/>
              eiusmod tempor incididunt utlabore <br/>
              dolore magna. 
            </p>
          </div>
          <div class="w-full text-white rounded-lg p-6">
            <h2 class="text-3xl mb-10 sm:text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold xl:text-[25px]  underline decoration-white underline-offset-4 xl:mb-4">
              Quick Links
            </h2>
            <div class="flex justify-between items-center mb-5">
              <p class="text-xl sm:text-[15px] md:text-lg lg:text-xl font-bold xl:text-[16px] xl:text-left transition-transform duration-300 hover:translate-x-4">
                <a href="">Home</a>
              </p>
              <p class="text-xl mr-[200px] sm:text-[15px] sm:mr-10   sm:text-base  md:mr-[50px] md:text-lg lg:mr-[150px] lg:text-xl font-bold xl:text-[16px] xl:text-right transition-transform duration-300 hover:translate-x-4 xl:pr-10 xl:mx-[85px] xl:mr-0">
                <a href="">Counsellinga</a>
              </p>
            </div>
            <div class="flex justify-between items-center mb-5">
              <p class="text-xl sm:text-[15px] md:text-lg lg:text-xl font-bold xl:text-[16px] xl:text-left transition-transform duration-300 hover:translate-x-4">
                <a href="">About Us</a>
              </p>
              <p class="text-xl mr-[250px] sm:text-[15px] sm:mr-[80px]   sm:text-base lg:mr-[200px]   md:mr-[95px] md:text-lg lg:text-xl font-bold xl:text-[16px] xl:text-right transition-transform duration-300 hover:translate-x-4 xl:pr-10 xl:mr-8">
                <a href="">Finance</a>
              </p>
            </div>
            <div class="flex justify-between items-center mb-5">
              <p class="text-xl sm:text-base md:text-lg lg:text-xl font-bold xl:text-[16px] xl:text-left transition-transform duration-300 hover:translate-x-4">
                <a href="">Services</a>
              </p>
              <p class="text-xl  mr-[204px] sm:text-base sm:mr-[45px] md:text-lg md:mr-[55px] lg:mr-[155px]  lg:text-xl font-bold xl:text-[16px] xl:text-right transition-transform duration-300 hover:translate-x-4 xl:pr-1 xl:mr-8">
                <a href="">Testimonials</a>
              </p>
            </div>
            <div class="flex justify-between items-center mb-5">
              <p class="text-xl sm:text-base  md:text-lg lg:text-xl font-bold xl:text-[16px] xl:text-left transition-transform duration-300 hover:translate-x-4">
                <a href="">Our Cases</a>
              </p>
              <p class="text-xl mr-[280px] sm:text-base sm:mr-[106px] md:mr-[125px] md:text-lg lg:text-xl lg:mr-[234px]  font-bold xl:text-[16px] xl:text-right transition-transform duration-300 hover:translate-x-4 xl:pr-16 xl:mr-8">
                <a href="">FAQ </a>
              </p>
            </div>
            <div class="flex justify-between items-center">
              <p class="text-xl sm:text-base md:text-lg lg:text-xl font-bold xl:text-[16px] xl:text-left transition-transform duration-300 hover:translate-x-4 xl:mr-5 xl:mb-0">
                <a href="">Links</a>
              </p>
              <p class="text-xl mr-[245px] sm:mr-[78px]  sm:text-base md:text-lg md:mr-[95px] lg:text-xl lg:mr-[195px]  font-bold xl:text-[16px] xl:text-right transition-transform duration-300 hover:translate-x-4 xl:mr-[66px]">
                Contact 
              </p>
            </div>
          </div>
          <div class="w-full  text-white rounded-lg  p-6">
            <h2 class="text-3xl sm:text-xl md:text-2xl lg:text-3xl font-semibold sm:font-semibold md:font-bold xl:text-[25px] mb-8 underline decoration-white underline-offset-4 xl:mb-5">
              Open Hours
            </h2>
            <p class="text-xl sm:text-base md:text-lg lg:text-xl font-bold xl:text-[14px] mb-4 ">
              Lorem ipsum dolor sit ame <br/>
              consectetur adipisicing elit do <br/>
              eiusmod tempor incididunt.
            </p>
            <div className="flex justify-between text-[15px] font-semibold text-white mb-3">
              <p className="text-left text-xl sm:text-[17px]">Monday - Friday</p>
              <p className="text-right text-xl sm:text-[17px] ">8.00-20.00</p>
            </div>
            <div className="flex justify-between text-[15px] font-semibold text-white mb-3">
              <p className="text-left text-xl sm:text-[17px]">Saturday</p>
              <p className="text-right text-xl sm:text-[17px]">9.00-18.30</p>
            </div>
            <div className="flex justify-between text-[15px] font-semibold text-white">
              <p className="text-left text-xl sm:text-[17px]">Monday - Thursday</p>
              <p className="text-right text-xl sm:text-[17px]">9.00-15.00</p>
            </div>
          </div>
          <div class="w-full  text-white rounded-lg  p-6">
            <h2 class="text-3xl mb-6 sm:text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold xl:text-[25px]  underline decoration-white underline-offset-4">
              Newsletter
            </h2>
            <p class="text-xl sm:text-[15px] md:text-lg lg:text-xl font-bold xl:text-[14px]  mb-4">
              subscribe to our newsletter to get <br />
              allour news in your inbox.. Lorem <br />
              ipsum dolor sit amet, consectetur <br />
              adipisicing elit,
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default Footer

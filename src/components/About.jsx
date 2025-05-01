import React from 'react';
import ab1 from "../assets/about.jpg"
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"
import s4 from "../assets/s4.png"

const About = () => {
  return (
    <>
        <div className='bg-blue-400 w-full h-[100px] sm:h-[140px] sm:w-[full] md:w-full md:Lh-[150px] md:pt-5 xl:w-full xl:h-[200px] lg:w-full lg:h-[150px]'>
          <h1 className='text-white font-bold text-center text-3xl py-10 sm:text-3xl sm:py-15 md:text-3xl md:py-10  xl:text-center xl:text-5xl xl:py-10  lg:text-center lg:text-5xl lg:py-6'>
            About
          </h1>
        </div>
        <div className=' h-[900px] w-full sm:h-[800px] sm:w-full md:w-ful md:h-[800px] xl:h-[600px] xl:w-full lg:h-[400px] lg:w-full my-12 '>
          <div>
            <img src={ab1} alt="" className='xl:h-[500px] xl:w-[500px] xl:mt-[50px] xl:ml-[50px] xl:rounded-2xl h-[400px] w-[550px] mx-5 rounded-2xl sm:mx-7 sm:w-[590px] md:w-[710px] md:h-[450px] lg:w-[400px] lg:h-[400px] '/>
          </div>
          <div className=' absolute h-[500px] w-[530px] top-[750px] p-6 left-8 xl:h-[500px] xl:w-[600px]  xl:top-[340px] xl:left-[620px] xl:p-10 sm:w-[580px] md:w-[700px] lg:top-[290px] lg:left-[450px]  lg:w-[550px] lg:h-[400px] '>
            <div className='text-blue-500 font-bold md:text-2xl'>
              About Us
            </div>
            <div className=' font-extrabold text-3xl py-7 sm:text-3xl sm:py-7 md:text-4xl xl:text-3xl xl:pb-10 xl:pt-5 lg:text-[28px] lg:pb-5 '>
              Best Medical Care For Yourself <br />
              and Your Family
            </div>
            <div className=' py-3 text-[10px] leading-8 xl:text-[10px] xl:leading-7 sm:text-[11px] sm:leading-6 md:text-[14px] lg:text-[11px] font-bold '>
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua <br />
              sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, <br />
              sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores <br />
              takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna
            </div>
          </div>
        </div>

{/* card section start*/}

        <div className=' w-full h-[1550px] lg:h-[900px] lg:w-full sm:w-full sm:h-[1000px] xl:w-full xl:h-[600px] '>
          <div className='text-center w-full h-[200px]'>
            <div className='py-6 text-2xl' >
              medical centre
            </div>
            <div className=' text-5xl text-blue-800 font-semibold' >
              Our Departments
            </div>
          </div>

          <div class="flex justify-center items-center  p-4 ">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-6 w-full lg:max-w-screen-xl">
              <div class="relative bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[600px] h-[300px] p-6 pt-2">

                <div class="text-center mb-4">
                  <div class="text-4xl mb-2 my-14"> 
                    <img src={s1} alt="" className=' mx-[200px] xl:mx-20 sm:mx-[70px] md:mx-[100px] lg:mx-[160px] ' />
                  </div> 
                  <h2 class="text-xl font-semibold text-gray-800 mb-2">Cardiology</h2>
                  <p class="text-gray-600">sed do eiusm od tempor</p>
                  <a href=""><i class="fa-solid fa-ellipsis"></i></a>
                </div>
              </div>

              <div class="relative bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[600px]  h-[300px] p-6 pt-2">
                <div class="text-center mb-4">
                  <div class="text-4xl mb-2 my-14">
                    <img src={s2} alt="" className='mx-[199px] xl:mx-16 sm:mx-[60px] md:mx-[90px] lg:mx-[160px]' />
                  </div> 
                  <h2 class="text-xl font-semibold text-gray-800 mb-2">Diagnostics</h2>
                  <p class="text-gray-600">sed do eiusm od tempor</p>
                  <a href=""><i class="fa-solid fa-ellipsis"></i></a>
                </div>
              </div>

              
            <div class="relative bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[600px] h-[300px] p-6 pt-2">

                <div class="text-center mb-4">
                  <div class="text-4xl mb-2 my-14">
                    <img src={s3} alt="" className='mx-[199px] xl:mx-16 sm:mx-[60px] md:mx-[90px] lg:mx-[160px]' />
                  </div>
                  <h2 class="text-xl font-semibold text-gray-800 mb-2">Virology</h2>
                  <p class="text-gray-600">sed do eiusm od tempor</p>
                  <a href=""><i class="fa-solid fa-ellipsis"></i></a>
                </div>
              </div>

              <div class="relative bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[600px] h-[300px] p-6 pt-2">
                <div class="text-center mb-4">
                  <div class="text-4xl mb-2 my-14">
                    <img src={s4} alt="" className='mx-[150px] xl:mx-[20px] sm:mx-[20px] md:mx-[50px] lg:mx-[120px]' />
                  </div>
                  <h2 class="text-xl font-semibold text-gray-800 mb-2">Therapy</h2>
                  <p class="text-gray-600">sed do eiusm od tempor</p>
                  <a href=""><i class="fa-solid fa-ellipsis"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div> 

{/* card section end*/}

    </>
  );
};

export default About;

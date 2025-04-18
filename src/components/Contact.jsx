import React, { useState } from 'react';

const Contact = () => {

  return (
    <div className="w-full h-[2940px] xl:h-[1360px] md:w-full md:h-[2500px] sm:w-full sm:h-[2400px] lg:h-[1400px] ">

      <div class="bg-blue-400 w-full h-[200px]">
        <p class="text-center text-white text-4xl font-bold pt-20">Contact Us</p>
      </div>

      <div class=" mx-auto p-4 px-[150px] sm:px-0 sm:pt-16 md:px-5 lg:px-0 ">
        <div class=" mx-auto p-4 px-[150px] sm:px-0 sm:pt-16 md:px-16 lg:px-0">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2 absolute xl:left-[100px] md:left-7 sm:left-3 sm:mb-5 lg:left-2  left-[100px] ">
            <div class="bg-white p-6 rounded-lg shadow-lg lg:w-[240px] lg:h-[250px] md:h-[250px] md:w-[350px] md:mr-4 xl:mx-[10px] xl:mr-8 md:mt-10  sm:w-[300px] sm:h-[300px] sm:mr-7 sm:py-0   h-[300px] w-[400px] mb-8 py-14 xl:py-0">
              <div class="py-5 pl-20 text-blue-500 rounded-3xl sm:pt-14">
                <div class=" text-5xl md:mx-12 sm:mx-5 xl:mx-0 lg:mx-0 mx-16 ">
                  <i class="fa-regular fa-address-book"></i>
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-4 text-center">Address</h3>
              <p class="text-gray-600 text-center">
                198 West 21th Street, Suite <br />
                721 New York NY 10016
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg   lg:w-[240px] lg:h-[250px] md:h-[250px] md:w-[350px] md:mt-10  m:w-[300px] sm:w-[300px] sm:h-[300px] sm:mr-7 sm:py-0  h-[300px] w-[400px] mb-8 py-14 xl:py-0 ">
              <div class="py-5 pl-20 text-blue-500 rounded-3xl sm:pt-14 ">
                <div class="  text-5xl md:mx-12 sm:mx-5 xl:mx-0  lg:mx-0 mx-16">
                  <i class="fa-brands fa-viber"></i>
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-4 text-center">Contact Number</h3>
              <p class="text-gray-600 text-center">+576242189378</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg  lg:w-[240px] lg:h-[250px] md:h-[250px] md:w-[350px] md:mr-4 md:mt-10 m:w-[300px] sm:w-[300px] sm:h-[300px] sm:mr-7 sm:py-0  h-[300px] w-[400px] mb-8 py-14 xl:py-0">
              <div class="py-5 pl-20 text-blue-500 rounded-3xl sm:pt-14 ">
                <div class=" rounded-4xl text-5xl md:mx-12 sm:mx-5 xl:mx-0  lg:mx-0 mx-20 ">
                  <i class="fa-regular fa-paper-plane"></i>
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-4 text-center">Email Address</h3>
              <p class="text-gray-600 text-center">info@yoursite.com</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg   lg:w-[240px] lg:h-[250px] md:h-[250px] md:w-[350px] md:mt-10 m:w-[300px] sm:w-[300px] sm:h-[300px] sm:mr-7 sm:py-0  h-[300px] w-[400px] py-14 xl:py-0">
              <div class=" pl-16 text-blue-500 rounded-3xl sm:pt-14">
                <div class="p-4 rounded-4xl text-5xl md:mx-12 sm:mx-5 xl:mx-0  lg:mx-0 mx-16 ">
                  <i class="fa-brands fa-chrome"></i>
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-4 text-center">Website</h3>
              <p class="text-gray-600 text-center">yoursite.com</p>
            </div>
          </div> 
          </div> 

          <div class="bg-white p-6 rounded-lg shadow-lg  sm:mx-2 mr-1 mt-28 absolute  md:left-5 lg:left-[500px] lg:top-[650px] lg:w-[500px] xl:left-[730px] xl:top-[700px] md:top-[1000px] md:w-[720px] sm:top-[1000px] sm:w-[620px] sm:left-1 top-[1590px] left-0  w-[599px] ">
            <form action="#" method="POST" class="space-y-4">
              <div class="flex flex-col">
                <label for="name" class="text-lg font-semibold mb-2">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" class="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              </div>

              <div class="flex flex-col">
                <label for="email" class="text-lg font-semibold mb-2">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" class="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              </div>

              <div class="flex flex-col">
                <label for="subject" class="text-lg font-semibold mb-2">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Enter the subject" class="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              </div>

              <div class="flex flex-col">
                <label for="message" class="text-lg font-semibold mb-2">Your Message</label>
                <textarea id="message" name="message" placeholder="Write your message here" class="p-3 border border-gray-300 rounded-lg h-[150px] overflow-y-auto"></textarea>
              </div>

              <div class="text-center mt-6">
                <button type="submit" class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto">submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className="absolute xl:top-[800px] xl:left-[110px] lg:top-[760px] lg:left-[20px] md:top-[1800px] sm:top-[1800px] top-[2350px] ">
          <div className=" bg-gray-300  lg:w-[460px] lg:h-[600px] md:h-[700px] md:w-[767px]  sm:w-[640px] sm:h-[600px] h-[600px] w-[600px]  xl:w-[600px] xl:h-[600px] ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.971909362352!2d75.98869769598804!3d11.001591126577207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b4a66b9e1243%3A0x57ad4731fa4b1279!2sKottakkal%2C%20Kerala!5e0!3m2!1sen!2sin!4v1744087532318!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' xl:w-[600px] xl:h-[600px]  lg:w-[460px] lg:h-[600px] md:h-[700px] md:w-full sm:w-full sm:h-[600px] h-[600px] w-full'></iframe>
          </div>
        </div>

      </div>

  );
};

export default Contact;



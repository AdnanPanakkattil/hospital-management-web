import React, { useState } from 'react';

const Appoinment = () => {
  // State to handle date selection
  const [date, setDate] = useState('');

  // Handle date change
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
      <>
      <div className=' w-full h-[1000px]  '>
        <div className='w-full h-[300px] pt-[100px] '>
           <div className=" text-center text-5xl font-bold"> Request an Appointment</div>
           <div className="text-center text-3xl mt-10">     <i class="fa-solid fa-angle-down"></i></div>
        </div>
        <div className="relative  w-full max-w-4xl mx-auto p-8 ">
          <form className="space-y-6 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Appointment List </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="first_name" name="first_name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
              </div>
              <div className="form-group">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="last_name" name="last_name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
             </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
              </div>
              <div className="form-group">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input type="tel" id="mobile" name="mobile"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="patient_name" className="block text-sm font-medium text-gray-700">Patient Name</label>
                  <input type="text"  name="patient_name"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  required />
              </div>
              <div className="form-group">
                <label htmlFor="doctor_name" className="block text-sm font-medium text-gray-700">Doctor's Name</label>
                  <input  type="text" id="doctor_name" name="doctor_name"  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department Name</label>
                  <input type="text" id="department" name="department" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
              </div>

              <div className="form-group">
                <label htmlFor="appointment_date" className="block text-sm font-medium text-gray-700">Appointment Date</label>
                <input type="date" id="appointment_date" name="appointment_date" value={date} onChange={handleDateChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>

            <div className="text-center">
              <button type="submit" className="w-full px-6 py-3 mt-6 bg-blue-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50" >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Appoinment;



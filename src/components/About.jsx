import React from 'react';
import ab1 from '../assets/about.jpg';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';

const About = () => {
  const departments = [
    { image: s1, title: 'Cardiology', description: 'sed do eiusm od tempor' },
    { image: s2, title: 'Diagnostics', description: 'sed do eiusm od tempor' },
    { image: s3, title: 'Virology', description: 'sed do eiusm od tempor' },
    { image: s4, title: 'Therapy', description: 'sed do eiusm od tempor' },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Header */}
      <div className="bg-blue-400 w-full h-40 sm:h-36 md:h-40 lg:h-48 flex items-center justify-center">
        <h1 className="text-white pt-20 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
          About
        </h1>
      </div>

      {/* Image and Text Section */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <img
              src={ab1}
              alt="About"
              className="w-full h-auto rounded-2xl max-h-[500px] object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-blue-500 font-bold text-lg sm:text-xl lg:text-2xl">
              About Us
            </h2>
            <h3 className="text-1xl sm:text-3xl lg:text-4xl font-extrabold my-4">
              Best Medical Care For Yourself <br /> and Your Family
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-gray-600">
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua
              sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit,
              sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores
              takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna
            </p>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl text-gray-600">Medical Centre</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl text-blue-800 font-semibold">
            Our Departments
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-auto p-6 flex flex-col items-center"
            >
              <img src={dept.image} alt={dept.title} className="h-16 w-16 my-6" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{dept.title}</h2>
              <p className="text-gray-600 text-center">{dept.description}</p>
              <a href="#" className="mt-2 text-blue-500">
                <i className="fa-solid fa-ellipsis"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
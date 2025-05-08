import React from 'react';
import { useQuery } from 'react-query';
import { getDoctorsData } from '../utils/Doctors/DoctorsApi';

const Doctors = () => {
  const { data} = useQuery('getDocters', getDoctorsData);


  return (
    <div className='bg-white py-10'>
      <div className='text-center py-16 text-3xl'>
        Our Experienced Doctors
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {data?.data?.map(doc => (
            <div key={doc.id} className="relative group mb-[50px]">
              <div className="w-full h-[350px] object-cover rounded-lg">
                <img src={`http://localhost:8000${doc.image}`} alt="doctor image" className='h-f w-full object-cover rounded-lg' />
                <h1 className="text-center mt-2">{doc.doctor_name}</h1>
                <p className="text-center text-sm">{doc.department_name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;







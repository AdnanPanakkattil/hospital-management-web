import React from 'react'
import doc1 from "../assets/doc1.jpg"
import doc2 from "../assets/doc2.jpg"
import doc3 from "../assets/doc3.jpg"
import doc4 from "../assets/doc4.jpg"
import doc5 from "../assets/doc5.jpg"
import doc6 from "../assets/doc6.jpg"
import doc7 from "../assets/doc7.jpg"
import doc8 from "../assets/doc8.jpg"

const Docters = () => {  
  return (
    <> 
      <div className='bg-white py-10'>
        <div className='text-center py-9 text-3xl'>
          Our Experienced Doctors
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8">

            {/* Doctor 1 */}
            <div className="relative group mb-[50px]">
              <div className="w-full h-[350px] object-cover rounded-lg">
                <img src={doc1} alt="" className='h-[350px] w-full object-cover rounded-lg' />
                <h1 className="text-center mt-2">Anna Smith</h1>
                <p className="text-center text-sm">Cardiologist</p>
              </div>
              <div className="absolute inset-0 flex justify-center items-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="text-black font-semibold">
                  <h1>Card 1</h1>
                </div>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="relative group mb-[50px]">
              <div className="w-full h-[350px] object-cover rounded-lg">
                <img src={doc2} alt="" className='h-[350px] w-full object-cover rounded-lg' />
                <h1 className="text-center mt-2">Henry Dilan</h1>
                <p className="text-center text-sm">Therapist</p>
              </div>
              <div className="absolute inset-0 flex justify-center items-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h1 className="text-black font-semibold">Card 2</h1>
              </div>
            </div>

            {/* Doctor 3 */}
            <div className="relative group mb-[50px]">
              <div className="w-full h-[350px] object-cover rounded-lg">
                <img src={doc3} alt="" className='h-[350px] w-full object-cover rounded-lg' />
                <h1 className="text-center mt-2">Jose Reeder</h1>
                <p className="text-center text-sm">Neurologist</p>
              </div>
              <div className="absolute inset-0 flex justify-center items-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h1 className="text-black font-semibold">Card 3</h1>
              </div>
            </div>

            {/* Doctor 4 */}
            <div className="relative group mb-[50px]">
              <div className="w-full h-[350px] object-cover rounded-lg">
                <img src={doc4} alt="" className='h-[350px] w-full object-cover rounded-lg' />
                <h1 className="text-center mt-2">Darrin Jackson</h1>
                <p className="text-center text-sm">Ophthalmologist</p>
              </div>
              <div className="absolute inset-0 flex justify-center items-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h1 className="text-black font-semibold">Card 4</h1>
              </div>
            </div>

            {/* Doctor 5 */}
            <div className="relative group mb-[50px]">
              <div className="w-full h-[350px] object-cover rounded-lg">
                <img src={doc5} alt="" className='h-[350px] w-full object-cover rounded-lg' />
                <h1 className="text-center mt-2">Karen Mayers</h1>
                <p className="text-center text-sm">Pediatrician</p>
              </div>
              <div className="absolute inset-0 flex justify-center items-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h1 className="text-black font-semibold">Card 5</h1>
              </div>
            </div>

            {/* Doctor 6 */}
            <div className="relative group mb-[50px]">
              <div className="w-full h-[350px] object-cover rounded-lg">
                <img src={doc6} alt="" className='h-[350px] w-full object-cover rounded-lg' />
                <h1 className="text-center mt-2">Gregory Leiter</h1>
                <p className="text-center text-sm">Endocrinologist</p>
              </div>
              <div className="absolute inset-0 flex justify-center items-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h1 className="text-black font-semibold">Card 6</h1>
              </div>
            </div>

            {/* Doctor 7 */}
            <div className="relative group mb-[50px]">
              <div className="w-full h-[350px] object-cover rounded-lg">
                <img src={doc7} alt="" className='h-[350px] w-full object-cover rounded-lg' />
                <h1 className="text-center mt-2">Nettie Brown</h1>
                <p className="text-center text-sm">Dermatologist</p>
              </div>
              <div className="absolute inset-0 flex justify-center items-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h1 className="text-black font-semibold">Card 7</h1>
              </div>
            </div>

            {/* Doctor 8 */}
            <div className="relative group mb-[50px]">
              <div className="w-full h-[350px] object-cover rounded-lg">
                <img src={doc8} alt="" className='h-[350px] w-full object-cover rounded-lg' />
                <h1 className="text-center mt-2">Alma Mackey</h1>
                <p className="text-center text-sm">Orthopedist</p>
              </div>
              <div className="absolute inset-0 flex justify-center items-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h1 className="text-black font-semibold">Card 8</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Docters

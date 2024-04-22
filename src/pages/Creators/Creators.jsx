import React from 'react'
import { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';
import "./Creators.css"
const Homepage = () => {
  const creators = useContext(DataContext);

  return (
    <main className='relative'>
      <div className='creators-background -z-10 h-[350px] absolute top-0 left-0 right-0'></div>
      <section className='py-24 sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto'>
        <div>
          <div className="mb-72">
            <div className='flex justify-left gap-10 items-center'>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-[43px] my-4 font-heading text-gray-900">
                CREATORS
              </h1>
              <button className='border-2 border-white px-3 text-md font-semibold hover:text-blue-500 duration-300 py-3 rounded-3xl'>🎉 1820 Creator</button>
            </div>
            <p className="font-semibold text-[13px] md:text-[16px] lg:text-[18px] my-4 font-heading ">
              Be among those who profit from their creative activities as well.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-40 gap-x-6">
            {creators.map(creator => (
              <div key={creator.id} className="border shadow-md w-full bg-white rounded-lg  flex flex-col justify-between items-center">
                <div className=''>
                  <div className='relative -top-[75px]'>
                    <img className="mx-auto border-[5px] border-[#E5E2EE] object-center object-cover rounded-full h-36 w-36" src={creator.image} alt="photo" />
                  </div>
                  <div className="text-center relative -top-[50px] flex gap-2 flex-col mx-1">
                    <p className="text-xl text-gray-700 font-bold">{creator.name}</p>
                    <p className="text-[19px] creator-text-color font-semibold ">{creator.title}</p>
                    <p className="text-[19px]  font-semibold ">{creator.detail}</p>
                    <div className='flex justify-center gap-3 items-center mt-5 -mb-7'>
                      {creator.socialTiktok && <img className="w-5  font-semibold" src={creator.socialTiktok} alt="Tiktok Icon" />}
                      {creator.socialInstagram && <img className="w-5  font-semibold" src={creator.socialInstagram} alt="Instagram Icon" />}
                      {creator.socialYoutube && <img className="w-5  font-semibold" src={creator.socialYoutube} alt="YouTube Icon" />}
                      <img className="w-4 h-4  font-semibold" src={creator.socialGlobe} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Homepage
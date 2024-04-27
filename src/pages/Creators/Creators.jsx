import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { DataContext } from '../../Context/DataContext';
import "./Creators.css"
import debounce from 'debounce';

const Homepage = () => {
  const creators = useContext(DataContext);
  const [searchItem, setSearchItem] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setCreators(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const debouncedHandleInputChange = debounce((searchTerm) => {
    setSearchItem(searchTerm);
    if (!searchTerm) {
      setFilteredUsers([]);
    } else {
      const filteredItems = creators.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );
      setFilteredUsers(filteredItems);
      setSearchNotFound(filteredItems.length === 0);
    }
  }, 100);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    debouncedHandleInputChange(searchTerm);
  };

  return (
    <main className='relative'>
      <div className='creators-background -z-10 h-[350px] absolute top-0 left-0 right-0'></div>
      <section className='py-24 sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto'>
        <div>
          <div className="mb-72">
            <div className="">
              <div className='flex justify-left gap-10 items-center'>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-[43px] my-4 font-heading text-gray-900">
                  CREATORS
                </h1>
                <button className='border-2 border-white px-3 text-md font-semibold hover:text-blue-500 duration-300 py-3 rounded-3xl'>🎉 1820 Creator</button>
              </div>
              <p className="font-semibold text-[13px] md:text-[16px] lg:text-[18px] my-8 font-heading ">
                Be among those who profit from their creative activities as well.
              </p>
            </div>
            <div className='mt-14 flex justify-center bg-white shadow-lg p-10 sm:p-16 lg:p-20 rounded-lg'>
              <input
                className="inputcolor border w-full h-12 px-5"
                type="text"
                value={searchItem}
                onChange={handleInputChange}
                placeholder='Search'
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-40 gap-x-6">
            {searchNotFound ? (
              <p>User not found</p>
            ) : (
              filteredUsers.length === 0 ? creators.map(creator => (
                <div key={creator.id} className="hover:translate-y-[-15px] transition-transform duration-300 ease-in-out border shadow-md w-full bg-white rounded-lg  flex flex-col justify-between items-center">
                  <div>
                    <div className='relative -top-[75px]'>
                      <img className="mx-auto border-[5px] border-[#E5E2EE] object-center object-cover rounded-full h-36 w-36 cursor-pointer" src={creator.image} alt="photo" />
                    </div>
                    <div className="text-center relative -top-[50px] flex gap-2 flex-col mx-1">
                      <p className="text-xl text-gray-700 font-bold cursor-pointer">{creator.name}</p>
                      <p className="text-[19px] creator-text-color font-semibold cursor-pointer">{creator.title}</p>
                      <p className="text-[19px]  font-semibold cursor-pointer">{creator.detail}</p>
                      <div className='flex justify-center gap-3 items-center mt-5 -mb-7'>
                        {creator.socialTiktok && <img className="w-5  font-semibold cursor-pointer" src={creator.socialTiktok} alt="Tiktok Icon" />}
                        {creator.socialInstagram && <img className="w-5  font-semibold cursor-pointer" src={creator.socialInstagram} alt="Instagram Icon" />}
                        {creator.socialYoutube && <img className="w-5  font-semibold cursor-pointer" src={creator.socialYoutube} alt="YouTube Icon" />}
                        <img className="cursor-pointer w-4 h-4  font-semibold" src={creator.socialGlobe} />
                      </div>
                    </div>
                  </div>
                </div>
              )) : filteredUsers.map(creator => (
                <div key={creator.id} className="hover:translate-y-[-15px] transition-transform duration-300 ease-in-out border shadow-md w-full bg-white rounded-lg  flex flex-col justify-between items-center">
                  <div>
                    <div className='relative -top-[75px]'>
                      <img className="mx-auto border-[5px] border-[#E5E2EE] object-center object-cover rounded-full h-36 w-36 cursor-pointer" src={creator.image} alt="photo" />
                    </div>
                    <div className="text-center relative -top-[50px] flex gap-2 flex-col mx-1">
                      <p className="text-xl text-gray-700 font-bold cursor-pointer">{creator.name}</p>
                      <p className="text-[19px] creator-text-color font-semibold cursor-pointer">{creator.title}</p>
                      <p className="text-[19px]  font-semibold cursor-pointer">{creator.detail}</p>
                      <div className='flex justify-center gap-3 items-center mt-5 -mb-7'>
                        {creator.socialTiktok && <img className="w-5  font-semibold cursor-pointer" src={creator.socialTiktok} alt="Tiktok Icon" />}
                        {creator.socialInstagram && <img className="w-5  font-semibold cursor-pointer" src={creator.socialInstagram} alt="Instagram Icon" />}
                        {creator.socialYoutube && <img className="w-5  font-semibold cursor-pointer" src={creator.socialYoutube} alt="YouTube Icon" />}
                        <img className="cursor-pointer w-4 h-4  font-semibold" src={creator.socialGlobe} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Homepage;

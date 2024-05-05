import React from 'react'
import "./HomePage.css"
import { useContext } from 'react';
import { DataContext } from '../../Context/DataContext';
import myImage from '../../assets/image-section.png';
import ScrollToTop from "react-scroll-to-top";
import { Link } from 'react-router-dom';
const HomePage = () => {
  const creators = useContext(DataContext);

  return (
    <main>
      <section>
        <div className='section-first-background flex justify-center items-center'>
          <div className='sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-20 mx-auto -my-40 mt-60 text-center'>
            <div className='text-[#6B7385] text-[20px] text-center'>Backed by <span className='italic font-[Britannic] text-black font-bold text-2xl'>500 </span> Global</div>
            <span className="first-span"></span>
            <span className="second-span"></span>
            <span className="third-span "></span>
            <div className='mt-3 px-5 mb-10 text-center text-3xl md:text-[40px] lg:text-[53px] font-bold leading-snug'>
              <span className="mr-[183px] md:mr-[230px] lg:mr-[332px] string">
                <div className="greeting en">Shot a Video </div>
                <div className="greeting es">Write a book </div>
                <div className="greeting de">Do Sport </div>
                <div className="greeting it">Educate </div>
              </span> ,do what you love,and get support from your followers!
            </div>
            <div className='flex md:flex-row flex-col justify-end relative items-center sm:mx-20 xl:mx-60 px-5'>
              <input className='md:text-[22px] md:absolute text-xs w-full md:py-6 px-5 rounded-[100px] border py-[10px] outline-none font-semibold' placeholder='kofe.al/username' type="email" />
              <div className='arrows-lr my-5  button-third px-2 sm:px-5 md:px-8 md:mr-2 rounded-[100px]  '>
                <div className='md:py-3 py-1 flex justify-center items-center '>
                  <span className='arrow-first sm:text-lg text-xs md:text-xl font-bold mr-1'> → </span>
                  <span className='text-xs sm:text-lg md:text-xl py-1 px-3'>Create</span>
                  <span className='arrow-second sm:text-lg text-xs md:text-xl font-bold ml-1'> → </span>
                </div>
              </div>
            </div>
            <div className='flex md:my-5 mx-auto w-max gap-3 text-xl font-bold'>
              <div>Creat 🎉</div>
              <div>Share 🚀</div>
              <div>Earn ☕</div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-24 text-gray-600 body-font sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container mx-auto">
        <div className="flex flex-wrap">
          <div className='xl:w-1/4 md:w-1/2 sm:w-1/2 cursor-pointer w-full p-5'>
            <div className="group block">
              <div className="relative bg-black rounded-lg h-[80px]">
                <img src="https://kofe.al/storage/images/categories/web-design.jpg" alt="Web-design" className="opacity-75 object-cover w-full h-full rounded-md" />
                <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Web-design</h5>
                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-700 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="mt-14 group-hover:mt-8 duration-500">
                    <div className="flex items-center text-sm">
                      <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Web-design</h5>
                      <a className="tag-a text-xs font-bold text-gray-300 ">133 Creator →</a>
                      <span className="border-b border-gray-500 ml-2"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='xl:w-1/4 md:w-1/2 sm:w-1/2 cursor-pointer w-full p-5'>
            <div className="group block">
              <div className="relative bg-black rounded-lg h-[80px]">
                <img src="https://kofe.al/storage/images/categories/graphic-design.jpg" alt="Web-design" className="opacity-75 object-cover w-full h-full rounded-md" />
                <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Graphic design</h5>
                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-700 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="mt-14 group-hover:mt-8 duration-500">
                    <div className="flex items-center text-sm">
                      <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Graphic design</h5>
                      <a className="tag-a text-xs font-bold text-gray-300 ">153 Creator →</a>
                      <span className="border-b border-gray-500 ml-2"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 sm:w-1/2 cursor-pointer w-full p-5'>
            <div className="group block">
              <div className="relative bg-black rounded-lg h-[80px]">
                <img src="https://kofe.al/storage/images/categories/personal-development.jpg" alt="Web-design" className="opacity-75 object-cover w-full h-full rounded-md" />
                <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Personal dev.</h5>
                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-700 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="mt-14 group-hover:mt-8 duration-500">
                    <div className="flex items-center text-sm">
                      <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Personal dev.</h5>
                      <a className="tag-a text-xs font-bold text-gray-300 ">320 Creator →</a>
                      <span className="border-b border-gray-500 ml-2"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 sm:w-1/2 cursor-pointer w-full p-5'>
            <div className="group block">
              <div className="relative bg-black rounded-lg h-[80px]">
                <img src="https://kofe.al/storage/images/categories/author.png" alt="Web-design" className="opacity-75 object-cover w-full h-full rounded-md" />
                <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Writing</h5>
                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-700 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="mt-14 group-hover:mt-8 duration-500">
                    <div className="flex items-center text-sm">
                      <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Writing</h5>
                      <a className="tag-a text-xs font-bold text-gray-300 ">144 Creator →</a>
                      <span className="border-b border-gray-500 ml-2"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 sm:w-1/2 cursor-pointer w-full p-5'>
            <div className="group block">
              <div className="relative bg-black rounded-lg h-[80px]">
                <img src="https://kofe.al/storage/images/categories/artist.png" alt="Web-design" className="opacity-75 object-cover w-full h-full rounded-md" />
                <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Art</h5>
                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-700 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="mt-14 group-hover:mt-8 duration-500">
                    <div className="flex items-center text-sm">
                      <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Art</h5>
                      <a className="tag-a text-xs font-bold text-gray-300 ">172 Creator →</a>
                      <span className="border-b border-gray-500 ml-2"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 sm:w-1/2 cursor-pointer w-full p-5'>
            <div className="group block">
              <div className="relative bg-black rounded-lg h-[80px]">
                <img src="https://kofe.al/storage/images/categories/arts.jpg" alt="Web-design" className="opacity-75 object-cover w-full h-full rounded-md" />
                <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Blog</h5>
                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-700 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="mt-14 group-hover:mt-8 duration-500">
                    <div className="flex items-center text-sm">
                      <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Blog</h5>
                      <a className="tag-a text-xs font-bold text-gray-300 ">320 Creator →</a>
                      <span className="border-b border-gray-500 ml-2"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 sm:w-1/2 cursor-pointer w-full p-5'>
            <div className="group block">
              <div className="relative bg-black rounded-lg h-[80px]">
                <img src="https://kofe.al/storage/images/categories/Sport.png" alt="Web-design" className="opacity-75 object-cover w-full h-full rounded-md" />
                <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Sport</h5>
                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-700 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="mt-14 group-hover:mt-8 duration-500">
                    <div className="flex items-center text-sm">
                      <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Sport</h5>
                      <a className="tag-a text-xs font-bold text-gray-300 ">99 Creator →</a>
                      <span className="border-b border-gray-500 ml-2"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='xl:w-1/4 md:w-1/2 sm:w-1/2 cursor-pointer w-full p-5'>
            <div className="group block">
              <div className="relative bg-black rounded-lg h-[80px]">
                <img src="https://kofe.al/storage/images/categories/musician.png" alt="Web-design" className="opacity-75 object-cover w-full h-full rounded-md" />
                <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Musicians</h5>
                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-700 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <div className="mt-14 group-hover:mt-8 duration-500">
                    <div className="flex items-center text-sm">
                      <h5 className="absolute text-white group-hover:top-[20%] top-[35%]  right-0 left-0 mx-auto w-max text-xl font-semibold duration-500">Musicians</h5>
                      <a className="tag-a text-xs font-bold text-gray-300 ">93 Creator →</a>
                      <span className="border-b border-gray-500 ml-2"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto'>
        <div>
          <div className="text-center pb-28">
            <h2 className="text-base font-semibold px-3 py-1 rounded-3xl bg-[#DFE4FD] w-max mx-auto text-indigo-600">
              CREATORS
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-[43px] my-4 font-heading text-gray-900">
              Creators joined us
            </h1>
            <p className="font-semibold text-[15px] md:text-[20px] lg:text-[22px] my-4 font-heading text-gray-400">
              Be among those who profit from their creative activities as well.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-40 gap-x-6">
            {creators.map(creator => (
              <Link key={creator.id} to={`/detail/${creator.id}`}>
                <div className="hover:translate-y-[-15px] transition-transform duration-300 ease-in-out border shadow-md w-full bg-white rounded-lg  flex flex-col justify-between items-center">
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
                        <img className="w-4 h-4 cursor-pointer font-semibold" src={creator.socialGlobe} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className='my-24 sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto'>
        <div className='flex-col flex lg:flex-row items-center justify-center gap-y-14'>
          <div className='lg:w-[100%]'>
            <img src="https://kofe.al/assets/images/splash/layout/en/1_coffee-n.png" alt="" />
          </div>
          <div className='lg:w-[80%] text-left'>
            <h2 className="text-base font-semibold px-3 py-1 rounded-3xl bg-[#DFE4FD] w-max text-indigo-600">
              GET SUPPORT
            </h2>
            <h1 className='text-4xl font-bold my-5'>Accept Tips</h1>
            <p className='text-gray-500'>Kofe.al offers a unique, fun, and simple method to receive support messages and tips from people who appreciate your work! By using Kofeal as a tip jar, you can allow your supporters to gift your activity.</p>
            <div>
              <img src="https://kofe.al/assets/images/icons/kofe-al-types.png" alt="split Images" />
            </div>
          </div>
        </div>
      </section>
      <section className='relative bg-[#F9F9FF] pb-24'>
        <div className="top-circle-shape relative -left-14"></div>
        <div className='sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto'>
          <div className='flex-col flex lg:flex-row items-center justify-center'>
            <div className='text-left lg:w-[80%]'>
              <h2 className="font-semibold px-3 py-1 rounded-3xl bg-[#DFE4FD] w-max text-indigo-600">
                ONLINE STORE
              </h2>
              <h1 className='text-4xl font-bold my-5'>Sell Your Products and Services</h1>
              <p className='text-gray-500'>By opening your Kofe.al Store, add digital or physical items immediately. There is no subscription or activation fee. Simply place your products or services and start selling immediately!</p>
              <h2 className='text-xl font-bold my-5'>What can you sell?:</h2>
              <div className='flex items-center gap-14'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <h2 className="font-extralight text-[9px] p-1 rounded-3xl bg-[#DFE4FD] w-max">
                      ✔️
                    </h2>
                    <p className='text-gray-500'>Physical products</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <h2 className="font-extralight text-[9px] p-1 rounded-3xl bg-[#DFE4FD] w-max">
                      ✔️
                    </h2>
                    <p className='text-gray-500'>Digital products</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <h2 className="font-extralight text-[9px] p-1 rounded-3xl bg-[#DFE4FD] w-max">
                      ✔️
                    </h2>
                    <p className='text-gray-500'>Affiliate products</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <h2 className="font-extralight text-[9px] p-1 rounded-3xl bg-[#DFE4FD] w-max">
                      ✔️
                    </h2>
                    <p className='text-gray-500'>Your Services</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <h2 className="font-extralight text-[9px] p-1 rounded-3xl bg-[#DFE4FD] w-max">
                      ✔️
                    </h2>
                    <p className='text-gray-500'>Event tickets</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <h2 className="font-extralight text-[9px] p-1 rounded-3xl bg-[#DFE4FD] w-max">
                      ✔️
                    </h2>
                    <p className='text-gray-500'>Print on Demand</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[100%] order-first lg:order-last relative z-1'>
              <img src="https://kofe.al/assets/images/splash/layout/en/2-shop.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='my-24 relative'>
        <div className="top-circle-shape relative right-14"></div>
        <div className='sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto'>
          <div className='flex-col flex lg:flex-row items-center justify-center gap-x-20 gap-y-14'>
            <div className='lg:w-[100%] relative z-1'>
              <img src="https://kofe.al/assets/images/splash/layout/en/3-membership.png" alt="" />
            </div>
            <div className='lg:w-[80%] text-left'>
              <h2 className="font-semibold px-3 py-1 rounded-3xl bg-[#DFE4FD] w-max text-indigo-600">
                MEMBERSHIP
              </h2>
              <h1 className='text-4xl font-bold my-5'>Offer Membership</h1>
              <p className='text-gray-500'>By creating a monthly membership channel, enable your followers to become exclusive members who can support you every month at various price levels.
                Reward members with unique gifts such as roles, exclusive content, or physical items.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto'>
        <div className="max-w-screen-xl mx-auto bg-white min-h-sceen">
          <div className="flex flex-col items-center">
            <h2 className="font-semibold px-3 py-1 rounded-3xl bg-[#FAECF1] w-max text-[#DB7093]">
              FAQ
            </h2>
            <p className="my-5 text-center lg:leading-[55px] text-2xl lg:text-[43px] font-bold mt-3">
              Answers to Your Questions
            </p>
          </div>
          <div className="grid w-full gap-y-5 mx-auto mt-8">
            <div className="py-3 px-5 rounded-md border">
              <details className="group">
                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                  <span className='group-open:text-blue-600'> What is Kofe.al?</span>
                  <span className="transition group-open:fill-blue-600 group-open:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Kofe.al is the simplest way for you to earn money directly from your fans. You can accept donations, create membership levels, open an online store and earn commissions with a 9% platform fee.
                </p>
              </details>
            </div>
            <div className="py-3 px-5 rounded-md border">
              <details className="group">
                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                  <span className='group-open:text-blue-600'> Who is Kofe.al for?</span>
                  <span className="transition group-open:fill-blue-600 group-open:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Artists, streamers, podcasters, writers, photographers, filmmakers, influencers and anyone who creates useful content can use Kofe.al.                </p>
              </details>
            </div>
            <div className="py-3 px-5 rounded-md border">
              <details className="group">
                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                  <span className='group-open:text-blue-600'> How do I get paid?</span>
                  <span className="transition group-open:fill-blue-600 group-open:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  As soon as donation payments are activated in your account, you can transfer them to your MPAY wallet. The proceeds from the sale of products and services are transferred to your bank account with TIN. That simple!
                </p>
              </details>
            </div>
            <div className="py-3 px-5 rounded-md border">
              <details className="group">
                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                  <span className='group-open:text-blue-600'> How much is the service fee?</span>
                  <span className="transition group-open:fill-blue-600 group-open:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We charge 9% commission which includes all transaction fees and our commission.
                </p>
              </details>
            </div>
            <div className="py-3 px-5 rounded-md border">
              <details className="group">
                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                  <span className='group-open:text-blue-600'> Should I buy a coffee with donations?</span>
                  <span className="transition group-open:fill-blue-600 group-open:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Of course not! We love coffee, but that's just a metaphor for friendship. Simply asking fans to "buy a coffee" to support your cause is simpler than just "donating." You can also change "coffee" to something else that suits your taste. For example, instead of coffee; you can ask for tea, donuts, hamburgers, water or pizza.                </p>
              </details>
            </div>
            <div className="py-3 px-5 rounded-md border">
              <details className="group">
                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                  <span className='group-open:text-blue-600'> How much I can earn with kofe.al?</span>
                  <span className="transition group-open:fill-blue-600 group-open:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  It all depends on the relationship and communication with your followers and fans. As Kofe.al, we do not apply any limit to the amount that can be collected. All you have to do is create, share, sell and earn.                </p>
              </details>
            </div>
            <div className="py-3 px-5 rounded-md border">
              <details className="group">
                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                  <span className='group-open:text-blue-600'> What is the difference from other analogues?</span>
                  <span className="transition group-open:fill-blue-600 group-open:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Our main difference from foreign analogues such as Patreon, BMC, Ko-fi is the preferences and language choice for both creators and fans. In order to receive payments from foreign counterparts, creators had to receive payments from platforms such as PayPal and Stripe, which are not active in Azerbaijan. And since fans have to pay an additional 18% VAT tax when they pay with foreign payment systems, the amount of payments is less. With Kofe.al, you can pay to your local bank card without additional commission.
                </p>
              </details>
            </div>
            <div className="py-3 px-5 rounded-md border">
              <details className="group">
                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                  <span className='group-open:text-blue-600'> Can I get donations from foreign followers?</span>
                  <span className="transition group-open:fill-blue-600 group-open:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Yes, we can also receive payments with stripe and PayPal and transfer them to your account. This service is currently being worked on and will be introduced after the commission rates are determined.
                </p>
              </details>
            </div>
            <div className="py-3 px-5 rounded-md border">
              <details className="group">
                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                  <span className='group-open:text-blue-600'> Whose is Kofe.al?</span>
                  <span className="transition group-open:fill-blue-600 group-open:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  The Kofe.al project is a US registered company BonPara Inc. — a project of BonPara LLC, the company’s representative office in Azerbaijan. Our team and company are graduates of the 500 Global Acceleration program and winners of many startup competitions.
                </p>
              </details>
            </div>
            <div className="py-3 px-5 rounded-md border">
              <details className="group">
                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                  <span className='group-open:text-blue-600'> What is your benefit?</span>
                  <span className="transition group-open:fill-blue-600 group-open:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  As BonPara, our company works on various solutions for e-commerce, online payments and loyalty programs. Kofe.al is our first sub-project.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
      <section className='my-24 sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-gray-500 font-bold mb-10'>They talk about us</p>
          <div className='grid grid-cols-3 md:grid-cols-5 gap-4 w-full justify-between mx-auto items-center lg:justify-between'>
            <div className="col-span-1 md:col-span-1">
              <img className='w-24 md:w-32' src="https://kofe.al/storage/images/partners/brand-01.png" alt="" />
            </div>
            <div className="col-span-1 md:col-span-1 flex justify-center">
              <img className='w-24 md:w-32' src="https://kofe.al/storage/images/partners/brand-02.png" alt="" />
            </div>
            <div className="flex justify-end md:justify-center col-span-1 md:col-span-1">
              <img className='w-24 md:w-32' src="https://kofe.al/storage/images/partners/brand-05.png" alt="" />
            </div>
            <div className="col-span-1 md:col-span-1 flex justify-left md:justify-center">
              <img className='w-24 md:w-32' src="https://kofe.al/storage/images/partners/brand-03.png" alt="" />
            </div>
            <div className=" col-span-1 md:col-span-1 flex justify-center md:justify-end">
              <img className=' w-24 md:w-32' src="https://kofe.al/storage/images/partners/brand-06.png" alt="" />
            </div>
          </div>

        </div>
      </section>
      <section>
        <div className='bg-full relative'>
          <img className='w-full h-[350px]' src={myImage} alt="salam" />
          <div className='sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto'>
            <div className='relative  mx-auto -top-[230px] sm:-top-[260px] '>
              <h1 className='text-white font-bold pb-5 text-center text-2xl sm:text-4xl md:text-6xl relative'>Unique support platform for creative individuals.</h1>
              <div className='text-white flex md:my-5 mx-auto w-max gap-3 text-2xl font-bold'>
                <div>Creat 🎉</div>
                <div>Share 🚀</div>
                <div>Earn ☕</div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='px-5'>
        <ScrollToTop smooth style={{ backgroundColor: 'transparent', width: "max-content", padding: "0 6px", border: "1px dashed black", borderRadius: "100%" }} className="mx-auto" />
      </section>
    </main>
  )
}

export default HomePage
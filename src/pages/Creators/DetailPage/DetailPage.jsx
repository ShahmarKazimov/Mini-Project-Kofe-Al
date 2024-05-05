import React from 'react';
import { useParams } from 'react-router-dom';
import { FiUsers } from "react-icons/fi";
import { useState } from 'react';
import { LuBook } from "react-icons/lu";
import { TiStarburst } from "react-icons/ti";



const DetailPage = ({ creators }) => {
  const { id } = useParams();
  const selectedCreator = creators.find(creator => creator.id === parseInt(id));

  if (!selectedCreator) {
    return <div>Kullanıcı bulunamadı.</div>;
  }

  const [coffeeCount, setCoffeeCount] = useState(1);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [openTab, setOpenTab] = useState(1);
  const activeClasses = 'underline underline-offset-[12px] text-blue-700';
  const inactiveClasses = 'hover:text-blue-700';

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className='relative my-36 sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1310px] lg:container px-5 mx-auto'>
      <section>
        <div className='creators-background -z-10 h-[350px] top-0 left-0 right-0'></div>
        <div className='relative -top-40 gap-x-5 flex justify-start items-center mx-10'>
          <div className='relative'>
            <img className="mx-auto border-[7px] border-[#E5E2EE] object-center object-cover rounded-full w-32 h-32 cursor-pointer" src={selectedCreator.image} alt="photo" />
          </div>
          <div className="relative h-full flex gap-y-2 flex-col mx-1">
            <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold cursor-pointer">{selectedCreator.name}</p>
            <p className="text-[13px] sm:text-[16px] md:text-2xl text-white font-bold cursor-pointer">{selectedCreator.title}</p>
            <p className="text-[12px] sm:text-[15px]  md:text-lg flex items-center gap-2 text-white cursor-pointer"><span><FiUsers /></span>{selectedCreator.detail}</p>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div>
            <div className="col-lg-4  border-[3px] rounded-lg p-3 border-purple-400">
              <div className="course-sidebar sticky-top rbt-shadow-box rbt-gradient-border mb--40">
                <div className="inner">
                  <div className="content-item-content donation_settings">
                    <form onSubmit={handleSubmit} className="p-4">
                      <input type="hidden" name="_token" value="GvCGODUEPLXM2Z0F1nfbw9YP2FLqhBRmSbXPRfn8" />
                      <input type="hidden" name="user_id" value="3146" />

                      <div className="flex flex-wrap items-center justify-between mb-5">
                        <div className="w-full md:w-auto mb-3 md:mb-0">
                          <span className="text-xl text-gray-500 font-bold">Buy kofe for {selectedCreator.name}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mb-5 ">
                        <ul className="flex justify-between w-full mx-8 items-center">
                          <li>
                            <div className="coffee-alt-emoji text-xl" style={{ width: '35px' }}>
                              <img src="https://kofe.al/storage/images/icons_for_donations/coffee.svg" width="30" className="" alt="Coffee" />
                            </div>
                          </li>
                          <li>
                            <div className="text-xl">X</div>
                          </li>
                          <li><button type="button" className="count_coffee border px-4 py-2 rounded-3xl text-white bg-blue-500" onClick={() => setCoffeeCount(1)}> 1 </button></li>
                          <li><button type="button" className="count_coffee px-4 py-2 rounded-3xl border-2" onClick={() => setCoffeeCount(3)}> 3 </button></li>
                          <li><button type="button" className="count_coffee px-4 py-2 rounded-3xl border-2" onClick={() => setCoffeeCount(5)}> 5 </button></li>
                          <li><input className="w-12 text-center border py-2 rounded-sm" type="text" name="coffee_count" value={coffeeCount} onChange={(e) => setCoffeeCount(e.target.value)} placeholder="10" /></li>
                        </ul>
                      </div>

                      <div className="mb-5">
                        <input type="email" className="w-full p-2 border border-gray-300 rounded" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                      </div>

                      <div className="mb-3">
                        <textarea className="w-full p-2 border border-gray-300 rounded" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message..." />
                      </div>

                      <div className="mb-5">
                        <div className="flex items-center">
                          <input type="checkbox" className="form-check-input" checked={isPrivate} onChange={() => setIsPrivate(!isPrivate)} id="flexSwitchCheckDefault" />
                          <label className="ml-2"> Make this message private</label>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="add-to-card-button mb-5">
                          <button type="submit" className="gap-5 creators-background text-white font-bold w-full py-5 rounded-lg btn btn-gradient inline-flex items-center justify-center">
                            <span id="checkout-payment">2.00 AZN</span>
                            <span className="btn-text">Buy kofe</span>
                            <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                          </button>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="form-check text-center flex justify-center items-center gap-2">
                          <input type="checkbox" className="form-check-input" />
                          <label htmlFor="termsForDonation">
                            I accept the <a target="_blank" href="https://kofe.al/en/p/terms">rules</a>
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div>
              <ul className="flex border py-6">
                <li onClick={() => setOpenTab(1)} className={`-mb-px mr-1 ${openTab === 1 && '-mb-px'}`}>
                  <button className={`inline-block py-2 px-4 font-bold ${openTab === 1 ? activeClasses : inactiveClasses}`}>
                    About Me
                  </button>
                </li>
                <li onClick={() => setOpenTab(2)} className="mr-1">
                  <button className={`inline-block py-2 px-4 font-bold ${openTab === 2 ? activeClasses : inactiveClasses}`}>
                    Blog
                  </button>
                </li>
              </ul>
              <div className="w-full my-14 rounded-lg">
                <div>
                  <div style={{ display: openTab === 1 ? 'block' : 'none' }} className="p-4 border rounded-b">
                    <div className='flex flex-col  md:flex-row justify-between'>
                      <div className='flex items-center gap-2'>
                        <h1 className='font-bold sm:text-lg py-5'>{selectedCreator.name} </h1>
                        <div className='text-green-500 text-xl'>
                          <TiStarburst />
                        </div>
                      </div>
                      <div className='flex gap md:gap-5 items-center'>
                        <div className='flex items-center sm:gap-5'>
                          <img className="w-10 border p-2 rounded-[50%]" src="https://kofe.al/storage/images/icons_for_donations/coffee.svg" />
                          <p className='text-sm sm:text-md'>20 kofe</p>
                        </div>
                        <div className='flex items-center sm:gap-5 '>
                          <span className='border p-3 rounded-[50%]'><FiUsers /></span>
                          <p className='text-sm sm:text-md'>5 Supporter</p>
                        </div>
                        <div className='flex items-center sm:gap-5'>
                          <span className='border p-3 rounded-[50%]'><LuBook /></span>
                          <p className='text-sm sm:text-md'>0 Blog</p>
                        </div>
                      </div>
                    </div>
                    <p className='text-gray-500 text-lg '>{selectedCreator.title}</p>
                    <p className='text-gray-500 text-lg my-5'>@Oz uzerimde ishleyirem.</p>
                    <div>
                      <div className='flex  gap-3 items-center '>
                        {selectedCreator.socialTiktok && <img className="w-5  font-semibold cursor-pointer" src={selectedCreator.socialTiktok} alt="Tiktok Icon" />}
                        {selectedCreator.socialInstagram && <img className="w-5  font-semibold cursor-pointer" src={selectedCreator.socialInstagram} alt="Instagram Icon" />}
                        {selectedCreator.socialYoutube && <img className="w-5  font-semibold cursor-pointer" src={selectedCreator.socialYoutube} alt="YouTube Icon" />}
                        <img className="cursor-pointer w-4 h-4  font-semibold" src={selectedCreator.socialGlobe} />
                      </div>
                    </div>
                  </div>
                  <div className='p-3 my-8 border hidden md:block'>
                    <div className="rbt-inner-onepage-navigation sticky-top share_buttons" style={{ marginTop: '10px' }}>
                      <div className=" flex w-full justify-between items-center sharethis-inline-share-buttons st-center st-lang-tr st-has-labels  st-inline-share-buttons st-animated" id="st-1">
                        <div className="cursor-pointer st-btn items-center st-first flex gap-3 border px-10 py-[7px]" data-network="facebook">
                          <img className='w-5' alt="facebook-white sharing button" src="https://platform-cdn.sharethis.com/img/facebook-white.svg" />
                          <span className="st-label">Paylaş</span>
                        </div>
                        <div className="cursor-pointer st-btn items-center flex gap-3 border px-10 py-1" data-network="messenger">
                          <img className='w-10' alt="messenger-white sharing button" src="https://platform-cdn.sharethis.com/img/messenger-white.svg" />
                          <span className="st-label">Paylaş</span>
                        </div>
                        <div className="cursor-pointer st-btn items-center flex gap-3 border px-10 py-1" data-network="whatsapp">
                          <img className='w-10' alt="whatsapp-white sharing button" src="https://platform-cdn.sharethis.com/img/whatsapp-white.svg" />
                          <span className="st-label">Paylaş</span>
                        </div>
                        <div className="border p-[15px] cursor-pointer st-btn items-center flex st-remove-label" data-network="twitter">
                          <img className='w-5' alt="twitter-white sharing button" src="https://platform-cdn.sharethis.com/img/twitter-white.svg" />
                        </div>
                        <div className="border p-[15px] cursor-pointer st-btn items-center flex st-remove-label" data-network="telegram">
                          <img className='w-5' alt="telegram-white sharing button" src="https://platform-cdn.sharethis.com/img/telegram-white.svg" />
                        </div>
                        <div className="border p-[15px] cursor-pointer st-btn items-center flex st-remove-label" data-network="linkedin">
                          <img className='w-5' alt="linkedin-white sharing button" src="https://platform-cdn.sharethis.com/img/linkedin-white.svg" />
                        </div>
                        <div className="border p-[15px] cursor-pointer st-btn items-center flex st-remove-label" data-network="odnoklassniki">
                          <img className='w-3' alt="odnoklassniki-white sharing button" src="https://platform-cdn.sharethis.com/img/odnoklassniki-white.svg" />
                        </div>
                        <div className="border p-[15px] cursor-pointer st-btn items-center flex st-last st-remove-label" data-network="vk">
                          <img className='w-7' alt="vk-white sharing button" src="https://platform-cdn.sharethis.com/img/vk-white.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: openTab === 2 ? 'block' : 'none' }} className="p-4 border rounded-b">
                  <div className="alert alert-warning mt--10">
                    <span className="inline-block bg-yellow-500 text-white font-bold px-4 py-2 rounded">
                      Nothing found
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default DetailPage;

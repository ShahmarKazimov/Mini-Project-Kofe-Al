import React from 'react'
import "./Faq.css"
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";


const Faq = () => {
  return (
    <main className='my-32'>
      <div className='faq-background -z-10 h-[350px] absolute top-0 left-0 right-0'></div>
      <section className='shadow-xl sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1110px] lg:container  mx-auto'>
        <div className="max-w-screen-xl mx-auto bg-white min-h-sceen">
          <div className="flex flex-col items-center py-4">
            <p className="my-5 text-center lg:leading-[55px] text-2xl lg:text-[43px] font-bold mt-3 text-[#192335]">
              FAQ
            </p>
            <div className="font-normal relative flex items-center justify-center gap-1 bg w-max ">
              <Link className='text-gray-600 hover:text-blue-500 duration-200' to="/">Home</Link>
              <span className='relative top-[2px] text-[8px]'><FaChevronRight /></span>
              <h2 className='text-gray-500'>FAQ</h2>
            </div>
          </div>
          <div className="grid w-full md:px-10 px-10 lg:px-24 gap-y-5 mx-auto mt-8 pb-14">
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
    </main>
  )
}

export default Faq
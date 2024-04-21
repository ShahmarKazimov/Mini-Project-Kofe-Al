import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import "./Footer.scss"
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font ">
      <div className=" mb-24 justify-between gap-5 flex-col md:flex md:items-center lg:items-center  md:flex-row md:flex-nowrap flex-wrap">
        <div className="w-64 flex flex-col justify-between md:mx-0 mx-auto text-center md:text-left">
          <a href="/#" className="block w-full mb-5">
            <img
              src="https://kofe.al/assets/images/logo/logo.png?v=1.0"
              alt="logo"
              className="hidden dark:block"
            />
          </a>
          <p className="mt-2 text-md text-gray-500">We are always looking for talented and creative people. Don not hesitate to introduce yourself!</p>
          <div className="social-buttons flex justify-center md:justify-start">
            <a href="#" className="social-button social-button--facebook" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="#" className="social-button social-button--instagram" aria-label="LinkedIn">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="flex-grow md:flex-row flex md:justify-end  -mb-10 md:mt-0 mt-10 md:text-left text-center flex-col">
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font text-gray-900 text-xl mb-3 font-bold">Features</h2>
            <ul className="flex flex-col gap-3 list-none mb-10">
              <li>
                <a className="tag-a-footer hover:text-blue-700">Donations</a>
              </li>
              <li>
                <a className="tag-a-footer hover:text-blue-700">Membership</a>
              </li>
              <li>
                <a className="tag-a-footer hover:text-blue-700">Shop</a>
              </li>
              <li>
                <a className="tag-a-footer hover:text-blue-700">QR codes</a>
              </li>
              <li>
                <a className="tag-a-footer hover:text-blue-700">Integrations</a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font text-gray-900 text-xl font-bold mb-3">Integrations</h2>
            <ul className="list-none mb-10 flex flex-col gap-3">
              <li>
                <a className="tag-a-footer hover:text-blue-700">Facebook</a>
              </li>
              <li>
                <a className="tag-a-footer hover:text-blue-700">Instagram</a>
              </li>
              <li>
                <a className="tag-a-footer hover:text-blue-700">TikTok</a>
              </li>
              <li>
                <a className="tag-a-footer hover:text-blue-700">Telegram</a>
              </li>
              <li>
                <a className="tag-a-footer hover:text-blue-700">Wordpress</a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font font-bold text-gray-900 text-xl mb-3">Kofeal</h2>
            <ul className="list-none mb-10 flex flex-col gap-3">
              <li>
                <a className="tag-a-footer hover:text-blue-700">About us</a>
              </li>
              <li>
                <a className="tag-a-footer hover:text-blue-700">Terms</a>
              </li>
              <li>
                <a className="tag-a-footer hover:text-blue-700">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-4 flex justify-center md:justify-start">
        <p className="text-gray-500 text-sm text-center sm:text-left">Copyright © 2024 a <span className="text-black font-medium">BONPARA</span> project. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
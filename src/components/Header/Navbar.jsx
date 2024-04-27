import React, { useState, useEffect } from "react";
import "./Navbar.css"
import "./Navbar.scss"
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 250 || scrollY < 50) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`flex w-full rounded-lg justify-center items-center bg-[#ffffff] dark:bg-dark relative z-10`}>
            <div className={`sm:w-[561px] md:w-[761px] lg:w-[961px] xl:w-[1271px] fixed top-0 w-full rounded-lg justify-center border items-center bg-[#ffffff] dark:bg-dark  z-10 ${showHeader ? "" : "hidden-temporary"
                }`}>
                <div className="flex items-center justify-between ">
                    <div className="w-60 max-w-full">
                        <a href="/#" className="block w-full py-5">
                            <img
                                src="https://kofe.al/assets/images/logo/logo.png?v=1.0"
                                alt="logo"
                                className="hidden dark:block pl-5"
                            />
                        </a>
                    </div>
                    <div className="flex w-full items-center justify-between">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={` ${open && "navbarTogglerActive"
                                    } absolute px-5 right-0 top-1/2 block -translate-y-1/2 rounded-lg py-[6px] ring-primary lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-gray-400"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-gray-400"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-gray-400"></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`fixed backdrop-brightness-40 z-20 left-0 top-0 w-full max-w-[320px] bg-white lg:p-1 px-7 py-4 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                                    } `}
                            >
                                <ul className="block lg:flex lg:h-full h-[100vh] ">
                                    <div className="w-60 max-w-full lg:hidden">
                                        <a href="/#" className="block w-full py-5">
                                            <img
                                                src="https://kofe.al/assets/images/logo/logo.png?v=1.0"
                                                alt="logo"
                                                className="hidden dark:block"
                                            />
                                        </a>
                                    </div>
                                    <p className="text-gray-500 my-3 lg:hidden">Do what you love, gain support from your audience!</p>
                                    <div className="lg:hidden">
                                        <ListItem NavLink="/creators">Creator</ListItem>
                                    </div>
                                    <hr />
                                    <div className="lg:hidden">
                                        <ListItem NavLink="/blog">Blog</ListItem>
                                    </div>
                                    <hr />
                                    <div className="lg:hidden">
                                        <ListItem NavLink="/faq">FAQ</ListItem>
                                    </div>
                                    <hr />
                                    <div className="lg:hidden gap-1 justify-start sm:flex mb-7 mt-10">
                                        <a href="/" className="relative mr-1 px-[50px] py-[21px] font-medium button-first">
                                            <span>
                                                Sign in
                                            </span>
                                            <span className="left-7 absolute inline-block">Sign in</span>
                                        </a>
                                        <a href="/" className="relative border  px-[55px] py-[21px]  font-medium button-second">
                                            <span>
                                                Sign Up
                                            </span>
                                            <span className="left-7 absolute inline-block">Sign in</span>
                                        </a>
                                    </div>
                                    <p className="lg:hidden text-[13px] font-semibold text-gray-400 mb-4">FOLLOW US</p>
                                    <hr />
                                    <div className="lg:hidden social-buttons">
                                        <a href="#" className="social-button social-button--facebook" aria-label="Facebook">
                                            <FiFacebook />
                                        </a>
                                        <a href="#" className="social-button social-button--instagram" aria-label="LinkedIn">
                                            <FaInstagram />
                                        </a>
                                    </div>
                                </ul>
                            </nav>
                        </div>
                        <div className="list-none hidden lg:flex">
                            <ListItem NavLink="/creators">Creator</ListItem>
                            <ListItem NavLink="/blog">Blog</ListItem>
                            <ListItem NavLink="/faq">FAQ</ListItem>
                        </div>
                        <div className="hidden gap-1 mr-1 justify-end pr-16 sm:flex lg:pr-5">
                            <a href="/" className="relative px-[50px] py-[21px] font-medium button-first">
                                <span>
                                    Sign in
                                </span>
                                <span className="left-7 absolute inline-block">Sign in</span>
                            </a>
                            <a href="/" className="relative px-[55px] py-[21px]  font-medium button-second">
                                <span>
                                    Sign Up
                                </span>
                                <span className="left-7 absolute inline-block">Sign in</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
    return (
        <>
            <li>
                <a
                    href={NavLink}
                    className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-blue-600 duration-300 lg:ml-5 lg:inline-flex"
                >
                    {children}
                </a>
            </li>
        </>
    );
};

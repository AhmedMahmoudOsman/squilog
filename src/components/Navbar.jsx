import React, { useState } from 'react';
import '../style/navbar.css';
import { NavLink } from 'react-router-dom';
import { FaBars, FaFacebookF, FaInstagram, FaTwitter, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const navItem = [
        { path: "/", link: "Home" },
        { path: "/ourstory", link: "OurStory" },
        { path: "/membership", link: "Membership" },  
        { path: "/articles", link: "Articles" },
        { path: "/contact", link: "Contact" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`bg-Darkgrey text-whitex fixed top-0 left-0 right-0 w-full z-50 border-b-white`}>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center '>
                <a href="/" className='text-3xl font-bold text-Diamond'> <span className='logo font-logo'>squilog</span></a>

                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItem.map(({ path, link }) => (
                            <li className='text-whitex' key={path}>
                                <NavLink to={path}>{link}</NavLink>
                            </li>
                        ))
                    }
                </ul>

                <div className='text-whitex lg:flex gap-4 items-center hidden'>
                    {/* <a href="/" className='hover:text-Diamond'><FaFacebookF /></a>
                    <a href="/" className='hover:text-Diamond'><FaTwitter /></a>
                    <a href="/" className='hover:text-Diamond'><FaInstagram /></a> */}
                    <button className='bg-Dark text-white border border-Diamond-1 py-2 px-12 rounded font-bold'>Login</button>
                    <button className='bg-Diamond text-Dark py-2 px-12 rounded font-bold'>Sign Up</button>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {isMenuOpen ? <FaXmark className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
                    </button>
                </div>
            </nav>

            {/* menu items for mobile */}
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className='md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 text-center bg-Darkgrey'>
                    {
                        navItem.map(({ path, link }) => (
                            <li className='text-whitex' key={path}>
                                <NavLink  to={path} onClick={toggleMenu}
                                className={({ isActive, isPending }) =>
                                  isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                                >{link}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    );
};

export default Navbar;

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

<footer className="w-full py-5 sm:py-10 px-4 bg-maincolor border-t-2"> {/* Container */}
      <h2 className="sr-only">Footer</h2>
      <div className="flex flex-col-reverse sm:flex-row md:justify-between lg:justify-around">

        {/* :SITE NAME & SOCIAL NETWORKS */}
        <div className="relative mt-14 sm:mt-0 px-5 flex flex-col justify-center items-center text-gray-500">
          {/* ::Site name */}
          <h1 className="font-title text-4xl text-center font-semibold mt-auto font font-logo">Squilog</h1>
          {/* ::Social & copyright */}
          <div className="mt-auto flex flex-col items-center">
            {/* :::Social */}
            <span className="inline-flex mt-6 w-full justify-center md:justify-start md:w-auto">
              {/* Facebook */}
              <a href="#link" className="text-gray-200">
                <span className="sr-only">Facebook</span>
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Twitter</span>
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Instagram</span>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              {/* Linkedin */}
              <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Linkedin</span>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
            {/* :::Copyright */}
            <span className="py-4 text-xs">&copy;2024 Squilog All Rights Reserved.</span>
          </div>
        </div>

        {/* :NAVIGATION */}
        <div className="grid grid-cols-2 gap-5 text-gray-400">
          {/* ::Navigation */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4">
            <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-gray-500 font-bold tracking-wide">Menu</h3>
            <nav className="flex justify-around md:flex-col font-medium list-none">
              <li><Link to={'/'} href="#link" className="hover:text-gray-200">Home</Link></li>
              <li><Link to={"/articles"} href="#link" className="hover:text-gray-200">Category</Link></li>
              <li><Link to={"/membership"} href="#link" className="hover:text-gray-200">Membership</Link></li>
              <li><Link to={"/ourstory"} href="#link" className="hover:text-gray-200">OurStory</Link></li>
            </nav>
          </div>
          {/* ::Address */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide">Address</h3>
            <p className="md:w-48 text-center sm:text-left text-lg md:text-xl font-medium">Alexandria Egypt</p>
          </div>
          {/* ::Email */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide font-logo">Squilog</h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-gray-400 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="#email">squilog@mail.com</a>
            </p>
          </div>
          
        </div>

      </div>
    </footer>

    </>

  )
}

export default Footer
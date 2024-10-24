import React from 'react'
import {Link} from 'react-router-dom'

const MidSectionHome = () => {
  return (
    <>
  {/* component */}
  
  <div className="flex justify-center items-center">
    {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
    <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
      <div className="flex flex-col jusitfy-center items-center space-y-10">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">
           <Link to={'/articles'}>Browse By Category</Link>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
          <div className="relative group flex justify-center items-center h-full w-full">
            <img
              className="object-center object-cover h-full w-full rounded"
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="tech-image"
            />
            <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
              Tech
            </button>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
          </div>
          <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
            <div className="relative group flex justify-center items-center h-full w-full">
              <img
                className="object-center object-cover h-full w-full rounded"
                src="https://kernel-technology.com/wp-content/uploads/2024/01/What-is-Artiificial-IntelligenceAI-1.webp"
                alt="AI-image"
              />
              <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                AI
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
            <div className="relative group flex justify-center items-center h-full w-full">
              <img
                className="object-center object-cover h-full w-full rounded"
                src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="work-image"
              />
              <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                work
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
          </div>
          <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
            <img
              className="object-center object-cover h-full w-full rounded"
              src="https://images.pexels.com/photos/6627792/pexels-photo-6627792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Health-image"
            />
            <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
              Health
            </button>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
          </div>
          <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
            <img
              className="object-center object-cover h-full w-full hidden md:block"
              src="https://images.pexels.com/photos/6627792/pexels-photo-6627792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="health-image"
            />
            <img
              className="object-center object-cover h-full w-full md:hidden"
              src="https://images.pexels.com/photos/6627792/pexels-photo-6627792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Health"
            />
            <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
              Health
            </button>
            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
          </div>
        </div>
        <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
          <img
            className="object-center object-cover h-full w-full hidden md:block"
            src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
            alt="girl-image"
          />
          <img
            className="object-center object-cover h-full w-full sm:hidden"
            src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
            alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
          />
          <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
            Accessories
          </button>
          <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default MidSectionHome
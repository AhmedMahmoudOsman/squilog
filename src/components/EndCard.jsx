import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EndCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('https://json-server-pi-peach.vercel.app/blogs'); 
        const data = await response.json();
        setCards(data.slice(0, 3)); 
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <>
      {/*  Article cards */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold font-logo md:text-4xl md:leading-tight dark:text-white">

            {/* The Squilog */}
          </h2>
          <p className="mt-1 text-gray-600 dark:text-white font-bold text-4xl">
            Top Articles
          </p>
        </div>
        {/*  end grid */}

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-xl"
                  src={card.image}   
                  alt=""
                />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                  {card.title}  
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  {card.content} 
                </p>
              </div>
              <div className="mt-auto flex items-center gap-x-3">
                <img
                  className="size-8 rounded-full"
                  src={card.authorPic} 
                  alt=" "
                />
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                     {card.author} 
                  </h5>
                  <p className='publish-date text-gray-400'>{card.published_date}</p>
                </div>
                
              </div>
            </a>
          ))}
        </div>
        {/* end grid */}

        {/*  Read more button  */}
        <div className="mt-12 text-center">
          <Link
            to={`/Articles`}
            className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          >
            ReadMore
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
        {/*  btn end */}
      </div>
      {/* end grid cards   */}
    </>
  );
};

export default EndCard;

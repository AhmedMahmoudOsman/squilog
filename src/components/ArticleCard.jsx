import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article ,currentPage,selectedCategory,pageSize }) => {
  const filterblog = article
  .filter((article) => !selectedCategory || article.category === selectedCategory)
  .slice((currentPage -1)*pageSize , currentPage * pageSize);
  console.log(filterblog);
  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filterblog.map((article) => (
          <Link key={article.id}>
            {/* Card */}
            <a
              className='group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40'
              href='#'
            >
              <div className='aspect-w-16 aspect-h-11'>
                <img
                  className='w-full object-cover rounded-xl'
                  src={article.image}
                  alt='Blog Image'
                />
              </div>
              <div className='my-6'>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white'>
                    {article.title}
                </h3>
                <p className='mt-5 text-gray-600 dark:text-neutral-400'>
                  {article.content}
                </p>
              </div>
              <div className='mt-auto flex items-center gap-x-3'>
                <img
                  className='size-8 rounded-full'
                  src={article.authorPic}
                  alt='Avatar'
                />
                <div>
                  <h5 className='text-sm text-gray-800 dark:text-neutral-200'>
                    {article.author}
                  </h5>
                </div>
                <div>
                  <p className='text-sm text-gray-800 dark:text-neutral-200'>
                    {article.published_date}
                  </p>
                </div>
              </div>
            </a>
            {/* En
             */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;

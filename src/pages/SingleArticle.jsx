import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaUser ,FaClock } from 'react-icons/fa';

const SingleArticle = () => {

    // load article single
    const data = useLoaderData();
    console.log(data);
    
    // index data
    const {title,image,category,author,published_date,reading_time,content,authorPic} = data ||{};

    
  return (

    <div>
     

        {/* article details */}

        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 mt-40'>
            <div className='lg:w-3/4 max-auto'>

            <div>
                <img className='w-full object-cover max-auto rounded-xl' src={image} alt="article Image" />
            </div>
            <h2 className='text-3xl font-bold mt-8 mb-4 text-white cursor-pointer'>{title}</h2>
            <p className='mb-3 text-gray-500'> <img className='inline-flex items-center mr-2 rounded-full w-10' src={authorPic} alt="" /> {author} | {published_date}</p>
            <p className='mb-3 text-gray-500'><FaClock className='inline-flex items-center mr-2'/> {reading_time}</p>
            <p className='text-sm text-gray-500 mb-6'>{content}</p>

            <div className='text-xl text-white mb-6'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aspernatur nobis maiores, nemo perferendis, veniam assumenda deleniti error debitis ad beatae quas quam! Facere exercitationem quia porro ullam enim ea!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aspernatur nobis maiores, nemo perferendis, veniam assumenda deleniti error debitis ad beatae quas quam! Facere exercitationem quia porro ullam enim ea!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aspernatur nobis maiores, nemo perferendis, veniam assumenda deleniti error debitis ad beatae quas quam! Facere exercitationem quia porro ullam enim ea!</p><br />
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aspernatur nobis maiores, nemo perferendis, veniam assumenda deleniti error debitis ad beatae quas quam! Facere exercitationem quia porro ullam enim ea!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aspernatur nobis maiores, nemo perferendis, veniam assumenda deleniti error debitis ad beatae quas quam! Facere exercitationem quia porro ullam enim ea!</p><br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aspernatur nobis maiores, nemo perferendis, veniam assumenda deleniti error debitis ad beatae quas quam! Facere exercitationem quia porro ullam enim ea!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aspernatur nobis maiores, nemo perferendis, veniam assumenda deleniti error debitis ad beatae quas quam! Facere exercitationem quia porro ullam enim ea!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aspernatur nobis maiores, nemo perferendis, veniam assumenda deleniti error debitis ad beatae quas quam! Facere exercitationem quia porro ullam enim ea!</p><br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aspernatur nobis maiores, nemo perferendis, veniam assumenda deleniti error debitis ad beatae quas quam! Facere exercitationem quia porro ullam enim ea!</p>

            </div>

            </div>

        </div>

    </div>

   


  )
}

export default SingleArticle
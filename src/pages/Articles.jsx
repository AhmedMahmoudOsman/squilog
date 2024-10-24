import React from 'react'
import ArticlePage from '../components/ArticlePage'
import Hero from '../components/Hero'
import { useEffect } from 'react'

const Articles = () => {

  useEffect(()=>{
    window.scrollTo(0,0);

  },[])
  
  return (

    <>
  

      {/* All Article Container */}
      <div className='max-w-7xl mx-auto' >
        <Hero/>
        <ArticlePage/>

      </div>
  
</>

  )
}

export default Articles
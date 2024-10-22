import React from 'react'
import'../style/ourstory.css'
import { useNavigate } from 'react-router-dom';

const OurStory = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
      navigate('/membership');
  };


  return (
    <div>
        <div className='our-story-head'>
          <div className='our-story-content'>
            <p className='text-white'>Every idea needs a <span className='font-logo text-white'>Squilog.</span></p>
          </div>
        </div>

        {/* Story Content */}
        <div className='our-story-content-main'>
            <div className='our-story-content-main-left'>
              <div className='our-story-main-content'>
                <p className='text-white'>
                The best ideas can change who we are. squilog is the place where these ideas crystallize and spark powerful conversations. We are an open platform where more than many readers come to find insightful and dynamic ideas. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our goal is to spread these ideas and deepen understanding of the world.
                </p>
                <br />
                <p className='text-white'>
                We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
                </p>
              </div>
              </div>
              <div className='anime'>
              <iframe title='anime' src="https://player.vimeo.com/video/467834328?api=1&amp;background=1&amp;mute=1&amp;loop=1" width="100%" height="100%" positioning="relative" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
              </div>
            
            
        </div>
        {/* Membership */}
            <div className='membership'>
              <div className='memership-content-left'>
                <iframe title='cube' src="https://player.vimeo.com/video/448735219?api=1&amp;background=1&amp;mute=1&amp;loop=1" width="100%" height="100%" positioning="relative" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen="" />
              </div>
              <div className='membership-content-right'>
                <div className='membership-content-right-content'>
                  <h2 className='text-white'>Read, Write</h2>
                  <br />
                  <h2  className='text-white'>and expand</h2>
                  <br />
                  <h2 className='text-white'>your world.</h2>
                  <button onClick={handleButtonClick} to={'/membership'} className='group relative inline-flex items-center px-5 py-2.5 rounded shadow-lg outline-none bg-grey-400 text-white font-medium transition-all duration-200 ease-out hover:text-white hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none'>Get Started
                        {/* span::before Link*/}
                        <span className="absolute h-0 w-0.5 right-0 top-0 bg-buttoncolor transition-all duration-500 ease-out group-hover:h-full" aria-hidden="true"/>
                        <span className="absolute left-0 bottom-0 bg-buttoncolor transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full" aria-hidden="true"/>        
                        
                        {/* span::after */}
                            <span className="absolute left-0 bottom-0 bg-buttoncolor transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full" aria-hidden="true"/>
                            <span className="absolute w-0 h-0.5 right-0 top-0 bg-buttoncolor transition-all duration-500 ease-out group-hover:w-full" aria-hidden="true"/>
                        
                    </button>
                </div>
              </div>
            </div>
    </div>
  )
}

export default OurStory
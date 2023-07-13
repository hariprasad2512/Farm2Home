import React from 'react'
import bgvideo from '../media/pexels-kindel-media-7456952 (2160p).mp4'
import NBar from './NBar'; 
const Home = () => {
  return (
    <div className='landingpage'>
      {/* <SignIn />
      <SignUp /> */}
      <video src={bgvideo} autoPlay muted loop class="video-bg" />
      <div className='bg-overlay'></div>

      <NBar />
    </div>
  )
}

export default Home
import React from 'react'
import bgvideo from '../media/pexels-kindel-media-7456952 (2160p).mp4'
import NBar from './NBar'; 


const Home = () => {
  return (
    
    <div className="home">
       <div className='landingpage'>
      <video src={bgvideo} autoPlay muted loop class="video-bg" />
      <div className='bg-overlay'></div>

      <NBar />
    </div>

     <div className="welcomeText">
      <h1>Farm2Home</h1>
      <p><b>Welcome to Farm2Home, the ultimate destination for fresh and organic produce! Our innovative e-commerce platform connects farmers directly with customers, eliminating unnecessary middlemen and ensuring fair prices for both parties. Experience the joy of farm-fresh products delivered right to your doorstep, supporting local agriculture and promoting a sustainable future. Join us on this farm-to-table journey and taste the difference today!</b></p>
      </div>

     </div>
    
    
   
  )
}

export default Home
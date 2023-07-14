import React from 'react'
import {Link} from 'react-router-dom'
import './AboutUs.css'
import harry from './harry.jpeg'
import NBar from './NBar'


function AboutUs() {
  return (
    <div>
      <NBar/>
        <div class="about-section" style={{backgroundColor: 'black'}}>
  
  <h2><b><u> Team Reactivators</u></b></h2>
  <h4 style={{color:'white'}}> <b>We have built this web project Farm2Home where farmers can directly send their farm produce to customers without involvelment of any third person in the process.</b></h4>
</div>

<h2 style={{marginTop: '30px', textAlign: 'center'}}>Our Team</h2>
<div class="row">


 <div class="col">
        <div class="card shadow-sm">
       
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c" />
      <image href={"harry"} width={"100%"}/>
    
          <div class="card-body">
          <h2 class="card-text">Hariprasad Anuganti</h2>
          <p>web developer</p>
          <p>Student at Indian Institute of Information Technology</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary"><li class="nav-item">
              <Link to='https://www.linkedin.com/in/hariprasad-anuganti-58441124b' class="nav-link active">Contact Me</Link>
            </li></button>
           

              </div>
                          </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
        
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c" />
      <image href="./media/harry.jpeg" width={"100%"}/>
   
          <div class="card-body">
          <h2 class="card-text">Rohit Nunela <pre> </pre></h2>
          <p>web developer</p>
          <p>Student at Indian Institute of Information Technology</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary"><li class="nav-item">
              <Link to='https://www.linkedin.com/in/rohit-nunela-053ba2224/' class="nav-link active">Contact Me</Link>
            </li></button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="col">
        <div class="card shadow-sm">
        
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c" />
      <image href="./media/harry.jpeg" width={"100%"}/>
   
          <div class="card-body">
          <h2 class="card-text">Devada Kumara Swamy</h2>
          <p>web developer</p>
          <p>Student at Indian Institute of Information Technology</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary"><li class="nav-item">
              <Link to='https://www.linkedin.com/in/kumara-swamy-devada-b695a8252/' class="nav-link active">Contact Me</Link>
            </li></button>
                
              </div>
                          </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
        
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c" />
      <image href="https://drive.google.com/file/d/1eBjW1LlzvMF1TWNArQ1Dd8s_cWNdHVfa/view?usp=sharing" width={"100%"}/>
    
          <div class="card-body">
          <h2 class="card-text">Hridayesh Nadella</h2>
          <p>web developer</p>
          <p>Student at Indian Institute of Information Technology</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary"><li class="nav-item">
              <Link to='https://www.linkedin.com/in/hridayesh-nadella-b081a8226/' class="nav-link active">Contact Me</Link>
            </li></button>
                
              </div>
                          </div>
          </div>
        </div>
      </div>
  </div>
</div>
    
  )
}

export default AboutUs
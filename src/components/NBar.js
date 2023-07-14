import React from 'react'
import {Link} from 'react-router-dom'
const NBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-blue fixed-top" aria-label="Thirteenth navbar example">
      <div class="container-fluid">
        <a class="navbar-brand col-lg-3 me-0" href="#"><h2 ><span class="text-success">Farm</span>2<span class="text-secondary">Home</span></h2></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/Home">Home</a>
            </li>
            <li class="nav-item">
              <Link to='/SignIn' class="nav-link active">Login</Link>
            </li>
            <li class="nav-item">
              
              <Link to='/SignUp' class="nav-link active">SignUp</Link>
            </li>

            <li class="nav-item">
              <Link to={'/Products'} class="nav-link active">Products</Link>
            </li>

            <li class="nav-item">
              <Link to='/AboutUs' class="nav-link active">About</Link>
            </li>

            <li class="nav-item">
              <Link to='/Contact' class="nav-link active">Contact</Link>
            </li>
            
          </ul>
          <div class="d-lg-flex col-lg-6 justify-content-lg-end">
            <button class="btn btn-primary"><Link to='/Products' class="nav-link active">Explore</Link></button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NBar
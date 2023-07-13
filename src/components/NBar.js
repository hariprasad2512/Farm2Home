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
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#">Login</a> */}
              <Link to='/SignIn' class="nav-link">Login</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#">SignUp</a> */}
              <Link to='/SignUp' class="nav-link">SignUp</Link>
            </li>
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
          </ul>
          <div class="d-lg-flex col-lg-6 justify-content-lg-end">
            <button class="btn btn-primary">Button</button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NBar
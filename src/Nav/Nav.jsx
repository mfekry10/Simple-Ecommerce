import React from 'react'
import './Nav.module.css'

const Nav = () => {
  return (
    <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Fashion</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>   
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>  
      </ul>

      <ul className="navbar-nav">
        <li className="nav-item">
          <a  className="nav-link d-flex justify-content-center align-items-center" href='#' style={{width:50, height:50, borderRadius:"50%",backgroundColor:'#ececec'}}><i className="fa-regular fa-user"></i></a>
        </li>
      </ul>

     
      
      
      
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Nav
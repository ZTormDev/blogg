import React from 'react'
import { Link } from 'react-router-dom'

import "./styles/navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-container">
          <div className="logo">
            ZETA-DEV
          </div>
          <div className="links">
            <Link to={'/'}>
              <p>Home</p>
            </Link>
            <Link to={'/$cat=latest'}>
              <p>Latest</p>
            </Link>
            <Link to={'/$cat=projects'}>
              <p>Projects</p>
            </Link>
            
            <Link to={'/about'}>
              <p>About</p>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar
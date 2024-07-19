import React from 'react'
import { Link } from 'react-router-dom'

import "./styles/footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
          <div className="logo">
            ZETA-DEV
          </div>
          <div className="links">
            <Link to={'https://discord.com/'} target='_blank' >Discord</Link>
            <Link to={'https://github.com/'} target='_blank' >GitHub</Link>
            <Link to={'https://x.com/'} target='_blank' >Twitter</Link>
            <Link to={'https://www.youtube.com/'} target='_blank' >YouTube</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer
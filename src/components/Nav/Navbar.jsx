import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';
const Navbar = () => {
 return (
  <nav>
   <div className="logo"><Link to='/'>Justin</Link></div>
   <div className="nav-links">
    <ul>
     <Link to='/'>Projects</Link>
     <Link to='/about'>About</Link>
     <Link to='/contact'>Contact</Link>
     <a href='https://docs.google.com/document/d/1AGPHOLiB3M8XwYzwolbal55d3XLsWpNo67Sf6_J55s8/edit?usp=sharing' target='_blank' rel="noreferrer" className='resume-btn'> Resume </a>
    </ul>
   </div>
  </nav>
 )
}

export default Navbar
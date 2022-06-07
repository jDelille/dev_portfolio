import React from 'react'
import Navbar from '../components/Nav/Navbar';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import './Pages.scss';

const Home = () => {
 return (
  <div className='page'>
   <Navbar />
   <div className="header">
    <h1> Hey, I'm Justin. I'm a web developer with a passion for creating projects and solving problems with code. </h1>
    <Link to='/contact'> Let's get in touch <span><BsArrowRight /></span> </Link>
   </div>
   <div className="body">
    <h1> Projects </h1>
    <div className="show-projects">
     <Link to='/vibrofret' className="box">
      <div className="img-wrapper">
       <img className="img-1" src="../assets/vibro-screenshot-2.png" alt="" />
      </div>
      <h1> Vibrofret <span><BsArrowRight /></span> </h1>
     </Link>
     <Link to='/nba_pickem' className="box">
      <div className="img-wrapper">
       <img className="img-2" src="../assets/nba-screenshot-4.png" alt="" />
      </div>
      <h1> NBA Pickem <span><BsArrowRight /></span> </h1>
     </Link>
     <Link to='/does_it_sell' className="box">
      <div className="img-wrapper">
       <img className="img-2" src="../assets/doesitsell-screenshot-2.png" alt="" />
      </div>
      <h1> Does It Sell (Web Scraper) <span><BsArrowRight /></span> </h1>
     </Link>
    </div>
    <footer>
     <h1> Justin Delille </h1>
     <div className="social-icons">
      <FaGithubSquare />
      <FaLinkedin />
      <IoMdMail />
     </div>
    </footer>
   </div>
  </div>
 )
}

export default Home
import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import { BsArrowRight } from 'react-icons/bs'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import './Project.scss'

const NBA = () => {
 return (
  <div className='project-page'>
   <header className='nba-header'>
    <Navbar />
   </header>
   <div className="overlay">
    <div className="title">
     NBA Pickem
    </div>
   </div>
   <div className="overview">
    <div className="about">
     <p> Project Overview </p>
     <h1> NBA Pickem </h1>
     <h2> An nba pickem pool where users can sign up and make daily nba picks.</h2>
     <div className="btn-container">
      <a href="https://www.nbapickem.org/" target='_blank' rel="noreferrer"> Visit site </a>
      <a href="https://github.com/jDelille/NBA-pickem" target='_blank' rel="noreferrer"> View Github repo</a>
     </div>
    </div>
    <div className="features">
     <div className="feature-box">
      <div className="header">
       Make daily picks
      </div>
      <div className="body">
       Make picks for the upcomming NBA games. Choose one team from each matchup to successfully submit your picks for that day.
      </div>
      <div className="footer">
       <p>View the api <span><BsArrowRight /></span></p>
      </div>
     </div>
     <div className="feature-box">
      <div className="header">
       Compete against 20+ players
      </div>
      <div className="body">
       Once you have successfully submitted your picks, you can view the pool and compare your picks against the others. Once the games start, your score will increase based on the number of correct picks you have.
      </div>
     </div>
     <div className="feature-box">
      <div className="header">
       Current data provided by APIs
      </div>
      <div className="body">
       The data such as the game schedule, stats, expert picks, and highlights/news are provided by the ESPN NBA API. The pool is populated with data from the NFLpickwatch api.
      </div>
     </div>
    </div>
    <div className="build">
     <h1> How it was made </h1>
     <p> NBA Pickem was developed using <span className='keywords'>JavaScript, React, Redux, Sass, API's in the front-end, and MongoDB, JWT, Brypt, Axios, Node, and Express are used in the back-end</span>. Using data from the <a href='https://gist.github.com/nntrn/ee26cb2a0716de0947a0a4e9a157bc1c#news' target='_blank' rel="noreferrer">ESPN NBA API</a>, users are able to make their picks, and once submitted, the picks will be stored in the Mongo database. After the picks have stored successfully in the database, they will be rendered in the pool where users can view their picks and compare them with others. Users are able to edit their picks up until the game has started.  </p>
    </div>
    <div className="controls">
     <h1> Features </h1>
     <ul>
      <li> - Register for a free account.</li>
      <li> - Make daily NBA picks.</li>
      <li> - Compete in the pool against 20+ other players.</li>
      <li> - View highlights / news clips.</li>
      <li> - View the daily top expert pick. </li>
      <li> - Ability to edit and delete picks.</li>
      <li> - Responsive on all screen sizes.</li>

     </ul>
    </div>
    <div className="challenges">
     <h1> Challenges I ran into </h1>
     <p> The first major challenge I ran into was how to have the picks pool as engaging as possible <span> The solution I came up with was to create an array of strings using the Array.from() method. I then mapped through this array and returned a div for each string. Inside each of these string divs, I created another array for the frets using Array.from(). By doing it this way, I am able to control the parameters for both the strings and frets, allowing it to update everytime the parameter changes and making it dynamic. </span>    </p>
    </div>

    <div className="site-imgs">
     <h1> Site shots</h1>

     <div className="img">
      <img src="../assets/nba-screenshot-1.png" alt="" />
     </div>
     <div className="img">
      <img src="../assets/nba-screenshot-2.png" alt="" />
     </div>
     <div className="img">
      <img src="../assets/nba-screenshot-3.png" alt="" />
     </div>
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

export default NBA
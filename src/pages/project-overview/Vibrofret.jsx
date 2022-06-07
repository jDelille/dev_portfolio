import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import { BsArrowRight } from 'react-icons/bs'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import './Project.scss'
const Vibrofret = () => {
 return (
  <div className='project-page'>
   <header>
    <Navbar />
   </header>
   <div className="overlay">
    <div className="title">
     Vibrofret
    </div>
   </div>
   <div className="overview">
    <div className="about">
     <p> Project Overview </p>
     <h1> Vibrofret </h1>
     <h2> Interactive guitar fretboard created to make learning scales and shapes down the fretboard easier.</h2>
     <div className="btn-container">
      <a href="https://vibrofret.netlify.app/" target='_blank' rel="noreferrer"> Visit site </a>
      <a href="https://github.com/jDelille/guitar-app" target='_blank' rel="noreferrer"> View Github repo</a>
     </div>
    </div>
    <div className="features">
     <div className="feature-box">
      <div className="header">
       Choose from 20+ scales
      </div>
      <div className="body">
       The user has many different options for what they want to view on the fretboard. They can choose to view scales, arpeggios, or modes for any key. All the data on the site is provided by myself, and it is constantly growing in size. In the future there will be many more options to choose from.
      </div>
      <div className="footer">
       <p>View the api <span><BsArrowRight /></span></p>
      </div>
     </div>
     <div className="feature-box">
      <div className="header">
       Customize the fretboard
      </div>
      <div className="body">
       Users have a lot of control over the fretboard like changing the number of frets shown from 1-24 frets,
       flipping the fretboard for left-handed players, reversing the order of strings, highlight root and triad notes, and change the positions shown.
      </div>
     </div>
     <div className="feature-box">
      <div className="header">
       View the site on any device
      </div>
      <div className="body">
       Since most guitar players might not want to sit infront of the computer while practicing, it was important to make this site responsive on all devices. That way, users can learn from anywhere by using their phone or tablet.
      </div>
     </div>
    </div>
    <div className="build">
     <h1> How it was made </h1>
     <p> Vibrofret was developed using <span className='keywords'>JavaScript, React, Redux, Sass, and Tone.js</span>. The fretboard is created using JavaScript logic which allows it to be dynamic and makes it very easy for the user to customize the way it looks. The data such as scales, arpeggios, and modes are provided by an API I created. This API is available for other developers to use. The styling on the site is all done with custom Sass. To make this website responsive on all sizes, I used Variables and At-Rules such as <a href="https://sass-lang.com/documentation/at-rules/mixin" target='_blank' rel="noreferrer">@mixin</a> and <a href="https://sass-lang.com/documentation/at-rules/mixin" target='_blank' rel="noreferrer">@include</a> to keep my code as clean as possible.</p>
    </div>
    <div className="controls">
     <h1> Features </h1>
     <ul>
      <li> - Change the number of frets shown.</li>
      <li> - Choose from over 20 scales.</li>
      <li> - Change the tuning of the guitar.</li>
      <li> - Flip the fretboard for left-handed players.</li>
      <li> - Flip the order of strings. </li>
      <li> - Show the root note for each scale.</li>
      <li> - View different scale positions.</li>
      <li> - Responsive on all screen sizes.</li>

     </ul>
    </div>
    <div className="challenges">
     <h1> Challenges I ran into </h1>
     <p> The first major challenge I ran into was where to get all the data from. This site requires a great deal of data for the scales, arpeggios, and modes. I needed to have all the notes in the scale as well as root and triad notes. There is no API out there that would satisfy all the data I needed. <span> The solution I came up with was to create my own json files that stored all the data I needed. While this was time consuming, it did allow me to successfully create all the data I needed. Also, I will be publishing this json data as an API for other developers to use for free.</span></p>

     <p> The second major challenge I ran into was how to go about creating the fretboard in a way where the user can customize it to their liking. I wanted to keep the fretboard code as clean as possible and knew I couldn't just use HTML and CSS or else this would require hundreds of lines of code. <span> The solution I came up with was to create the fretboard dynamically using JavaScript. This allows the fretboard to change length whenever the user wants to edit the fretboard size. By creating the fretboard dynamically, I kept the lines of code to create the fretboard to under 20!</span></p>
    </div>
    <div className="site-imgs">
     <h1> Site shots</h1>
     <div className="img">
      <img src="../assets/vibro-screenshot-1.png" alt="" />
     </div>
     <div className="img">
      <img src="../assets/vibro-screenshot-2.png" alt="" />
     </div>
     <div className="img">
      <img src="../assets/vibro-screenshot-3.png" alt="" />
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
  </div >
 )
}

export default Vibrofret
import React from 'react'
import Navbar from '../components/Nav/Navbar';
import { Link } from 'react-router-dom';
import './Pages.scss';

const About = () => {
 return (
  <div className='page'>
   <Navbar />
   <div className="about-body">
    <div className="left">
     <p> Justin Delille </p>
     <h1> Web Developer with a passion for innovation</h1>
     <h2> Passionate web developer who loves combining design and front-end skills, creating projects, and a great team player who enjoys collaboration. Extremely diligent, lifetime learner, and an enthusiastic about creating things on the web. </h2>
    </div>
    <div className="right">
     <p> Skills </p>
     <div className="logo-container">
      <img src="../logos/logo_js.svg" alt="" />
      <img src="../logos/logo_typescript.png" alt="" />
      <img src="../logos/logo_react.svg" alt="" />
      <img src="../logos/logo_redux.svg.svg" alt="" />
      <img src="../logos/logo_sass.svg.png" alt="" />
      <img src="../logos/apis.png" alt="" />
      <img src="../logos/logo_mongo.svg" alt="" />
      <img src="../logos/logo_firebase.svg.png" alt="" />
      <img src="../logos/logo_node.png" alt="" />
     </div>

    </div>

   </div>
   <div className="education">
    <h1>Education</h1>
    <p> Arizona State University - Applied Computing</p>
    <p> DevMountain - Full Stack Web Development Bootcamp (remote)</p>
   </div>
  </div>
 )
}

export default About
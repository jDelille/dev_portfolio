import React, { useState } from 'react'
import Navbar from '../components/Nav/Navbar';
import { Link } from 'react-router-dom';
import './Pages.scss';
import Map from './Map/Map';
import Modal from './Modal/Modal';

const Contact = () => {

 const [toggleModal, setToggleModal] = useState(false)


 return (
  <div className='page'>
   <Navbar />
   <div className="contact-body">
    <div className="top">
     <h1> Let's Get In Touch</h1>
     <p> I am currently looking for a role as a web developer. If you want to chat or schedule an interview with me, feel free to contact me either on Linkedin or via the contact form on this page. Thank you. </p>
     {/* toggle contact form modal  */}
     <button onClick={() => setToggleModal(true)}> Send me a message </button>
     <div className="info">
      <div className="info-box">
       <h1> Email </h1>
       <p> dev.jdelille@gmail.com</p>
      </div>
      <div className="info-box">
       <h1> Linkedin </h1>
       <a href="https://www.linkedin.com/in/justin-delille/" target='_blank' rel="noreferrer">https://www.linkedin.com/in/justin-delille/</a>
      </div>
      <div className="info-box">
       <h1> Location </h1>
       <p> Scottsdale, Arizona </p>
      </div>
     </div>
    </div>
    <div className="map-container">
     <Map />

    </div>
    <footer>
     <h1> Justin Delille </h1>
    </footer>


   </div>
   {toggleModal && (
    <Modal setToggleModal={setToggleModal} />

   )}
  </div>
 )
}

export default Contact
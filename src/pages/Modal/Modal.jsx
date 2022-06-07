import React from 'react'
import './Modal.scss'
const Modal = ({ setToggleModal }) => {


 const handleSubmit = () => {
 }


 return (
  <>
   <div className="overlay"></div>
   <div className="modal">
    <header>
     <div className="close">
      <p onClick={() => setToggleModal(false)}>&times;</p>
     </div>
    </header>
    <form onSubmit={handleSubmit}>
     <div className='input'>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" required />
     </div>
     <div className='input'>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" required />
     </div>
     <div className='input'>
      <label htmlFor="message">Message:</label>
      <textarea id="message" required />
     </div>
     <button type="submit">Send Message </button>
    </form>

   </div>
  </>

 )
}

export default Modal
import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import { BsArrowRight } from 'react-icons/bs'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import './Project.scss'
const Sellable = () => {
 return (
  <div className='project-page'>
   <header className='sellable-header'>
    <Navbar />
   </header>
   <div className="overlay">
    <div className="title">
     Does It Sell
    </div>
   </div>
   <div className="overview">
    <div className="about">
     <p> Project Overview </p>
     <h1> Does It Sell  </h1>
     <h2> See what items are selling on eBay and view their bids and price.</h2>
     <div className="btn-container">
      <a href="https://doesitsell.netlify.app/" target='_blank' rel="noreferrer"> Visit site </a>
      <a href="https://github.com/jDelille/ebay-web-scraper" target='_blank' rel="noreferrer"> View Github repo</a>
     </div>
    </div>
    <div className="features">
     <div className="feature-box">
      <div className="header">
       Search for any item
      </div>
      <div className="body">
       Using JavaScript and Cheerio, I scraped the auction data from eBay and return stats such as the number of bids, the price, and the quality of the item. The data is ordered by the most bids, so it is easy to tell what people are paying for that item.
      </div>
      <div className="footer">
       <p>View the api <span><BsArrowRight /></span></p>
      </div>
     </div>
     <div className="feature-box">
      <div className="header">
       Add items to your favorites list
      </div>
      <div className="body">
       Users are able to favorite any item and have it stored in their favorites list. They can view the details of the item they favorited such as the name, price, bids, and image. The favorites list is stored using local storage so their is no need to register for an account to save your data.
      </div>
     </div>
     <div className="feature-box">
      <div className="header">
       View the site on any device
      </div>
      <div className="body">
       The user has many different options for what they want to view on the fretboard. They can choose to view scales, arpeggios, or modes for any key. All the data on the site is provided by myself, and it is constantly growing in size. In the future there will be many more options to choose from.
      </div>
     </div>
    </div>
    <div className="build">
     <h1> How it was made </h1>
     <p> Does It Sell is created using JavaScript, React, Sass, Axios, Cheerio, Node, Cors, and Express. The backend was created first because that is where we are fetching the data from eBay. Using Cheerio and Axios, I am making a request to the eBay auction url and scraping data from this page such as the item title, image, price, bids, condition, and time left. Once I had all this information, I simply built out the frontend to display it in a way that is easy and fast to use. </p>
    </div>
    <div className="controls">
     <h1> Features </h1>
     <ul>
      <li> - Search for any item.</li>
      <li> - Results organized by most bids.</li>
      <li> - Dark / Light mode. </li>
      <li> - Display results in grid or list view.</li>
      <li> - Favorite an item to save it to your favorites list. </li>
      <li> - Responsive on all screen sizes.</li>

     </ul>
    </div>
    <div className="challenges">
     <h1> Challenges I ran into </h1>
     <p> The first major challenge I ran into was how to customize the backend axios url from the frontend so the user can modify the search url based on thier search input. This was very important for the functionality of this site to work properly and I knew I needed to send parameters from the frontend to the backend but figuring out how to do that was difficult. Finally, after many attempts, I figured out how to structure the frontend fetch request and the backend request to accomplish this task. <span> The solution I went with was to attach the user input state to the end of the fetch url in the frontend. This would allow me to send that user input state to the backend using req.params and then I could modify the url each time the user made a new search request. </span> </p>
    </div>
    <div className="site-imgs">
     <h1> Site shots</h1>
     <div className="img">
      <img src="../assets/doesitsell-screenshot-1.png" alt="" />
     </div>
     <div className="img">
      <img src="../assets/doesitsell-screenshot-2.png" alt="" />
     </div>
     <div className="img">
      <img src="../assets/doesitsell-screenshot-3.png" alt="" />
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

export default Sellable
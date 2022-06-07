import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NBA from './pages/project-overview/NBA';
import Sellable from './pages/project-overview/Sellable';
import Vibrofret from './pages/project-overview/Vibrofret';

function RouterDOM() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />

				<Route path='/vibrofret' element={<Vibrofret />} />
				<Route path='/nba_pickem' element={<NBA />} />
				<Route path='/does_it_sell' element={<Sellable />} />
			</Routes>
		</Router>
	);
}

export default RouterDOM;

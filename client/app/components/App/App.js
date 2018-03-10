import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/preloader';
import About from '../About/About';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Counter from "../Counter/Counter";

const App = () => (
	<div>
		<Preloader/>
		<Header/>
		<About/>
		<Services/>
		<Counter/>
		<Portfolio/>
		<Testimonials/>
		<Blog/>
		<Contact/>
		<Footer/>
	</div>
);

export default App;

import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
	return (
		<div className="home_container">
			<div className="text_container">
				<h2 className="splash_text">Salad,</h2>
				<h2 className="splash_text"><span className="live_text"></span></h2>
			</div>
				<Link to="/base">
					<button className="splash_button">Order Now</button>
				</Link>
		</div>
	)
}

export default Home

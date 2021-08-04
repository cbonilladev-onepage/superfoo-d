import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
	return (
		<motion.div exit={{opacity: 0}} className="home_container">
			<div className="text_container">
				<motion.h2 className="splash_text" initial={{x: "-100vw"}} animate={{x: 0}}>Salad,</motion.h2>
				<h2 className="splash_text"><motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.75}} className="live_text"></motion.span></h2>
			</div>
				<Link to={process.env.PUBLIC_URL + "/base"}>
					<motion.button whileHover={{scale: 1.1}} className="splash_button">Order Now</motion.button>
				</Link>
		</motion.div>
	)
}

export default Home

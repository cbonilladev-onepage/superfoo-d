import { motion } from 'framer-motion'
import React from 'react'
import './Order.css'

const Order = ({ salad }) => {
	return (
		<motion.div initial={{x: "-100vw"}} animate={{x: 0}} className="order_container">
			<h3 className="heading">Here's Your Order!</h3>
			<p>Alright, let's see. You're ordering a(n):</p>
			<div className="order_listing">{salad.base}</div>
			<p>with:</p>
			<div className="listing_container">
				{salad.toppings.map(topping => <div className="order_listing" key={topping}>{topping}</div>)}
			</div>
			<p>and:</p>
			<div className="listing_container">
				{salad.seasonings.map(seasoning => <div className="order_listing" key={seasoning}>{seasoning}</div>)}
			</div>

			<div>
				<a href={process.env.PUBLIC_URL + "/"}>
					<motion.button whileHover={{scale: 1.1}} className="order_next_button">Order Now</motion.button>
				</a>
			</div>
		</motion.div>
	)
}

export default Order

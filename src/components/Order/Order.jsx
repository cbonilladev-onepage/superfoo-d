import { motion } from 'framer-motion'
import React from 'react'
import './Order.css'

const Order = ({ salad }) => {
	const containerVariants = {
		hidden: {
			opacity: 0,
			x: '-100vw'
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				duration: .25,
				when: "beforeChildren",
				staggerChildren: 0.4
			}
		}
	}

	const childVariants = {
		hidden:  {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		}
	}

	return (
		<motion.div variants={containerVariants} initial="hidden" animate="visible" className="order_container">
			<h3 className="heading">Here's Your Order!</h3>
			<p>Alright, let's see. You're ordering a(n):</p>
			<motion.div variants={childVariants} className="order_listing">{salad.base}</motion.div>
			<p>with:</p>
			<motion.div variants={childVariants} className="listing_container">
				{salad.toppings.map(topping => <div className="order_listing" key={topping}>{topping}</div>)}
			</motion.div>
			<p>and:</p>
			<motion.div variants={childVariants} className="listing_container">
				{salad.seasonings.map(seasoning => <div className="order_listing" key={seasoning}>{seasoning}</div>)}
			</motion.div>
			<div>
				<a href={process.env.PUBLIC_URL + "/"}>
					<motion.button whileHover={{scale: 1.1}} className="order_next_button">Order Now</motion.button>
				</a>
			</div>
		</motion.div>
	)
}

export default Order

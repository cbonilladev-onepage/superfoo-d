import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import './Toppings.css';

const Toppings = ({salad, addTopping}) => {
	let toppings = ['Radish', 'Tomatoes', 'Cucumber', 'Onion', 'Carrot', 'Bell Pepper']

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
				duration: .5
			}
		}
	}

	return (
		<motion.div variants={containerVariants} initial="hidden" animate="visible" className="toppings_container">
			<h3 className="heading">Step 2: Choose Your Toppings</h3>
			<ul className="toppings_options">
				{toppings.map(topping => {
					let spanClass = salad.toppings.includes(topping) ? 'active' : '';
					return (
						<motion.li key={topping} whileHover={{scale: 1.1}} transition={{type:'spring', stiffness: 300}} className="toppings_listing" onClick={() => addTopping(topping)}>
							<span className={spanClass}>{topping}</span>
						</motion.li>
					)
				})}
			</ul>

			{salad.toppings && (
				<div>
					<Link to={process.env.PUBLIC_URL + "/seasonings"}>
						<motion.button whileHover={{scale: 1.1}} className="toppings_next_button">Next</motion.button>
					</Link>
				</div>
			)}
		</motion.div>
	)
}

export default Toppings

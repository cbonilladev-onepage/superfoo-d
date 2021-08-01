import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './Base.css'

const Base = ({addBase, salad}) => {
	const bases = ['Arugula', 'Lettuce', 'Spinach']

	return (
		<motion.div initial={{x: '-100vw'}} animate={{x: 0}} className="base_container">
			<h3 className="heading">Step 1: Choose Your Base</h3>

			<ul className="base_options">
				{bases.map((base) => {
					let spanClass = salad.base === base ? 'active' : '';
					return (
						<li key="base" className="base_listing" onClick={() => addBase(base)}>
							<span className={spanClass}>{ base }</span>
						</li>
					)
				})}
			</ul>

			{salad.base && (
				<div>
					<Link to={process.env.PUBLIC_URL + "/toppings"}>
						<motion.button initial={{scale: 1.1}} animate={{scale: 1}} whileHover={{scale: 1.1}} className="base_next_button">Next</motion.button>
					</Link>
				</div>
			)}
		</motion.div>
	)
}

export default Base
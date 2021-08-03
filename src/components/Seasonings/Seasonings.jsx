import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './Seasonings.css'

const Seasonings = ({salad, addSeasoning}) => {
	let seasonings = ['Salt', 'Lemon', 'Pepper', 'Chile', 'Vinegar']

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
		<motion.div variants={containerVariants} initial="hidden" animate="visible" className="seasonings_container">
			<h3 className="heading">Step 3: Choose Your Seasoning</h3>
			<ul className="seasonings_options">
				{seasonings.map(seasoning => {
					let spanClass = salad.seasonings.includes(seasoning) ? 'active' : '';
					return (
						<motion.li key={seasoning} whileHover={{scale: 1.1}} transition={{type:'spring', stiffness: 300}} className="seasonings_listing" onClick={() => addSeasoning(seasoning)}>
							<span className={spanClass}>{seasoning}</span>
						</motion.li>
					)
				})}
			</ul>

			{salad.toppings && (
				<div>
					<Link to={process.env.PUBLIC_URL + "/order"}>
						<motion.button whileHover={{scale: 1.1}} className="seasonings_next_button">Next</motion.button>
					</Link>
				</div>
			)}
		</motion.div>
	)
}

export default Seasonings

import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './Base.css'

const Base = ({addBase, salad}) => {
	const bases = ['Arugula', 'Lettuce', 'Spinach']

	const containerVariants = {
		hidden: {
			opacity: 0,
			x: '-100vw'
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				duration: .5,
				delay: .25
			}
		}
	}

	const nextVariants = {
		hidden: {
			opacity: 0,
			scale: 1.1
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				duration: .5
			}
		}
	}

	return (
		<motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="base_container">
			<h3 className="heading">Step 1: Choose Your Base</h3>

			<ul className="base_options">
				{bases.map((base) => {
					let spanClass = salad.base === base ? 'active' : '';
					return (
						<motion.li whileHover={{scale: 1.1}} transition={{type:'spring', stiffness: 300}} key="base" className="base_listing" onClick={() => addBase(base)}>
							<span className={spanClass}>{ base }</span>
						</motion.li>
					)
				})}
			</ul>

			{salad.base && (
				<div>
					<Link to={process.env.PUBLIC_URL + "/toppings"}>
						<motion.button variants={nextVariants} initial="hidden" animate="visible" whileHover={{scale: 1.1}} className="base_next_button">Next</motion.button>
					</Link>
				</div>
			)}
		</motion.div>
	)
}

export default Base
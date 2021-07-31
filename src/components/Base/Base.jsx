import React from 'react'
import { Link } from 'react-router-dom'
import './Base.css'

const Base = ({addBase, salad}) => {
	const bases = ['Arugula', 'Lettuce', 'Spinach']

	return (
		<div className="base_container">
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
					<Link to="/toppings">
						<button className="base_next_button">Next</button>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Base
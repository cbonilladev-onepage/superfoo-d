import React from 'react'
import { Link } from 'react-router-dom'
import './Seasonings.css'

const Seasonings = ({salad, addSeasoning}) => {
	let seasonings = ['Salt', 'Lemon', 'Pepper', 'Chile', 'Vinegar']

	return (
		<div className="seasonings_container">
			<h3 className="heading">Step 3: Choose Your Seasoning</h3>
			<ul className="seasonings_options">
				{seasonings.map(seasoning => {
					let spanClass = salad.seasonings.includes(seasoning) ? 'active' : '';
					return (
						<li key={seasoning} className="seasonings_listing" onClick={() => addSeasoning(seasoning)}>
							<span className={spanClass}>{seasoning}</span>
						</li>
					)
				})}
			</ul>

			{salad.toppings && (
				<div>
					<Link to="/order">
						<button className="seasonings_next_button">Next</button>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Seasonings

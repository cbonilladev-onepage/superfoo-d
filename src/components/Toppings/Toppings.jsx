import React from 'react';
import { Link } from 'react-router-dom';
import './Toppings.css';

const Toppings = ({salad, addTopping}) => {
	let toppings = ['Radish', 'Tomatoes', 'Cucumber', 'Onion', 'Carrot', 'Bell Pepper']

	return (
		<div className="toppings_container">
			<h3 className="heading">Step 2: Choose Your Toppings</h3>
			<ul className="toppings_options">
				{toppings.map(topping => {
					let spanClass = salad.toppings.includes(topping) ? 'active' : '';
					return (
						<li key={topping} className="toppings_listing" onClick={() => addTopping(topping)}>
							<span className={spanClass}>{topping}</span>
						</li>
					)
				})}
			</ul>

			{salad.toppings && (
				<div>
					<Link to={process.env.PUBLIC_URL + "/seasonings"}>
						<button className="toppings_next_button">Next</button>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Toppings

import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Salad } from '../../assets/salad.svg'
import './Header.css'

const Header = () => {
	return (
		<div className="container">
			<div className="logo">
				<a href={process.env.PUBLIC_URL + "/"}>
					<Salad />
				</a>
				<h2>superfoo'd</h2>
			</div>
			<ul className="links">
					<Link to={process.env.PUBLIC_URL + "/"}>
						<li>Home</li>
					</Link>
				<li>About</li>
			</ul>
		</div>
	)
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Salad } from '../../assets/salad.svg'
import './Header.css'

const Header = () => {
	return (
		<div className="container">
			<div className="logo">
				<a href="/">
					<Salad />
				</a>
				<h2>superfoo'd</h2>
			</div>
			<ul className="links">
					<Link to="/">
						<li>Home</li>
					</Link>
				<li>About</li>
			</ul>
		</div>
	)
}

export default Header

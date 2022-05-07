import { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from '../search/Search';
import './navbar.css'

class Navbar extends Component {

	render() {
		return (
			<div className="main-nav-bar">
				{/* <img
					src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
					className="website-logo"
					alt="website logo"
				/> */}
				<ul className="main-nav">
					<li className="main-nav-item">
						<Link to="/" className="logo">
							ProStockCharts
						</Link>
					</li>
					<li className="main-nav-item">
						<Link to="/" className="link-light">
							Charts
						</Link>
					</li>
					<li className="main-nav-item">
						<Link to="/" className="link-light">
							News
						</Link>
					</li>
					<li className="main-nav-item">
						<Link to="/about" className="link-light">
							Crypto
						</Link>
					</li>
					<li className="main-nav-item">
						<Link to="/stocks" className="link-light">
							About
						</Link>
					</li>
					<li className="main-nav-item search-box">
						<Search />
					</li>
				</ul>
			</div>
		)
	}
}

export default Navbar;
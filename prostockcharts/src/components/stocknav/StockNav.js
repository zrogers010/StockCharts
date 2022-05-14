import { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from '../util/withRouter';
import './stocknav.css'
import StockHeader from '../stockheader/StockHeader.js';

class StockNav extends Component {

	render() {
        const symbol = this.props.params.symbol;
        const summaryUrl = "/stocks/" + symbol;
        const chartUrl = "/stocks/" + symbol + "/chart";
        const newsUrl = "/stocks/" + symbol + "/news";
        const optionsUrl = "/stocks/" + symbol + "/options";
		return (
			<div className="stock-nav-bar">
				<ul className="stock-nav">
					{/* <li className="stock-nav-item">
						<StockHeader />
					</li> */}
                    {/* <li className="stock-nav-item">
						<Link to={summaryUrl} className="link-light">
							 <span>{symbol.toUpperCase()}</span> Summary |
						</Link>
					</li> */}
					<li className="stock-nav-item">
						<Link to={chartUrl} className="link-light">
							Advanced Chart
						</Link>
					</li>        
					<li className="stock-nav-item">
						<Link to={summaryUrl} className="link-light">
							Summary
						</Link>
					</li>     
            
					<li className="stock-nav-item">
						<Link to={newsUrl} className="link-light">
							Headlines
						</Link>
					</li>
					{/* <li className="stock-nav-item">
						<Link to={optionsUrl} className="link-light">
							Options
						</Link>
					</li> */}
				</ul>
			</div>
		)
	}
}

export default withRouter(StockNav);
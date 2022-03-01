import { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from '../util/withRouter';
import './stock-chart-nav.css'

class StockChartNav extends Component {

	render() {
        const symbol = this.props.params.symbol;
        const chartUrl = "/stocks/" + symbol + "/chart";
		return (
			<div className="linechart-nav-bar-container-light">
				<ul className="linechart-nav-bar">
                    <li className="linechart-period">
                        1d |
					</li>
                    <li className="linechart-period">
                        5d |
					</li>
                    <li className="linechart-period">
                        1m |
					</li>
                    <li className="linechart-period">
                        6m
					</li>
					<li className="adv-chart">
                        <span>
                            <Link to={chartUrl} className="link-light">
                                Advanced Chart
                            </Link>
                        </span>
					</li>
				</ul>
			</div>
		)
	}
}

export default withRouter(StockChartNav);

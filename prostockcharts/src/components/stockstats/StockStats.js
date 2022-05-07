import { Component } from 'react';
import { withRouter } from '../util/withRouter';
import { stockStats } from '../../resources/stock-stats.js';
import { numFormat } from '../../resources/num-format.js';
import './stock-stats.css';

class StockStats extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
	}
	
	applyData(data) {
		this.setState({
			data: data
		})
	}
		
	componentDidMount() {
		stockStats.getStockStats(this.props.params.symbol, this.applyData.bind(this))
	}

	render() {
		const intlNumFormat = new Intl.NumberFormat('en-US');
		return (
			<div className="stock-stats">
				<p className="key-stats">Key Statistics</p>
				<div className="wrapper">
					<div className="stats-item">
						<span className="bold">
							<div className="stats-name">Market cap</div>
						</span>
						<span>
							<div>{numFormat.nFormatter(this.state.data.marketCap, 2)}</div>
						</span>
					</div>
					<div className="stats-item">
						<span className="bold">
							<div className="stats-name">P/E ratio</div>
						</span>
						<span>
							<div>{((this.state.data.peRatio) ? this.state.data.peRatio : 'N/A')}</div>
						</span>
					</div>
					<div className="stats-item">
						<span className="bold">
							<div className="stats-name">Dividend yield</div>
						</span>
						<span>
							<div>N/A</div>
						</span>
					</div>
					<div className="stats-item">
						<span className="bold">
							<div className="stats-name">Average volume</div>
						</span>
						<span>
							<div>${numFormat.nFormatter(this.state.data.avgTotalVolume, 2)}</div>
						</span>
					</div>
					
					<div className="stats-item">
						<span className="bold">
							<div className="stats-name">High today</div>
						</span>
						<span>
							<div>${intlNumFormat.format(this.state.data.high, 2)}</div>
						</span>
					</div>
					<div className="stats-item">
						<span className="bold">
							<div className="stats-name">Low today</div>
						</span>
						<span>
							<div>${intlNumFormat.format(this.state.data.low, 2)}</div>
						</span>
					</div>
					<div className="stats-item">
						<span className="bold">
							<div className="stats-name">Open price</div>
						</span>
						<span>
							<div>${intlNumFormat.format(this.state.data.open, 2)}</div>
						</span>
					</div>
					<div className="stats-item">
						<span className="bold">
							<div className="stats-name">Volume</div>
						</span>
						<span>
							<div>${numFormat.nFormatter(this.state.data.volume, 2)}</div>
						</span>
					</div>
					<div className="stats-item">
						<span className="bold">
							<div className="stats-name">52 Week high</div>
						</span>
						<span>
							<div>${intlNumFormat.format(this.state.data.week52High, 2)}</div>
						</span>
					</div>
					<div className="stats-item">
						<span className="bold">
							<div className="stats-name">52 Week low</div>
						</span>
						<span>
							<div>${intlNumFormat.format(this.state.data.week52Low, 2)}</div>
						</span>
					</div>
					<div className="stats-item">
						<span className="bold">
							<div className="stats-name">Next earnings date</div>
						</span>
						<span>
							<div>{}</div>
						</span>
					</div>
					<div className="stats-item">
						<span className="bold">
							<div className="stats-name">Buy/Sell rating</div>
						</span>
						<span>
							<div>{}</div>
						</span>
					</div>
				</div>
			</div>				
		)
	}
}


export default withRouter(StockStats);
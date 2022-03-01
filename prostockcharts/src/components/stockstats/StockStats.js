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
				<h2>Key statistics</h2>
				<div className="wrapper">
					<div className="market-cap">
						<span className="bold">
							<div className="stats-name">Market cap</div>
						</span>
						<span>
							<div>{numFormat.nFormatter(this.state.data.marketCap, 2)}</div>
						</span>
					</div>
					<div className="pe-ratio">
						<span className="bold">
							<div className="stats-name">P/E ratio</div>
						</span>
						<span>
							<div>{((this.state.data.peRatio) ? this.state.data.peRatio : 'N/A')}</div>
						</span>
					</div>
					<div className="dividend-yield">
						<span className="bold">
							<div className="stats-name">Dividend yield</div>
						</span>
						<span>
							<div>N/A</div>
						</span>
					</div>
					<div className="average-volume">
						<span className="bold">
							<div className="stats-name">Average volume</div>
						</span>
						<span>
							<div>${numFormat.nFormatter(this.state.data.avgTotalVolume, 2)}</div>
						</span>
					</div>
					
					<div className="high-price">
						<span className="bold">
							<div className="stats-name">High today</div>
						</span>
						<span>
							<div>${intlNumFormat.format(this.state.data.high, 2)}</div>
						</span>
					</div>
					<div className="low-price">
						<span className="bold">
							<div className="stats-name">Low today</div>
						</span>
						<span>
							<div>${intlNumFormat.format(this.state.data.low, 2)}</div>
						</span>
					</div>
					<div className="open-price">
						<span className="bold">
							<div className="stats-name">Open price</div>
						</span>
						<span>
							<div>${intlNumFormat.format(this.state.data.open, 2)}</div>
						</span>
					</div>
					<div className="volume">
						<span className="bold">
							<div className="stats-name">Volume</div>
						</span>
						<span>
							<div>${numFormat.nFormatter(this.state.data.volume, 2)}</div>
						</span>
					</div>
					<div className="year-high">
						<span className="bold">
							<div className="stats-name">52 Week high</div>
						</span>
						<span>
							<div>${intlNumFormat.format(this.state.data.week52High, 2)}</div>
						</span>
					</div>
					<div className="year-low">
						<span className="bold">
							<div className="stats-name">52 Week low</div>
						</span>
						<span>
							<div>${intlNumFormat.format(this.state.data.week52Low, 2)}</div>
						</span>
					</div>
					<div className="earnings">
						<span className="bold">
							<div className="stats-name">Next earnings date</div>
						</span>
						<span>
							<div>{}</div>
						</span>
					</div>
					<div className="rating">
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
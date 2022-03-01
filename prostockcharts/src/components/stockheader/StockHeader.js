import { Component } from 'react';
import { withRouter } from '../util/withRouter';
import { stockStats } from '../../resources/stock-stats.js';
import './stock-header.css';

class StockHeader extends Component {
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
		let latestPrice = intlNumFormat.format(this.state.data.latestPrice);
		let change = this.state.data.change;
		let percentChange = (change / this.state.data.latestPrice);
		let displayChange = ((change < 0) ? change : '+' + change);

		return (
			<div className = "stock-header">
				<div>
					<h2>{this.state.data.companyName} ({this.state.data.symbol})</h2>
				</div>
				<div>
					<h3>${latestPrice} {displayChange} ({percentChange.toFixed(2)}%)</h3>
				</div>
			</div>				
		)
	}
}


export default withRouter(StockHeader);
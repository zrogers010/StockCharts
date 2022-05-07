import { Component } from 'react';
import { withRouter } from '../util/withRouter';
import { stockDetails } from '../../resources/stock-details.js';
import { numFormat } from '../../resources/num-format.js';
import './stock-details.css'

class StockAbout extends Component {
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
		console.log(this.state.data)
		console.log(this.state.data.ceo)
	}
		
	componentDidMount() {
		stockDetails.getStockDetails(this.props.params.symbol, this.applyData.bind(this))
	}

	render() {
		return (
			<div className="stock-details">
				<div className="stock-about-name">
					<p>About {this.state.data.companyName}</p>
				</div>
                <div className="stock-desc">
					<p>{this.state.data.description}</p>
				</div>
				<div className="wrapper">
					<div>
						<span className="bold">
							<div className="stats-name">CEO</div>
						</span>
						<span>
							<div className="stats-item">{this.state.data.ceo}</div>
						</span>
					</div>
					<div>
                        <span className="bold">
							<div className="stats-name">Employees</div>
						</span>
						<span>
							<div className="stats-item">{numFormat.nFormatter(this.state.data.employees, 3)}</div>
						</span>
					</div>
					<div>
                        <span className="bold">
							<div className="stats-name">Headquarters</div>
						</span>
						<span>
							<div className="stats-item">{this.state.data.headquarters}</div>
						</span>
					</div>
					<div>
                        <span className="bold">
							<div className="stats-name">Industry & Sector</div>
						</span>
						<span>
							<div className="stats-item">{this.state.data.industry}</div>
						</span>
					</div>
				</div>	
			</div>				
		)
	}
}


export default withRouter(StockAbout);
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { withRouter } from '../util/withRouter';
import StockNav from '../stocknav/StockNav.js';
import StockStats from '../stockstats/StockStats.js';
import StockDetails from '../stockdetails/StockDetails.js';
import StockChart from '../stockchart/StockChart.js';
import StockChartNav from '../stockchartnav/StockChartNav';
import StockHeader from '../stockheader/StockHeader.js';
import StockNews from '../stocknews/StockNews.js';
import LineChart from '../linechart/LineChart.js';
import './stock.css';

class Stock extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
	}
	
	render() {
		return (
		
            <div className="main-home-container">
                <div className="row">
                    <StockHeader />
                </div>
                <div className="row">
                    <StockNav />
                    <div className="column-chart">
                        {/* <h2>Column 1</h2> */}
                        {/* <StockChart symbol={this.state.data} /> */}
                        <StockChartNav />
                        <LineChart />
                    </div>
                    <div className="column-stats">
                        {/* <h2>Column 2</h2> */}
                        <StockStats />
                    </div>
                </div>
                <div className="row">
                    <StockDetails />
                </div>
                <div className="row">
                    <StockNews />
                </div>
            </div>

        )
    }
}

export default withRouter(Stock);
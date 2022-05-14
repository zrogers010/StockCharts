import { Component } from 'react';
import { withRouter } from '../util/withRouter';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import StockNav from '../stocknav/StockNav';
import './stock-line-chart.css';
 
class StockLineChart extends Component {
    render() {
        return (
                <div className="stocklinechart">
                    <TradingViewWidget
                    autosize
                    symbol={this.props.params.symbol}
                    theme={Themes.LIGHT}
                    style={3}
                    locale="en"
                    allow_symbol_change={false}
                    hide_side_toolbar={true}
                    hide_top_toolbar={true}
                    hide_legend={true}
                    save_image={false}
                    enable_publishing={false}
                    range={"12M"}
                    />
                </div>
        )
    }

}

export default withRouter(StockLineChart);

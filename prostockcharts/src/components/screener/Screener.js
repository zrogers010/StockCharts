import { Component } from 'react';
import { withRouter } from '../util/withRouter';
import StockNav from '../stocknav/StockNav';
import './screener.css';
 
class StockScreener extends Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
            "width": "100%",
            "height": 650,
            "defaultColumn": "overview",
            "defaultScreen": "most_capitalized",
            "market": "america",
            "showToolbar": true,
            "colorTheme": "dark",
            "locale": "en"
        })
        document.getElementById("myContainer").appendChild(script);
    }
    
    render() {
        return (
            <div className="screener-container">
                <div className="screener">
                    <div id="myContainer">
                        <div className="tradingview-widget-container">
                            <div className="tradingview-widget-container__widget">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(StockScreener);

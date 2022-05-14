import { Component } from 'react';
import { withRouter } from '../util/withRouter';
import './widget-timeline.css';
 
class WidgetTimeline extends Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
            "feedMode": "all_symbols",
            "colorTheme": "light",
            "isTransparent": true,
            "displayMode": "regular",
            "width": "100%",
            "height": 800,
            "locale": "en"
        })
        document.getElementById("widgetTimeline").appendChild(script);
    }
    
    render() {
        return (
            <div className="widget-timeline">
                <div id="widgetTimeline">
                    <div className="tradingview-widget-container">
                        <div className="tradingview-widget-container__widget">
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(WidgetTimeline);








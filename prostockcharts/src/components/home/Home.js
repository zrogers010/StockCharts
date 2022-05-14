import { Component } from 'react'
import HeadlineNews from '../stocknews/HeadlineNews';
import WidgetOverview from '../widget-overview/WidgetOverview';
import WidgetTimeline from '../widget-timeline/WidgetTimeline';
import './home.css'

class Home extends Component {

	render() {
		return (
            <div className="main-home-container">
              <div className="home-container-left">
                <HeadlineNews />
              </div>
              <div className="home-container-right">
                <div className="home-container-top">
                  <WidgetOverview />
                  <WidgetTimeline />
                </div>
                <div className="home-container-bottom">
                  
                </div>
              
              

              </div>
            </div>
		)
	}
}

export default Home;
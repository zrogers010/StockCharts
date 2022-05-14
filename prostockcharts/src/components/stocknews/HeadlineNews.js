import { Component } from 'react';
import { withRouter } from '../util/withRouter';
import { getHeadlineNews } from '../../resources/get-headline-news.js';
import { getNewsApi } from '../../resources/get-news-api';
import './headline-news.css';

class News extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}
	
	applyData(data) {
		this.setState({
			data: data
		})
		console.log(" NEWS ", this.state.data)
	}
		
	componentDidMount() {
        getNewsApi.getNewsApi(this.applyData.bind(this))
		//getHeadlineNews.getLatestNews(this.props.params.symbol, this.applyData.bind(this))
	}

	render() {
	    return (
            <>
			<div className="news-home-container">
                <div>
                    <ul>

                        {this.state.data.slice(0,1).map((d) => {
                            return(
                                <li key={d.url}>
                                    <div className="headline-article-home">
                                        <div className="headline-article-home-left">
                                            <div className="headline-article-home-image">
                                                <img src={ d.image } width="280" height="145" image-rendering="smooth"/>
                                            </div>
                                        </div>
                                        <div className="headline-article-home-right">
                                            <div className="headline-article-home-title">
                                                <a href={d.url}>{ d.headline }</a>
                                            </div>
                                            <div className="headline-article-home-source">
                                                { d.source }
                                            </div>
                                            <div className="headline-article-home-date">
                                                { d.date }
                                            </div>
                                            <div className="headline-article-home-summary">
                                                { d.summary }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
                <div>
                    <ul>

                        {this.state.data.slice(1).map((d) => {
                            return(
                                <li key={d.url}>
                                    <div className="article-home">
                                        <div className="article-home-left">
                                            <div className="article-home-image">
                                                <img src={ d.image } width="180" height="90" image-rendering="smooth"/>
                                            </div>
                                        </div>
                                        <div className="article-home-right">
                                                <div className="article-home-title">
                                                    <a href={d.url}>{ d.headline }</a>
                                                </div>
                                            <div className="article-home-source">
                                                { d.source }
                                            </div>
                                            <div className="article-home-date">
                                                { d.date }
                                            </div>
                                            <div className="article-home-summary">
                                                { d.summary }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            <div className='buffer'> </div>
            </div>
			</>
        )
	}
}


export default withRouter(News);
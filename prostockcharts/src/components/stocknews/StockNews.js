import { Component } from 'react';
import { withRouter } from '../util/withRouter';
import { getNews } from '../../resources/get-news.js';
import './stock-news.css';

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
	}
		
	componentDidMount() {
		getNews.getLatestNews(this.props.params.symbol, this.applyData.bind(this))
	}

	render() {
	    return (
            <>
			<div className="news-container">
			    <div className="news-headline">
                    Headlines
                </div>
				<ul>
                    {this.state.data.map((d) => {
                        return(
                            <li key={d.url}>
                                <div className="article">
                                    <div className="article-left">
                                        <div className="article-image">
                                            <img src={ d.image } width="180" height="90" image-rendering="smooth"/>
                                        </div>
                                    </div>
                                    <div className="article-right">
                                            <div className="article-title">
                                                <a href={d.url}>{ d.headline }</a>
                                            </div>
                                        <div className="article-source">
                                            { d.source }
                                        </div>
                                        <div className="article-date">
                                            { d.date }
                                        </div>
                                        <div className="article-summary">
                                            { d.summary }
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
				</ul>
            <div className='buffer'> </div>
            </div>
			</>
        )
	}
}


export default withRouter(News);
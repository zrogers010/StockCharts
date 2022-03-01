import { Component } from 'react';
import { withRouter } from '../util/withRouter';
import { stockNews } from '../../resources/stock-news.js';
import './stock-news.css';

class StockNews extends Component {
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
		console.log("news!")
		console.log(this.state.data)
		console.log(this.state.data[0])	
	}
		
	componentDidMount() {
		stockNews.getLatestNews(this.props.params.symbol, this.applyData.bind(this))
	}

	render() {
	    return (
            <>
			<div className = "stock-news">
				<h2>Headlines</h2>
				<ul>
				{this.state.data.map((d) => {
					return(
						<li key={d.url}>
                            <div className='article'>
                                <div className='article-left'>
                                    <div className="article-image">
                                        <img src={ d.image } width="220" height="124"/>
                                    </div>
                                </div>
                                <div className='article-right'>
                                    <div className="article-headline">
                                        <span>{ d.headline }</span>
                                    </div>
                                    <div className="article-source">
                                        <span>{ d.source }</span>
                                    </div>
                                    <div className="article-date">
                                        <span>{ d.date }</span>
                                    </div>
                                    <div className="article-summary">
                                        <span>{ d.summary }</span>
                                    </div>
                                    <div className="article-url">
                                        <span>{ d.url }</span>
                                    </div>
                                </div>
                            </div>
						</li>
					)
				
				})}
					{/*
					{this.state.data.map(d => (<li key={d.headline}>{d.url}</li>))} 
					*/}
				</ul>
            </div>
			</>
        )
	}
}


export default withRouter(StockNews);
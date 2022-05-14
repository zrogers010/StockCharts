import { iex } from '../config/iex.js';

export const getHeadlineNews = {

	getLatestNews: (symbol, callback) => {
		const url = getHeadlineNews.latestNewsURL(symbol)
		console.log("News URL: ", url);
		fetch(url)
		.then((response) => response.json())
		.then((data) => {
			callback(getHeadlineNews.formatNewsData(data));
		})
	}, 
	
	latestNewsURL: (symbol) => {
		return `${iex.base_url}/time-series/news?range=3m&limit=20&token=${iex.api_token}`;
	},

    formatSummary: (s) => {
        var len = 1000;
        if(s.length > len) {
            return s.substring(0, len);// + "...";
        } else {
            return s;
        }
    },
	
	formatNewsData: (data) => {
		const news = []
        const headline_news = []

		let formattedData = {}
		let dt = new Date(data[0].datetime);
    	let date = dt.toLocaleString('en-US', { timezone: 'UTC' });
		
		console.log("HEAEDLINE NEWS:  ", news);

		formattedData.date = date;
		formattedData.headline = data[0].headline;
		formattedData.summary = getHeadlineNews.formatSummary(data[0].summary);
		formattedData.image = data[0].image
		formattedData.source = data[0].source
		formattedData.url = data[0].url
		headline_news.push(formattedData)

		for (let i=1; i<data.length; i++) {
            formattedData = {}
            dt = new Date(data[i].datetime);
            date = dt.toLocaleString('en-US', { timezone: 'UTC' });
            formattedData.date = date;
			formattedData.headline = data[i].headline;
            formattedData.summary = getHeadlineNews.formatSummary(data[i].summary);
			formattedData.image = data[i].image
			formattedData.source = data[i].source
			formattedData.url = data[i].url
			news.push(formattedData);
		}

		return news;
	}
}



//https://cloud.iexapis.com/stable/time-series/news?range=1m&limit=30&token=

import { iex } from '../config/iex.js';

export const getNews = {

	getLatestNews: (symbol, callback) => {
		const url = getNews.latestNewsURL(symbol)
		console.log("News URL: ", url);
		fetch(url)
		.then((response) => response.json())
		.then((data) => {
			callback(getNews.formatNewsData(data));
		})
	}, 
	
	latestNewsURL: (symbol) => {
		return `${iex.base_url}/stock/${symbol}/news?token=${iex.api_token}`;
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
		for (let i=0; i<data.length; i++) {
            const formattedData = {}
            const dt = new Date(data[i].datetime);
            const date = dt.toLocaleString('en-US', { timezone: 'UTC' });
            formattedData.date = date;
			formattedData.headline = data[i].headline;
            // var summ = data[i].summary;
            // formattedData.summary = summ.substring(0, 100);
			//formattedData.summary = data[i].summary
            formattedData.summary = getNews.formatSummary(data[i].summary);
			formattedData.image = data[i].image
			formattedData.source = data[i].source
			formattedData.url = data[i].url
			news.push(formattedData);
		}

		return news;
	}
}
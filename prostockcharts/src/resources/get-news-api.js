
import { iex } from '../config/iex.js';

export const getNewsApi = {

	getNewsApi: (callback) => {
		const url = getNewsApi.newsApiURL()
		console.log("News API URL: ", url);
		fetch(url)
		.then((response) => response.json())
		.then((data) => {
			callback(getNewsApi.formatNewsData(data.articles));
		})
	}, 
	
	newsApiURL: () => {
        // news sources.
        const SOURCES = ['bbc-news','bloomberg','business-insider','cnbc', 'cnn','reuters','techcrunch','the-wall-street-journal'];
        // articles oldest date 10 days ago.
        const START_DATE = new Date(Date.now() - 24 * 3600 * 1000 * 10).toString();
        console.log(START_DATE);

        var api_url = 'https://newsapi.org/v2/top-headlines?' +
            'pageSize=100&' +
            'sources=' + SOURCES.join(',') + '&' +
            //'from=2019-05-01&' +
            'from=' + START_DATE + '&' +
            `apiKey=${iex.news_api_token}`;
        
            return api_url;
		//return `${iex.base_url}/time-series/news?range=3m&limit=20&token=${iex.api_token}`;
	},

    // formatSummary: (s) => {
    //     var len = 1000;
    //     if(s.length > len) {
    //         return s.substring(0, len);// + "...";
    //     } else {
    //         return s;
    //     }
    // },
	
	formatNewsData: (data) => {
        console.log("NEWS API Format Data: ", data)

		const news = []
        // const headline_news = []

		let formattedData = {}
		let dt = new Date(data[0].datetime);
    	let date = dt.toLocaleString('en-US', { timezone: 'UTC' });
		

		// formattedData.date = data[0].publishedAt;
		// formattedData.headline = data[0].title;
		// formattedData.summary = data[0].content;
		// formattedData.image = data[0].urlToImage;
		// formattedData.source = data[0].source.name;
		// formattedData.url = data[0].url;
		// headline_news.push(formattedData)

		for (let i=0; i<data.length; i++) {
            formattedData = {}
            formattedData.date = data[i].publishedAt;
            formattedData.headline = data[i].title;
            formattedData.summary = data[i].content;
            formattedData.image = data[i].urlToImage;
            formattedData.source = data[i].source.name;
            formattedData.url = data[i].url;
			news.push(formattedData);
		}

		return news;
	}
}



//https://cloud.iexapis.com/stable/time-series/news?range=1m&limit=30&token=





// // news sources.
// const SOURCES = ['bbc-news','bloomberg','business-insider','cnbc', 'cnn','reuters','techcrunch','the-wall-street-journal'];
// // articles oldest date 10 days ago.
// const START_DATE = new Date(Date.now() - 24 * 3600 * 1000 * 10).toString();
// console.log(START_DATE);

// var api_url = 'https://newsapi.org/v2/top-headlines?' +
//     'pageSize=100&' +
//     'sources=' + SOURCES.join(',') + '&' +
//     //'from=2019-05-01&' +
//     'from=' + START_DATE + '&' +
//     'apiKey=';

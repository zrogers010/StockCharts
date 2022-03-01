import { iex } from '../config/iex.js';

export const lineChart = {

	getChartData: (symbol, callback) => {
		const url = lineChart.chartDataURL(symbol)
		console.log("Chart URL: ", url);
		fetch(url)
		.then((response) => response.json())
		.then((data) => {
			callback(lineChart.formatPriceData(data));
		})
	}, 
	
	chartDataURL: (symbol) => {
        return `${iex.base_url}/stock/${symbol}/chart/1y/?token=${iex.api_token}`
	},
	
	formatPriceData: (data) => {
		const chartData = []
		for (let i=0; i<data.length; i++) {
			const formattedData = []
			const ts = new Date(data[i].updated)
            const date = ts.toLocaleString('en-US', { timezone: 'UTC' });	
			//formattedData[0] = moment(data[i].updated).format('MM/DD/YYYY')
			//formattedData[0] = data[i].updated.toLocaleDateString("en-us")
			//formattedData[0] = data[i].updated
			formattedData[0] = date
			formattedData[1] = data[i].high
			formattedData[2] = data[i].low
			formattedData[3] = data[i].open
			formattedData[4] = data[i].close
			// formattedData[5] = data[i].volume
			// formattedData[6] = data[i].label

	// 		const formattedData = {}
	// 		formattedData.symbol = data[i].symbol
	// 		formattedData.high = data[i].high
	// 		formattedData.low = data[i].low
	// 		formattedData.open = data[i].open
	// 		formattedData.close = data[i].close
	// 		formattedData.volume = data[i].volume
	// 		formattedData.date = data[i].label
	// 		formattedData.updated = data[i].updated
	// 		formattedData.change = data[i].change
	// 		formattedData.changePercent = data[i].changePercent

			chartData.push(formattedData);
		}
		console.log("line-chart formatted data: ", chartData);
		return chartData;
	}

}
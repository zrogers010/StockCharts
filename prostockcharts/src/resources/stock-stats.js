import { iex } from '../config/iex.js';

export const stockStats = {

	getStockStats: (symbol, callback) => {
		const url = stockStats.stockStatsURL(symbol)
		fetch(url)
		.then((response) => response.json())
		.then((data) => {
			//console.log(data);
			callback(stockStats.formatPriceData(data));
		})
	}, 
	
	stockStatsURL: (symbol) => {
		return `${iex.base_url}/stock/${symbol}/quote?token=${iex.api_token}`
	},
	
	formatPriceData: (data) => {
		//console.log(data);
		const formattedData = {}
		formattedData.symbol = data.symbol
		formattedData.companyName = data.companyName
		formattedData.high = data.high
		formattedData.low = data.low
		formattedData.open = data.open
		formattedData.close = data.close
		formattedData.latestPrice = data.latestPrice
		formattedData.change = data.change
		formattedData.percentChange = data.percentChange
		formattedData.volume = data.volume
		formattedData.avgTotalVolume = data.avgTotalVolume
		formattedData.marketCap = data.marketCap
		formattedData.peRatio = data.peRatio
		formattedData.week52High = data.week52High
		formattedData.week52Low = data.week52Low
		formattedData.date = data.latestTime
		formattedData.latestTradeTime = data.latestTradeTime
		formattedData.closeTime = data.closeTime
		formattedData.exchange = data.primaryExchange
		//console.log("formattedData :", formattedData)
		
		return formattedData
	}
}
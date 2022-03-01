import { iex } from '../config/iex.js';

export const stockDetails = {

	getStockDetails: (symbol, callback) => {
		const url = stockDetails.stockDetailsURL(symbol)
		fetch(url)
		.then((response) => response.json())
		.then((data) => {
			//console.log(data);
			callback(stockDetails.formatData(data));
		})
	}, 
	
	stockDetailsURL: (symbol) => {
		return `${iex.base_url}/stock/${symbol}/company?token=${iex.api_token}`
	},
	
	formatData: (data) => {
		//console.log("stock-details: ", data)
		const formattedData = {}
		formattedData.symbol = data.symbol
		formattedData.companyName = data.companyName
		formattedData.exchange = data.exchange
		formattedData.industry = data.industry
		formattedData.website = data.website
		formattedData.description = data.description
		formattedData.sector = data.sector
		formattedData.ceo = data.CEO
		formattedData.employees = data.employees
		formattedData.headquarters = data.city + ", " + data.state
		formattedData.country = data.country
		
		return formattedData
	}
}
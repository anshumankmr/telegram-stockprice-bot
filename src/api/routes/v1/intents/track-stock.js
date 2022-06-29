'use strict';
const responseMap = require('../../../utils/response-map');
const { getStockData } = require('../../../services/kite/get-stock-data');

const trackStock = async (agent) => {
	const globalParameters = agent.getContext('global-parameters');
	agent.add(`${responseMap.confirmResponse}: ${globalParameters.parameters.companyName}`);
	getStockData({stockId: globalParameters.parameters.companyName});
	// agent.setContext(globalParameters); 
};

module.exports = trackStock;

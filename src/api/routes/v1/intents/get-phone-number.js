'use strict';
const responseMap = require('../../../utils/response-map');
const { getStockData } = require('../../../services/kite/get-stock-data');

const getPhoneNumber = async (agent) => {
	const globalParameters = agent.getContext('global-parameters');
	console.log(globalParameters.parameters);
	agent.add(responseMap.confirmNumber + globalParameters.parameters.phoneNumber);
	getStockData({stockId: globalParameters.parameters.companyName , price:globalParameters.parameters.stockPrice , phoneNumber: globalParameters.parameters.phoneNumber});
};

module.exports = getPhoneNumber;

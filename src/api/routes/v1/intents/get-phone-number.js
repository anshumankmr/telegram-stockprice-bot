'use strict';
const responseMap = require('../../../utils/response-map');
const { getStockData } = require('../../../services/kite/get-stock-data');
const { freeTicks } = require('../../../..//config/vars');

const getPhoneNumber = async (agent) => {
	const globalParameters = agent.getContext('global-parameters');
	if (globalParameters.numberOfTicks === undefined){
		globalParameters.numberOfTicks = 1;
	}
	if (globalParameters.numberOfTicks < freeTicks){
		agent.add(responseMap.confirmNumber + globalParameters.parameters.phoneNumber);
		getStockData({stockId: globalParameters.parameters.companyName , price:globalParameters.parameters.stockPrice , phoneNumber: globalParameters.parameters.phoneNumber});
	} else {
		agent.add('You have exhausted your free stock trackers');
	}
	globalParameters.numberOfTicks += 1;
	agent.setContext(globalParameters);
};

module.exports = getPhoneNumber;

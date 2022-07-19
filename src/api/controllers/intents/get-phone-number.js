'use strict';
const responseMap = require('../../utils/response-map');
const { getStockData } = require('../../services/kite/get-stock-data');
const { setTemplate } = require('../../services/helpers');
const { getUserTicksExhausted } = require('../../services/sql/get-user-ticks-exhausted');

const getPhoneNumber = async (agent) => {
	const globalParameters = agent.getContext('global-parameters');
	const channel = globalParameters.parameters.channel;
	const isExpired = await getUserTicksExhausted(globalParameters.parameters.phoneNumber);
	if (isExpired){
		agent.add(setTemplate(responseMap.confirmNumber, {number: globalParameters.parameters.phoneNumber}));
		getStockData({stockId: globalParameters.parameters.companyName , price:globalParameters.parameters.stockPrice , phoneNumber: globalParameters.parameters.phoneNumber , telegramChatId : globalParameters.parameters.telegramChatId,channel:channel, company: globalParameters.parameters['companyName.original']});
	} else {
		agent.add('You have exhausted your free stock trackers');
	}
	globalParameters.numberOfTicks += 1;
	agent.setContext(globalParameters);
};

module.exports = getPhoneNumber;

'use strict';
const responseMap = require('../../utils/response-map');
const { getStockData } = require('../../services/kite/get-stock-data');
const { setTemplate } = require('../../services/helpers');
const { getUserTicksExhausted } = require('../../services/sql/get-user-ticks-exhausted');
const { context } = require('../../../config/vars');
const { saveData } = require('../../services/sql/sql-helpers');
const { v4: uuidv4 } = require('uuid');

const getPhoneNumber = async (agent) => {
	const globalParameters = agent.getContext('global-parameters');
	const channel = globalParameters.parameters.channel;
	const isExpired = await getUserTicksExhausted(globalParameters.parameters.phoneNumber);
	const userChoseWhatsapp = globalParameters.parameters.channel === 'WHATSAPP';
	if (isExpired){
		agent.add('You have exhausted your free stock trackers');
	} else {
		if (userChoseWhatsapp){
			agent.add(setTemplate(responseMap.confirmWhatsappNumber, {number: globalParameters.parameters.phoneNumber}));
			const orderId = uuidv4();
			const args = {stockId: globalParameters.parameters.companyName , price:globalParameters.parameters.stockPrice , phoneNumber: globalParameters.parameters.phoneNumber , telegramChatId : globalParameters.parameters.telegramChatId,channel:channel, company: globalParameters.parameters['companyName.original'], id:orderId};
			getStockData(args);
			saveData('Orders',{phone_number:globalParameters.parameters.phoneNumber,data:args,status:'PENDING',id:orderId});
			globalParameters.parameters.channel = '';
			globalParameters.parameters['channel.original'] = '';
		} else {
			agent.add(setTemplate(responseMap.confirmNumber, {number: globalParameters.parameters.phoneNumber}));
			agent.add(responseMap.providePrice);
			context.name = 'get-price';
			agent.setContext(context);
		}
	}
	globalParameters.numberOfTicks += 1;
	globalParameters.lifespan = 9999;
	agent.setContext(globalParameters);
};

module.exports = getPhoneNumber;

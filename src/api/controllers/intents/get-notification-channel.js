'use strict';
const responseMap = require('../../utils/response-map');
const { setTemplate } = require('../../services/helpers');
const { context } = require('../../../config/vars');
const { getStockData } = require('../../services/kite/get-stock-data');
const { freeTicks } = require('../../../config/vars');

const getNotificationChannel = async (agent) => {
	const globalParameters = agent.getContext('global-parameters');
	const channel = globalParameters.parameters.channel;
	const outputCtx = context;
	switch(channel) {
	case 'WHATSAPP':
		agent.add(setTemplate(responseMap.getWhatsappNumber, {channel : channel}));
		outputCtx.name = 'get-phone-number';
		agent.setContext(outputCtx);
		break;
	case 'TELEGRAM':
		if (globalParameters.numberOfTicks === undefined){
			globalParameters.numberOfTicks = 1;
		}
		if (globalParameters.numberOfTicks < freeTicks){
			agent.add(setTemplate(responseMap.confirmTickerTelegram, {}));
			getStockData({stockId: globalParameters.parameters.companyName , price:globalParameters.parameters.stockPrice , telegramChatId : globalParameters.parameters.telegramChatId, channel :  channel , company: globalParameters.parameters['companyName.original']});
		} else {
			agent.add('You have exhausted your free stock trackers');
		}
		break;
	default:
		agent.add(setTemplate(responseMap.platformNotSupported, {channel : channel}));
		outputCtx.name = 'get-notification-channel';
		agent.setContext(outputCtx);
	}
      
	agent.setContext(globalParameters);
};

module.exports = getNotificationChannel;

'use strict';
const responseMap = require('../../utils/response-map');
const { getLastQuotedPrice } = require('../../services/kite/get-last-quoted-price');
const { setTemplate } = require('../../services/helpers');

const getCompanyName = async (agent) => {
	const context = agent.getContext('global-parameters') || agent.getContext('get-phone-number');
	if (context.parameters['companyName.original'] === '') {
		context.lifespan = 0;
		agent.add(responseMap.invalidCompanyName);
	} else {
		if (context.name === 'get-phone-number'){
			context.name = 'global-parameters';
			context.lifespan = 9999;//rename this context to global-parameters to save the values	
		}	
		const lastPrice = await getLastQuotedPrice({instrument_token : context.parameters.companyName});
		context.parameters.telegramChatId = agent.originalRequest?.payload?.data?.chat?.id || -1;
		agent.add(setTemplate(responseMap.confirmResponse, {companyName :context.parameters['companyName.original'] , companyId: context.parameters.companyName, lastPrice: lastPrice })
		);
	}
	agent.setContext(context);	
};

module.exports = getCompanyName;

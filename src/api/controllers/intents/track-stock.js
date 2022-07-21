'use strict';
const responseMap = require('../../utils/response-map');
const { getLastQuotedPrice } = require('../../services/kite/get-last-quoted-price');
const { setTemplate } = require('../../services/helpers');

const getCompanyName = async (agent) => {
	const globalParameters = agent.getContext('global-parameters') || agent.getContext('get-price');
	if (globalParameters.name === 'get-price'){
		globalParameters.name = 'global-parameters';
		globalParameters.lifespan = 9999;//rename this context to global-parameters to save the values	
	}
	const lastPrice = await getLastQuotedPrice({instrument_token : globalParameters.parameters.companyName});
	globalParameters.parameters.telegramChatId = agent.originalRequest?.payload?.data?.chat?.id || -1;
	agent.add(setTemplate(responseMap.confirmResponse, {companyName :globalParameters.parameters['companyName.original'] , companyId: globalParameters.parameters.companyName, lastPrice: lastPrice })
	);
	agent.setContext(globalParameters);
};

module.exports = getCompanyName;

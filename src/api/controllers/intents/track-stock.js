'use strict';
const responseMap = require('../../utils/response-map');
const { getLastQuotedPrice } = require('../../services/kite/get-last-quoted-price');
const { setTemplate } = require('../../services/helpers');

const trackStock = async (agent) => {
	const globalParameters = agent.getContext('global-parameters');
	const lastPrice = await getLastQuotedPrice({instrument_token : globalParameters.parameters.companyName});
	agent.add(setTemplate(responseMap.confirmResponse, {companyName :globalParameters.parameters['companyName.original'] , companyId: globalParameters.parameters.companyName, lastPrice: lastPrice })
	);
};

module.exports = trackStock;

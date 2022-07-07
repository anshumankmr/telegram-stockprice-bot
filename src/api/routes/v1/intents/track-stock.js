'use strict';
const responseMap = require('../../../utils/response-map');
const { getLastQuotedPrice } = require('../../../services/kite/get-last-quoted-price');

const trackStock = async (agent) => {
	const globalParameters = agent.getContext('global-parameters');
	const lastPrice = await getLastQuotedPrice({instrument_token : globalParameters.parameters.companyName});
	agent.add(`${responseMap.confirmResponse}: ${globalParameters.parameters['companyName.original']} with the ID:${globalParameters.parameters.companyName} for which the last traded price was ${lastPrice}. Please provide the price you want an alert at.`);
};

module.exports = trackStock;

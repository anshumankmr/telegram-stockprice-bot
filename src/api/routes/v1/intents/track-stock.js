'use strict';
const responseMap = require('../../../utils/response-map');

const trackStock = async (agent) => {
	const globalParameters = agent.getContext('global-parameters');
	console.log(globalParameters.parameters);
	agent.add(`${responseMap.confirmResponse}: ${globalParameters.parameters['companyName.original']} with the ID:${globalParameters.parameters.companyName}. Please provide the price you want an alert at.`);
};

module.exports = trackStock;

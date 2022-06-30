'use strict';
const responseMap = require('../../../utils/response-map');

const getPriceForStock = async (agent) => {
	const globalParameters = agent.getContext('global-parameters');
	console.log(globalParameters.parameters);
	agent.add(`${responseMap.confirmPrice}: ${globalParameters.parameters.stockPrice}.Please give me your  Whatsapp  Number.`);
};

module.exports = getPriceForStock;

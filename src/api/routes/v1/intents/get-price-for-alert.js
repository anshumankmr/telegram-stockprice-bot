'use strict';
const responseMap = require('../../../utils/response-map');
const { setTemplate } = require('../../../services/helpers');

const getPriceForStock = async (agent) => {
	const globalParameters = agent.getContext('global-parameters');
	agent.add(setTemplate(responseMap.confirmPrice, { price : globalParameters.parameters.stockPrice}));
};

module.exports = getPriceForStock;

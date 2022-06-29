'use strict';
const responseMap = require('../../../utils/response-map');
const { kiteLoginHelper } = require('../../../services/kite/kite-login');

const trackStock = async (agent) => {
	const globalParameters = agent.getContext('global-parameters');
	agent.add(`${responseMap.confirmResponse}: ${globalParameters.parameters.companyName}`);
	kiteLoginHelper();
	// agent.setContext(globalParameters); 
};

module.exports = trackStock;

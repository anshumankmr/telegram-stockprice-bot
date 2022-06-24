'use strict';
const responseMap = require('../../../utils/response-map');
const { kiteLoginHelper } = require('../../../services/kite-login');

const trackStock = async (agent) => {
	// const globalParameters = {};
	agent.add(responseMap.confirmResponse);
	kiteLoginHelper();
	// agent.setContext(globalParameters); 
};

module.exports = trackStock;

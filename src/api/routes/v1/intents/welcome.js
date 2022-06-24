'use strict';
const responseMap = require('../../../utils/response-map');

const welcome = async (agent) => {
	const globalParameters = {};
	agent.add(responseMap.welcome);
	agent.setContext(globalParameters); 
};

module.exports = welcome;

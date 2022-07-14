'use strict';
const responseMap = require('../../utils/response-map');
const { context } = require('../../../config/vars');

const welcome = async (agent) => {
	const globalParameters = context;
	globalParameters.name = 'global-parameters';
	globalParameters.lifespan = 9999;
	globalParameters.parameters.telegramChatId = agent.originalRequest?.payload?.data?.chat?.id || -1;
	agent.add(responseMap.welcome);
	agent.setContext(globalParameters); 
};

module.exports = welcome;

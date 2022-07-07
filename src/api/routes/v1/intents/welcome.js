'use strict';
const responseMap = require('../../../utils/response-map');

const welcome = async (agent) => {
	const globalParameters = {
		'name': 'global-parameters',
		'lifespan': 9999, 
		'parameters': {}
	};
	globalParameters.parameters.telegramChatId = agent.originalRequest?.payload?.data?.chat?.id || -1;
	agent.add(responseMap.welcome);
	agent.setContext(globalParameters); 
};

module.exports = welcome;

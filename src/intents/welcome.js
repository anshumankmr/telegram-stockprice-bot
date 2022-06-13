'use strict';
const responseMap = require('../../utils/responseMap');

const welcome = async (agent) => {
    const globalParameters = {};
    agent.add(responseMap.welcome);
    agent.setContext(globalParameters); 
};

module.exports = welcome;

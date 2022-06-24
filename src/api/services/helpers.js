const _ = require('lodash');

const setTemplate = (response, values) => {
	const modifiedResponse =  _.template(response);
	const finalResponse = modifiedResponse(values);
	return finalResponse;
};


module.exports = {
	setTemplate: setTemplate,
};
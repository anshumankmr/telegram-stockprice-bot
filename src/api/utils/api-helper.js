const axios = require('axios');
const logger = require('../../config/logger');
module.exports.call = (requestOptions, requestHeaders = {}) => {
	try{
		const options = Object.assign({},requestOptions);
		options.json = true;
		options.headers = requestHeaders;
		return axios(options);
	}
	catch(err){
		logger.info('error',err.stack);
		return {};
	}
};
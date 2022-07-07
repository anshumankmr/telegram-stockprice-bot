const logger = require('../../config/logger');
const axios = require('axios');

const retryWrapper = (axios, options) => {
	const max_time = options.retry_time;
	let counter = 0;
	axios.interceptors.response.use(null,async (error) => {
		const config = error.config;
		const { saveAccessToken } = require('../services/kite/save-access-token');
		if (counter < max_time && error.response.status !== 200) {
			counter++;
			await saveAccessToken();
			return new Promise((resolve) => {
				resolve(axios(config));
			});
		}
		return Promise.reject(error);
	});
};

module.exports.call = (requestOptions, requestHeaders = {}) => {
	try{
		retryWrapper(axios, {retry_time: 1});
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
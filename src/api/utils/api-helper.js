const logger = require('../../config/logger');
const axios = require('axios');

const retryWrapper = (axios, options) => {
	const max_time = options.retry_time;
	axios.interceptors.response.use(null,async (error) => {
		const config = error.config;
		const { saveAccessToken } = require('../services/kite/save-access-token');
		logger.log('info','API Call Failed');
		if (config.counter === undefined){
			config.counter = 0;
		}
		if (config.counter < max_time && error.response.status !== 200) {
			config.counter++;
			const data = await saveAccessToken();
			config.headers.Authorization = `token ${data['api_key']}:${data['access_token']}`;
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
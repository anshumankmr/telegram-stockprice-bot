const process = require('process');

module.exports = {
	environment: process.env.SERVICE || 'localhost',
};
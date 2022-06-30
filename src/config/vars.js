
// import .env variables
require('dotenv').config();
module.exports = {
	env: process.env.NODE_ENV || 'local',
	port: process.env.PORT || 3001,
	jwtSecret: process.env.JWT_SECRET,
	jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
	mongo: {
		uri: process.env.NODE_ENV === 'local' ? process.env.MONGO_URI_TESTS : process.env.MONGO_URI,
	},
	logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
	whatsappNumber:process.env.WHATSAPP_NUMBER ,
	twilio:{
		accountSid: process.env.ACCOUNT_SID,
		authToken: process.env.ACCOUNT_AUTH_TOKEN
	},
	emailConfig: {
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		username: process.env.EMAIL_USERNAME,
		password: process.env.EMAIL_PASSWORD,
	},
};

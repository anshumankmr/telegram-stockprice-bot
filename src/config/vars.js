
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
	freeTicks: process.env.FREE_TICKS || 2,
	telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
	context:{
		'name': '',
		'lifespan': 1, 
		'parameters': {}
	},
	sql:{
		user:process.env.DB_USERNAME,
		password:process.env.DB_PASSWORD,
		host:process.env.DB_HOST,
		port:process.env.DB_PORT,
		database:process.env.DB_DATABASE,
		models: [
			{
				name: 'Users',
				path: require('../api/models/sql/Users')
			},
			{
				name: 'Orders',
				path: require('../api/models/sql/Orders')
			}
		],
		testMode: process.env.DB_TEST_MODE
	},
	ticks: {
		PREMIUM: 1000,
		NORMAL: 10
	}
};

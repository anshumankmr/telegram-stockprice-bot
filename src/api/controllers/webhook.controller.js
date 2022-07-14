const welcome = require('./intents/welcome');
const trackStock = require('./intents/track-stock');
const getPriceForStock = require('./intents/get-price-for-alert');
const getPhoneNumber = require('./intents/get-phone-number');
const getNotificationChannel = require('./intents/get-notification-channel');
const { WebhookClient } = require('dialogflow-fulfillment');

function createIntentMap()
{
	const intentMap = new Map();
	intentMap.set('Default Welcome Intent', welcome);
	intentMap.set('Track Stock', trackStock);
	intentMap.set('Get Price For Alert',getPriceForStock);
	intentMap.set('Get Phone Number',getPhoneNumber);
	intentMap.set('Choose Notification Channel',getNotificationChannel);
	return intentMap;
}

const wbhkController = (req,res) =>
{
	try {
		const agent = new WebhookClient({ request: req, response: res });
		const intentMap = createIntentMap();
		agent.handleRequest(intentMap);
		return agent;
	}
	catch(e)
	{
		console.error(e);
	}
};

module.exports = { wbhkController };
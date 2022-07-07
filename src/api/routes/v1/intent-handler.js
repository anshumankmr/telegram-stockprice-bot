const { WebhookClient } = require('dialogflow-fulfillment');
const createIntentMap = require('./intent-mapper');

const intentHandler = (req,res) =>
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

module.exports = { intentHandler };
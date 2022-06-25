const welcome = require('./intents/welcome');
const trackStock = require('./intents/track-stock');

function createIntentMap()
{
	const intentMap = new Map();
	intentMap.set('Default Welcome Intent', welcome);
	intentMap.set('Track Stock', trackStock);
	return intentMap;
}
module.exports = createIntentMap;
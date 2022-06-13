const welcome = require('./intents/welcome');

function createIntentMap()
{
 const intentMap = new Map();
 intentMap.set('Default Welcome Intent', welcome);
 return intentMap;
}
module.exports = createIntentMap;
const {twilio} = require('../../../config/vars');
const accountSid = twilio.accountSid; 
const authToken = twilio.authToken; 
const client = require('twilio')(accountSid, authToken); 
 
async function sendWhatsAppTextMessage(body){
	const messageId = await client.messages.create(body);
	console.log(messageId);
	return messageId;
}

module.exports = {sendWhatsAppTextMessage};

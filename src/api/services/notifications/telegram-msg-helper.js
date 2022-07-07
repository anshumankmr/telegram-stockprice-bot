const TelegramBot = require('node-telegram-bot-api');
const { telegramBotToken } = require('../../../config/vars');

const bot = new TelegramBot(telegramBotToken, { polling: false });

const sendTelegramTextMessage = (message, chatId = '843439131') => {
	try {
		bot.sendMessage(chatId, message, {parse_mode: 'html'});
	} catch (err) {
		console.log('Something went wrong when trying to send a Telegram notification', err);//remove console.log()
	}
};

module.exports = { sendTelegramTextMessage };

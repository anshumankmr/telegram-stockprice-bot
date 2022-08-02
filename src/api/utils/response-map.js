'use strict';

module.exports = {
	welcome: 'Hello there!!! Welcome to Stock Trading Alerts Bot. This Bot will help you provide the alerts for a stock\'s value during while trading during the intraday. Currently, it supports Whatsapp and Telegram only.Please let me know a company that you want to track.Currently, we are invite only and we are working on adding a sign up process.',
	confirmResponse: 'Sure, I am going to  help with tracking the stock : <%= companyName %> with the Instrument ID:<%= companyId %>. Please note that the last traded price was <%= lastPrice %>. However, before we can proceed, I will need to verify your account in our database, so please provide us your phone number. Currently, we are invite only and we are working on adding a sign up process.',
	providePrice:'Please provide the price you want an alert at.',
	confirmPrice: 'Okay. The price you have chosen is <%= price %>. Please let me know how  you want to be notified. Currently supported channels are Telegram and Whatsapp and we are working on supporting E-Mail next.',
	getWhatsappNumber: 'Okay. You choose <%= channel %>. Please give me your Whatsapp Number. Please note that currently only Indian phone numbers are supported.',
	confirmWhatsappNumber: 'Okay. The Whatsapp number that you have provided is <%= number %>. I am now going to create a ticker to provide you real time alerts.',
	confirmNumber: 'Okay. The number that you have provided is <%= number %>.',
	confirmTickerTelegram: 'Okay. The alerts will be sent via a push notification on this thread',
	platformNotSupported: 'Currently, the platform <%= channel %> is not supported. Please try again.',
	stockTickerMessage: 'Price has reached for <%= price %> for Stock for the Company <%= company %> with ID: <%= id %>.',
	invalidCompanyName:'I am sorry. I didn\'t get what company you were looking to know about. Can you try providing the company name once again.'
};
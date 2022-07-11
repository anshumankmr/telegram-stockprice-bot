'use strict';

module.exports = {
	welcome: 'Hello there!!! Welcome to Stock Trading Alerts Bot. This Bot will help you provide the alerts for a stock\'s value during while trading during the intraday. Currently, it supports Whatsapp and Telegram only.Please let me know a company that you want to track.',
	confirmResponse: 'Sure, I am going to  help with tracking the stock : <%= companyName %> with the Instrument ID:<%= companyId %>. Please note that the last traded price was <%= lastPrice %>. Please provide the price you want an alert at.',
	confirmPrice: 'Okay. The price you have chosen is <%= price %>. Please let me know how  you want to be notified. Currently supported channels are Telegram and Whatsapp and we are working on supporting E-Mail next.',
	getWhatsappNumber: 'Okay. You choose <%= channel %>. Please give me your Whatsapp Number. Please note that currently only Indian phone numbers are supported.',
	confirmNumber: 'Okay. The number you have provided is <%= number %>. I am now going to create a ticker to provide you real time alerts.',
	platformNotSupported: 'Currently, the platform <%= channel %> is not supported. Please try again.',
	stockTickerMessage: 'Price has reached for <%= price %> for Stock for the Company <%= company %> with ID: <%= id %>.'
};
'use strict';

module.exports = {
	welcome: 'Hello there!!! Welcome to Stock Trading Alerts Bot. This Bot will help you provide the alerts for a stock\'s value during while trading during the intraday. Currently, it supports Whatsapp and Telegram only. ',
	confirmResponse: 'Sure, I am going to  help with tracking the stock : <%= companyName %> with the Instrument ID:<%= companyId %>. Please note that the last traded price was <%= lastPrice %>. Please provide the price you want an alert at.',
	confirmPrice: 'Okay. The price you have chosen is <%= price %>. Please give me your  Whatsapp  Number.',
	confirmNumber: 'Okay. The number you have provided is <%= number %>. I am now going to create a ticker to provide you real time alerts'
};
require('dotenv').config();
const { Sequelize } = require('sequelize');
const { sql } = require('../vars');

const { user, password, host, port , database} = sql;
const db = new Sequelize(database, user, password, {
	host,
	port,
	dialect: 'postgres',
	logging: false,
	sslmode:'require',
	dialectOptions:{
		ssl: true
	}
});
module.exports = { db };

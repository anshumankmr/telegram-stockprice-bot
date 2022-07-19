const { sql } = require('../../../config/vars');
const { db } = require('../../../config/databases/sequelize');

let sqlModels = {};
const initializeModel = async fn => {
	let model = fn.path(db);
	await model.sync();
	sqlModels[fn.name] = model;
};

module.exports = async () => {
	const models = sql.models;
	await Promise.all(models.map(initializeModel));
	return sqlModels;
};
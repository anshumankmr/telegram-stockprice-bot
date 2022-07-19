const initializeSqlModels = require('../../models/sql');

let sqlModels = (async function ()  {
	sqlModels = await initializeSqlModels();
	return sqlModels;
})();

const findAllRows = async (modelName) =>  {
	await sqlModels;
	const rows = await sqlModels[modelName].findAll();
	return rows;
};

module.exports = {findAllRows};
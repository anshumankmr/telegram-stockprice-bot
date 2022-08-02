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

const findOneRow = async (modelName, columnName,  keyValue) => {
	await sqlModels;
	const rows = await sqlModels[modelName].findOne({ where: { [columnName] : keyValue } });
	if (rows === null){
		return null;
	} 
	return rows;
};

const incrementColumnValue = async (modelName,columnName,keyValue,incrementColumnName, amount) => {
	await sqlModels;
	const rows = sqlModels[modelName].increment(incrementColumnName, { by: amount, where: { [columnName]: keyValue }});
	if (rows === null){
		return null;
	} 
	return rows;
};

const saveData = async (modelName,data) => {
	await sqlModels;
	await sqlModels[modelName].create(data);
};

const updateColumnValue = async (modelName,columnName,keyValue,updateColumnName, value) => {
	await sqlModels;
	const rows = sqlModels[modelName].update(
		{
			[updateColumnName]:value
		}
		, 
		{
			where: { [columnName]: keyValue }
		}
	);
	if (rows === null){
		return null;
	} 
	return rows;
};

module.exports = {findAllRows,findOneRow,incrementColumnValue,saveData,updateColumnValue};
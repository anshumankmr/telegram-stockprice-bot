const Sequelize = require('sequelize');

module.exports = (db) => {
	const Users = db.define('Users', {
		id: {
			field: 'id',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		phone_number: {
			type: Sequelize.STRING,
			allowNull: false
		},
		data: {
			type: Sequelize.JSON,
			allowNull: false
		},
		tier: {
			type: Sequelize.STRING,
			allowNull:false,
			defaultValue: 'FREE'
		},
		ticks: {
			type: Sequelize.INTEGER,
			allowNull:false,
			defaultValue:0
		}
	},
	{
		timestamps: false
	}
	);
	return Users;
};
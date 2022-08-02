const Sequelize = require('sequelize');

module.exports = (db) => {
	const Users = db.define('Orders', {
		id: {
			field: 'id',
			primaryKey: true,
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
		},
		phone_number: {
			type: Sequelize.STRING,
			allowNull: false
		},
		data: {
			type: Sequelize.JSON,
			allowNull: false
		},
		status: {
			type:   Sequelize.ENUM,
			allowNull:false,
			defaultValue: 'PENDING',
			values: ['PENDING','FULFILLED']// can be saved in constants.js
		},
	},
	{
		timestamps: false
	}
	);
	return Users;
};
const Sequelize = require('sequelize');

module.exports = (db) => {
	const Users = db.define('Users', {
		id: {
			field: 'id',
			primaryKey: true,
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
		},
		phone_number: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		tier: {
			type:   Sequelize.ENUM,
			allowNull:false,
			defaultValue: 'FREE',
			values: ['FREE','PREMIUM']
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
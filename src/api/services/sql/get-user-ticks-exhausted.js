const { sql,ticks } = require('../../../config/vars');
const { findOneRow, incrementColumnValue} = require('./sql-helpers');

const getUserTicksExhausted = async (phoneNumber) =>  {
	let row = await findOneRow('Users','phone_number',phoneNumber);
	row = row.dataValues;
	if (sql.testMode === 'true'){
		return false;
	}
	let flag = false;
	switch(row.tier){
	case 'PREMIUM':
		flag = row.ticks < ticks.PREMIUM;
		break;
	case 'NORMAL':
		flag = row.ticks < ticks.NORMAL;
		break;
	default:
		flag = false;
	}
	if (flag){
		incrementColumnValue('Users','phone_number',phoneNumber,'ticks',1);
	}
	return flag;
};

module.exports = {getUserTicksExhausted};
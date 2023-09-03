const mongoose = require('mongoose');
const { bold } = require("chalk");
/**
 * @param {string} db
 * @param {import('../index').connectOptions} options
 */

async function connect(db, options = []) {
	if (!db) throw new Error('[XP] Database URL was not provided');
	mongoose.set('strictQuery', true);
  
	mongoose.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});


	if (options.notify === false) return;
	else return  console.log(bold.blue("[ Xp Database  Conected ]"));
	;
}

module.exports = connect;
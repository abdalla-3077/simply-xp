/* eslint-disable linebreak-style */
const levels = require('../src/models/level.js');

/**
 * @param {string} userID
 * @param {string} guildID
 */

async function resetAll(guildID) {

	if (!guildID) throw new Error('[XP] User ID was not provided.');
	const Count = await levels.count({guild: guildID });
	await levels
		.deleteMany({ guild: guildID })
		.catch((err) => {
			throw new Error(err);
		});
		
	return { guild: guildID, count: Count };
}

module.exports = resetAll;

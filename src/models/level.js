const mongoose = require('mongoose');

const Levelz = new mongoose.Schema({
	user: { type: String },
	guild: { type: String },
	xp: { type: Number, default: 0 },
	level: { type: Number, default: 0 }
});

module.exports = mongoose.model('Server-Xp', Levelz);

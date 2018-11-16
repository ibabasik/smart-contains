const _  = require('lodash');

module.exports = function (str, sub) {
	if (!sub){
		return !str;
	}
	if (!str){
		return false;
	}
	const subs = sub.toLowerCase().split(/\s+/);
	const low = str.toLowerCase();
	const abbr = _.map(low.replace(/[^a-z0-9а-я\s]+/g, " ").split(/\s+/), function (w) { return w[0]; }).join('');
	return _.every(subs, function (piece) {
		return low.indexOf(piece.toLowerCase()) != -1 || abbr.indexOf(piece) != -1;
	})
};
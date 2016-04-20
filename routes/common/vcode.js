var seccode = require('../../modules/seccode')

module.exports = function (req, res, next) {
	res.send( seccode.set() )
}
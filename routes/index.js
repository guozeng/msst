module.exports = {
	config: {
		type: 'get'
	}, 
	callback: function (req, res, next) {
		res.send('index')
	}
}
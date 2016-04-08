var reg = require('./routes/reg')

module.exports = function (app) {
	app.get('/reg', reg.page)
	app.get('/reg/vcode', reg.vcode)
}
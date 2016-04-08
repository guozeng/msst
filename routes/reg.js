var seccode = require('../modules/seccode')

function page (req, res, next) {
	res.render('reg', {title: '用户登录'})
}

function vcode (req, res, next) {
	res.send( seccode.set() )
}

exports.page = page
exports.vcode = vcode
var fs = require('fs')
var path = require('path')

var filepathes = []

function getFilesPath (rootdir) {
	try {
		var rets = fs.readdirSync(rootdir)
		for (var i = 0, len = rets.length; i < len; i ++) {
			var temp = rets[i]
			var tpath = path.join(rootdir, temp)
			var stat = fs.statSync(tpath)

			if (stat.isDirectory()) {
				getFilesPath(tpath)
			} else {
				filepathes.push(tpath)
			}
		}
	} catch (e) {
		throw new Error(e.message)
	}
}

getFilesPath(path.join(__dirname, 'routes'))

// console.log(filepathes)

function createRoutes(app) {
	var i = 0,
		len = filepathes.length
	for (; i < len; i ++) {
		var rpath = filepathes[i].replace(path.join(__dirname, 'routes'), '')
		var rurl = rpath.replace(/\.js$/, '')
		var srurl = rurl.replace(/index$/, '')

		var ro = require('./routes' + rpath)
		var cb = null
		var config = null
		var type = 'get'

		if (typeof ro === 'function') {
			cb = ro
		} else {
			config = ro.config || {}
			type = config.type || 'get'
			cb = ro.callback || function () {}
		}
		app[type](srurl, cb)
		app[type](rurl, cb)
	}
}
// 自动构造路由
module.exports = createRoutes

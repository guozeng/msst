var async = require('async')
var fs = require('fs')

/*async.map(['index.js', 'package.json', 'node_modules/express/History.md'], fs.stat, function (errs, results) {
	console.log(results)
})*/

async.filter(['index.js', 'package.json', 'node_modules/express/History.md'], fs.exists, function (results) {
	console.log(results)
})
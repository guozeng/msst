var express = require('express')
var path = require('path')
var routes = require('./routes')

var app = express()

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')
app.engine('.html', require( 'ejs' ).__express)
app.use(express.static(path.join(__dirname, 'public')))

// routes
routes(app)

app.get('*', function (req, res) {
	res.send('404 not found')
})

app.listen(app.get('port'), function () {
	console.log('express server is running at port:' + app.get('port'))
})




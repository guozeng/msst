var express = require('express')
var app = express()

app.use(express.static('./public'))

app.set('views', './views/')
app.set('view engine', 'html')
app.engine( '.html', require( 'ejs' ).__express )

app.get('/login', function (req, res) {
	res.render('login', {title: '用户登录'})
})

app.get('/reg', function (req, res) {
	res.render('reg', {title: '用户注册'})
})

var captchapng = require('captchapng')
app.get('/vcode', function (req, res) {
	var p = new captchapng(80,30,parseInt(Math.random()*9000+1000)) // width,height,numeric captcha 
        p.color(0, 0, 0, 0)  // First color: background (red, green, blue, alpha) 
        p.color(80, 80, 80, 255) // Second color: paint (red, green, blue, alpha) 
 
        var img = p.getBase64()
        var imgbase64 = new Buffer(img,'base64')
        res.send(imgbase64)
})

app.listen(3000, function () {
	console.log('server is running at port 3000')
})
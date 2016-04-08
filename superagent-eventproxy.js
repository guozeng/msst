/**
 * 知识点：
 * 1. superagent异步请求
 * 2. cheerio nodejs版本的jquery
 * 3. eventproxy 控制并发
 */

var url = require('url')

var express = require('express')
var app = express()

var superagent = require('superagent')
var cheerio = require('cheerio')
var eventproxy = require('eventproxy')

function requestComment (urls, res) {
	// 并发发起40个请求
	var ep = new eventproxy()
	var count = 0
	// ep 监听40次并发请求，所有请求完成后执行回调
	ep.after('got_comment', urls.length, function (rets) {
		res.send(rets)
	})
	urls.forEach(function (item) {
		superagent.get(item.href).
			end(function (serr, sres) {
				var text = sres.text
				var $ = cheerio.load(text)
				var comment = $('#reply1 .markdown-text').text()
				item.comment = comment
				ep.emit('got_comment', item)

				console.log(count + '===>' + comment)
				count ++
			})
	})
}

app.get('/', function (req, res, next) {
	var turl = 'https://cnodejs.org/'

	superagent.get(turl).
		end(function (serr, sres) {
			if (serr) {
				next(serr)
			}
			var text = sres.text
			var $ = cheerio.load(text)
			var items = []

			$('#topic_list .topic_title').each(function (index, el) {
				var temp = {}
				temp.href = url.resolve(turl, $(el).attr('href'))
				temp.title = $(el).attr('title')
				items.push(temp)
			})

			requestComment(items, res)
		})
})

app.get('*', function (req, res) {
	res.send('404 not found')
})

app.listen(3000, function () {
	console.log('service is running at port 3000')
})
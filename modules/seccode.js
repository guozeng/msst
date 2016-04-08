var captchapng = require('captchapng')

/**
 * 生成验证码图片
 * @param  number width  图片宽度
 * @param  number height 图片高度
 * @return img object        
 */
module.exports = {
	code: 0,
	set: function (width, height) {
		width = width || 80
		height = height || 30
		this.code = parseInt(Math.random()*9000+1000)
		// width,height,numeric captcha 
		var p = new captchapng(width, height, this.code)
		// First color: background (red, green, blue, alpha) 
		p.color(0, 0, 0, 0)
		// Second color: paint (red, green, blue, alpha) 
		p.color(80, 80, 80, 255)

		var img = p.getBase64()
		var imgbase64 = new Buffer(img,'base64')

		return imgbase64
	},
	get: function () {
		return this.code
	}
}
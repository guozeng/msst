/*var BtInput = React.createClass({
	handleBlur: function (event) {
		var DOMNode = this.refs.input.getDOMNode()
		var idstr = this.props.id
		var flag = true
		var val = DOMNode.value.trim()

		if (val.length === 0) {
			return
		}

		if (idstr === 'email') {
			flag =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(val)
		} else if (idstr === 'passwd') {
			flag = /^\w{6,16}$/.test(val)
		} else if (idstr === 'passwd2') {

		}

		if (!flag) {
			$(DOMNode).popover('show')
		}
	},
	handleFocus: function (event) {
		var DOMNode = this.refs.input.getDOMNode()
		$(DOMNode).popover('hide')
	},
	render: function () {
		return (
			<div className="form-group">
			    <label htmlFor={this.props.id}>{this.props.label}</label>
			    <input type={this.props.type} 
			    			 className="form-control" 
			    			 id={this.props.id} 
			    			 placeholder={this.props.placeholder}
			    			 onBlur={this.handleBlur}
			    			 onFocus={this.handleFocus}
			    			 ref="input" />
			</div>
		);
	},
	componentDidMount: function () {
		var DOMNode = this.refs.input.getDOMNode()
		var content = ''
		var idstr = this.props.id
		if (idstr === 'email') {
			content = '邮箱地址格式不正确'
		} else if (idstr === 'passwd') {
			content = '密码不符合要求'
		} else if (idstr === 'passwd2') {
			content = '密码输入不一致'
		}
		// 初始化提示框
		$(DOMNode).popover({
			content: content,
			trigger: 'manual',
			placement: 'left',
			template: '<div class="popover" role="tooltip">' +
							  '<div class="arrow"></div><h3 class="popover-title"></h3>' +
							  '<div class="popover-content cred"></div></div>'
		})
	}
});*/
var BootInput = React.createClass({displayName: "BootInput",
	getInitialState: function () {
		return {
			errTip: ''
		}
	},
	handleBlur: function (event) {
		var DOMNode = this.refs.input.getDOMNode()
		var verifyFn =  this.props.verifyFn
		debugger
		if (verifyFn) {
			this.setState({
				errTip: '邮箱格式不正确'
			})
			verifyFn.call(null, DOMNode, this)
		}
	},
	handleFocus: function (event) {
		var DOMNode = this.refs.input.getDOMNode()
		$(DOMNode).popover('hide')
	},
	render: function () {
		return (
			React.createElement("div", {className: "form-group"}, 
			    React.createElement("label", {htmlFor: this.props.id}, this.props.label), 
			    React.createElement("input", {type: this.props.type, 
    			 className: "form-control", 
    			 id: this.props.id, 
    			 ref: "input", 
    			 onBlur: this.handleBlur, 
    			 onFocus: this.handleFocus, 
    			 "data-content": this.state.errTip, 
    			 placeholder: this.props.placeholder})
			)
		)
	},
	componentDidMount: function () {
		var DOMInput = this.refs.input.getDOMNode()
		// 初始化提示框
		$(DOMInput).popover({
			// content: this.state.errTip,
			trigger: 'manual',
			placement: 'left',
			template: '<div class="popover" role="tooltip">' +
					  '<div class="arrow"></div><h3 class="popover-title"></h3>' +
					  '<div class="popover-content cred"></div></div>'
		})
	}
})

var EmailInput = React.createClass({displayName: "EmailInput",
	verifyFn: function (DOMInput, child) {
		var $input = $(DOMInput)
		$input.popover('show')
	},
	render: function () {
		return (
			React.createElement(BootInput, {id: "email", 
			 label: "邮箱地址", 
			 type: "email", 
			 verifyFn: this.verifyFn, 
			 placeholder: "请输入您常用的邮箱地址"})
		)
	},
	componentDidMount: function () {
	}
})

var PasswdInput = React.createClass({displayName: "PasswdInput",
	render: function () {
		return (
			React.createElement(BootInput, {id: "passwd", label: "密码", type: "password", placeholder: "6-16位的字母数字下划线"})
		)
	}
})

var Passwd2Input = React.createClass({displayName: "Passwd2Input",
	render: function () {
		return (
			React.createElement(BootInput, {id: "passwd2", label: "确认密码", type: "password", placeholder: "确认您刚才输入的密码"})
		)
	}
})

var Vcode = React.createClass({displayName: "Vcode",
	changeVcode: function (event) {
		this.refs.vimg.getDOMNode().src = "/common/vcode?t=" + new Date().getTime()
	},
	render: function () {
		return (
			React.createElement("div", {className: "form-group"}, 
				React.createElement("label", {htmlFor: "vcode"}, "验证码"), 
			    React.createElement("div", {className: "g-cf"}, 
			      React.createElement("div", {className: "g-fl g-pw70"}, 
			        React.createElement("input", {type: "text", className: "form-control", id: "vcode", placeholder: "请输入右侧验证码"})
			      ), 
			      React.createElement("a", {href: "javascript:;", 
			      	 title: "点击换一个", 
			      	 className: "g-fr reg-vcode", 
			      	 onClick: this.changeVcode}, React.createElement("img", {ref: "vimg", src: "/common/vcode"}))
			    )
			)
		);
	}
});

var SubmitBtn = React.createClass({displayName: "SubmitBtn",
	render : function () {
		return (
			React.createElement("button", {type: "submit", className: "btn btn-primary btn-block", disabled: "disabled"}, "注册")
		)
	}
})

var RegForm = React.createClass({displayName: "RegForm",
	render: function () {
		return (
			React.createElement("form", null, 
				React.createElement(EmailInput, null), 
				React.createElement(PasswdInput, null), 
				React.createElement(Passwd2Input, null), 
				React.createElement(Vcode, null), 
				React.createElement(SubmitBtn, null)
			)
		);
	}
});

React.render(React.createElement(RegForm, null), document.getElementById('regFormContainer'));

	

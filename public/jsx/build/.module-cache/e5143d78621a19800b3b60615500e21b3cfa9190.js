var BtInput = React.createClass({displayName: "BtInput",
	render: function () {
		return (
			React.createElement("div", {className: "form-group"}, 
			    React.createElement("label", {htmlFor: this.props.id}, this.props.label), 
			    React.createElement("input", {type: this.props.type, className: "form-control", id: this.props.id, placeholder: this.props.placeholder})
			)
		);
	}
});


var RegForm = React.createClass({displayName: "RegForm",
	render: function () {
		return (
			React.createElement("form", null, 
				React.createElement(BtInput, {id: "email", label: "邮箱地址", type: "email", placeholder: "请输入您常用的邮箱地址"}), 
				React.createElement(BtInput, {id: "passwd", label: "密码", type: "email", placeholder: "请输入您常用的邮箱地址"})
			)
		);
	}
});



React.render(React.createElement(RegForm, null), document.getElementById('testreact'));

	
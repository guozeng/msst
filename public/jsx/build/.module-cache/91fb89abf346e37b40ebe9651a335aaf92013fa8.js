var BtInput = React.createClass({displayName: "BtInput",
	render: function () {
		return (
			React.createElement("div", {className: "form-group"}, 
			    React.createElement("label", {for: "exampleInputEmail1"}, "邮箱地址"), 
			    React.createElement("input", {type: "email", className: "form-control", id: "exampleInputEmail1", placeholder: "请输入您常用的邮箱地址"})
			)
		);
	}
});


var RegForm = React.createClass({displayName: "RegForm",
	render: function () {
		return (
			React.createElement("form", null, 
				React.createElement(BtInput, null)
			)
		);
	}
});



React.render(React.createElement(RegForm, null), document.getElementById('testreact'));

	
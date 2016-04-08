var EmailInput = React.createClass({displayName: "EmailInput",
	render: function () {
		return (
			React.createElement("div", {className: "form-group"}, 
			    React.createElement("label", {for: "exampleInputEmail1"}, "邮箱地址")
			)
		);
	}
});


var RegForm = React.createClass({displayName: "RegForm",
	render: function () {
		return (
			React.createElement("form", null, 
				React.createElement(EmailInput, null)
			)
		);
	}
});



React.render(React.createElement(RegForm, null), document.getElementById('testreact'));

	
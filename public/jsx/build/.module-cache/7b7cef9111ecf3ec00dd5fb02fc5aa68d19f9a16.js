var BtInput = React.createClass({displayName: "BtInput",
	render: function () {
		return (
			React.createElement("div", {className: "form-group"}, 
			    React.createElement("label", {for: "{this.props.id}"}, this.props.label), 
			    React.createElement("input", {type: "{this.props.type}", className: "form-control", id: "{this.props.id}", placeholder: "{this.props.placeholder}"})
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

	
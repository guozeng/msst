var Test = React.createClass({displayName: "Test",
	render: function () {
		return (
			React.createElement("div", null, 
				"ddddda"
			)
		);
	}
});

React.render(React.createElement(Test, null), document.getElementById('testreact'));

	
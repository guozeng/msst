var Test = React.createClass({displayName: "Test",
	render: function () {
		return (
			React.createElement("div", null, 
				"ddddd"
			)
		);
	}
});

React.render(React.createElement(Test, null), document.getElementById('testreact'));

	
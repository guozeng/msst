var Test = React.createClass({displayName: "Test",
	render: function () {
		return (
			React.createElement("div", null, 
				React.createElement("img", {src: ""})
			)
		);
	}
});

React.render(React.createElement(Test, null), document.getElementById('testreact'));

	
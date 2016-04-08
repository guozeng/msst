var Test = React.CreateClass({
	render: function () {
		return (
			React.createElement("div", null, 
				"hello react"
			)
		);
	}
});

React.render(React.createElement(Test, null), document.getElementById('testreact'))
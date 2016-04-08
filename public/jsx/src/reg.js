var BtInput = React.createClass({
	render: function () {
		return (
			<div className="form-group">
			    <label htmlFor={this.props.id}>{this.props.label}</label>
			    <input type={this.props.type} className="form-control" id={this.props.id} placeholder={this.props.placeholder} />
			</div>
		);
	}
});

var Vcode = React.createClass({
	render: function () {
		return (
			<div>
				<label htmlFor="vcode">验证码</label>
			    <div className="g-cf">
			      <div className="g-fl g-pw70">
			        <input type="text" className="form-control" id="vcode" placeholder="验证码" />
			      </div>
			      <a href="javascript:;" title="点击换一个" className="g-fr reg-vcode"><img src="/vcode" /></a>
			    </div>
			</div>
		);
	}
});


var RegForm = React.createClass({
	render: function () {
		return (
			<form>
				<BtInput id="email" label="邮箱地址" type="email" placeholder="请输入您常用的邮箱地址" />
				<BtInput id="passwd" label="密码" type="password" placeholder="请输入您用于登录的密码" />
				<BtInput id="passwd2" label="确认密码" type="password" placeholder="请再次输入您用于登录的密码" />
				<div class="form-group">
					<Vcode />
				</div>
			</form>
		);
	}
});



React.render(<RegForm />, document.getElementById('regFormContainer'));

	
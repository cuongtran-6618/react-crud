import React, { Component } from "react";

export class AddUser extends Component {
	state = {
		name: "",
		email: "",
		phone: "",
	};

	handleSubmitForm = (e) => {
		e.preventDefault();
		this.props.onCreateUser(this.state);

		// clear form after submit
		this.clearForm();
	};

	clearForm() {
		this.setState({
			name: "",
			email: "",
			phone: "",
		});

		this.nameInput.value = "";
		this.emailInput.value = "";
		this.phoneInput.value = "";
	}

	handleOnChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<div className="row white">
				<form onSubmit={this.handleSubmitForm} className="">
					<div className="col s3">
						<input
							name="name"
							placeholder="Full name"
							onChange={this.handleOnChange}
							ref={(node) => (this.nameInput = node)}
							className="browser-default"
							type="text"
						/>
					</div>
					<div className="col s3">
						<input
							name="email"
							placeholder="Email address"
							onChange={this.handleOnChange}
							ref={(node) => (this.emailInput = node)}
							className="browser-default"
							type="text"
						/>
					</div>
					<div className="col s3">
						<input
							name="phone"
							placeholder="Phone number"
							onChange={this.handleOnChange}
							ref={(node) => (this.phoneInput = node)}
							className="browser-default"
							type="text"
						/>
					</div>
					<div className="col s3">
						<button className="right" type="submit">
							Add new user
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddUser;

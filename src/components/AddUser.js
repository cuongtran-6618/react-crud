import React, { Component } from "react";

export class AddUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			phone: "",
		};
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.clearForm = this.clearForm.bind(this);
	}

	handleSubmitForm(e) {
		e.preventDefault();
		this.props.onCreateUser(this.state);

		// clear form after submit
		this.clearForm();
	}

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

	handleOnChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
		let nameInput, emailInput, phoneInput;
		return (
			<div className="row white">
				<form onSubmit={this.handleSubmitForm} className="col s12">
					<div className="input-field col s3">
						<input
							name="name"
							placeholder="Full name"
							onChange={this.handleOnChange}
							ref={(node) => (this.nameInput = node)}
						/>
					</div>
					<div className="input-field col s3">
						<input
							name="email"
							placeholder="Email address"
							onChange={this.handleOnChange}
							ref={(node) => (this.emailInput = node)}
						/>
					</div>
					<div className="input-field col s3">
						<input
							name="phone"
							placeholder="Phone number"
							onChange={this.handleOnChange}
							ref={(node) => (this.phoneInput = node)}
						/>
					</div>
					<div className="input-field col s3">
						<button
							className="btn-small waves-effect waves-light right"
							type="submit"
						>
							Add new user
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddUser;

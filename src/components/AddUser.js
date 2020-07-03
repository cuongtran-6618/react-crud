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
			<div>
				<form onSubmit={this.handleSubmitForm}>
					<input
						name="name"
						placeholder="fullname"
						onChange={this.handleOnChange}
						ref={(node) => (this.nameInput = node)}
					/>
					<input
						name="email"
						placeholder="email"
						onChange={this.handleOnChange}
						ref={(node) => (this.emailInput = node)}
					/>
					<input
						name="phone"
						placeholder="phone"
						onChange={this.handleOnChange}
						ref={(node) => (this.phoneInput = node)}
					/>
					<button type="submit">Add new user</button>
				</form>
			</div>
		);
	}
}

export default AddUser;

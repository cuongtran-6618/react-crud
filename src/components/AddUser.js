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
			name: ([...this.state.name] = ""),
			email: ([...this.state.email] = ""),
			phone: ([...this.state.phone] = ""),
		});
	}

	handleOnChange = (e) => {
		this.setState({
			[e.target.name]: ([...this.state[e.target.name]] = e.target.value),
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
							value={this.state.name}
							className="browser-default"
							type="text"
						/>
					</div>
					<div className="col s3">
						<input
							name="email"
							placeholder="Email address"
							onChange={this.handleOnChange}
							className="browser-default"
							value={this.state.email}
							type="text"
						/>
					</div>
					<div className="col s3">
						<input
							name="phone"
							placeholder="Phone number"
							onChange={this.handleOnChange}
							className="browser-default"
							value={this.state.phone}
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

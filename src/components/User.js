import React, { Component } from "react";
import PropTypes from "prop-types";
import { users } from "../databases/fake/users";

export class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.user.id,
			name: this.props.user.name,
			email: this.props.user.email,
			phone: this.props.user.phone,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleEditUser = this.handleEditUser.bind(this);
		this.handleDeleteUser = this.handleDeleteUser.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleEditUser(e) {
		console.log("edit button clicked");
		this.props.onEditUser(this.state);
	}

	handleDeleteUser(e) {
		console.log("delete button clicked");
		this.props.onDeleteUser(this.state.id);
	}

	render() {
		const { id, name, email, phone } = this.props.user;

		return (
			<tr>
				<td>
					<input name="name" value={name} onChange={this.handleChange} />
				</td>
				<td>
					<input name="email" value={email} onChange={this.handleChange} />
				</td>
				<td>
					<input name="phone" value={phone} onChange={this.handleChange} />
				</td>
				<td>
					<button onClick={this.handleEditUser}>Edit</button>
				</td>
				<td>
					<button onClick={this.handleDeleteUser}>Delete</button>
				</td>
			</tr>
		);
	}
}

export default User;

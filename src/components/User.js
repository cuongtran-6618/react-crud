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

		this.handleCancelEditUser = this.handleCancelEditUser.bind(this);
		this.handleDeleteUser = this.handleDeleteUser.bind(this);
		this.handleEnableEditUser = this.handleEnableEditUser.bind(this);
		this.handleSaveUser = this.handleSaveUser.bind(this);
	}

	handleCancelEditUser(e) {}

	handleDeleteUser(e) {
		console.log("delete button clicked");
		this.props.onDeleteUser(this.state.id);
	}

	handleEnableEditUser(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSaveUser(e) {
		console.log("edit button clicked");
		this.props.onEditUser(this.state);
	}

	render() {
		const { id, name, email, phone } = this.props.user;

		return (
			<tr>
				<td>
					<input name="name" value={this.state.name} />
				</td>
				<td>
					<input name="email" value={this.state.email} />
				</td>
				<td>
					<input name="phone" value={this.state.phone} />
				</td>
				<td>
					<button className="transparent" onClick={this.handleCancelEditUser}>
						Cancel
					</button>
					<button className="transparent" onClick={this.handleSaveUser}>
						Save change
					</button>
					<button className="transparent" onClick={this.handleEnableEditUser}>
						Enable Edit
					</button>
					<button className="transparent" onClick={this.handleDeleteUser}>
						Delete
					</button>
				</td>
				<td></td>
			</tr>
		);
	}
}

export default User;

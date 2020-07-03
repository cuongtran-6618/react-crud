import React, { Component } from "react";
import PropTypes from "prop-types";
import { users } from "../databases/fake/users";

export class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			phone: "",
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {}

	render() {
		return (
			<tr>
				<td>
					<input value={this.props.user.name} onChange={this.handleChange} />
				</td>
				<td>
					<input value={this.props.user.email} onChange={this.handleChange} />
				</td>
				<td>
					<input value={this.props.user.phone} onChange={this.handleChange} />
				</td>
				<td>
					<button>Edit</button>
				</td>
				<td>
					<button>Delete</button>
				</td>
			</tr>
		);
	}
}

export default User;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { users } from "../databases/fake/users";
import * as utility from "../util/utility";

export class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.user.id,
			name: this.props.user.name,
			email: this.props.user.email,
			phone: this.props.user.phone,
		};
	}

	handleCancelEditUser = (e) => {
		let previousState = utility.fetchPreviousStateFromLocalStorage(
			"email",
			"name",
			"phone"
		);

		utility.loopObject(previousState, this.setStateByKey);
	};

	handleDeleteUser = (e) => {
		this.props.onDeleteUser(this.state.id);
	};

	//save the previous value to localstorage for recovering when customer doesn't wanna change
	handleEnableEditUser = (e) => {
		utility.saveStateToLocalStorage({ ...this.state });
	};

	handleOnChange = (e) => {
		this.setStateByKey(e.target.name, e.target.value);
	};

	handleSaveUser = (e) => {
		this.props.onEditUser(this.state);

		//erase the localstorage
		utility.saveStateToLocalStorage({ id: "", name: "", email: "", phone: "" });
	};

	setStateByKey = (key, value) => {
		this.setState({
			[key]: value,
		});
	};

	render() {
		return (
			<tr>
				<td>
					<input
						name="name"
						value={this.state.name}
						onChange={this.handleOnChange}
					/>
				</td>
				<td>
					<input
						name="email"
						value={this.state.email}
						onChange={this.handleOnChange}
					/>
				</td>
				<td>
					<input
						name="phone"
						value={this.state.phone}
						onChange={this.handleOnChange}
					/>
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
			</tr>
		);
	}
}

export default User;

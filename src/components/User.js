import React, { Component } from "react";
import PropTypes from "prop-types";
import { users } from "../databases/fake/users";
import * as utility from "../util/utility";

export class User extends Component {
	state = {
		id: this.props.user.id,
		name: this.props.user.name,
		email: this.props.user.email,
		phone: this.props.user.phone,
	};

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
				<td colSpan="1">
					<input
						disabled
						name="name"
						value={this.state.name}
						onChange={this.handleOnChange}
						className="browser-default"
						type="text"
					/>
				</td>
				<td colSpan="1">
					<input
						disabled
						name="email"
						value={this.state.email}
						onChange={this.handleOnChange}
						className="browser-default"
						type="text"
					/>
				</td>
				<td colSpan="1">
					<input
						disabled
						name="phone"
						value={this.state.phone}
						onChange={this.handleOnChange}
						className="browser-default"
						type="text"
					/>
				</td>
				<td colSpan="1">
					<button
						className="btn-cancel hidden"
						onClick={this.handleCancelEditUser}
					>
						Cancel
					</button>
					<button className="btn-save hidden" onClick={this.handleSaveUser}>
						Save
					</button>
					<button
						className="transparent right"
						onClick={this.handleEnableEditUser}
					>
						<i className="material-icons">create</i>
					</button>
					<button className="transparent right" onClick={this.handleDeleteUser}>
						<i className="material-icons">delete</i>
					</button>
				</td>
			</tr>
		);
	}
}

export default User;

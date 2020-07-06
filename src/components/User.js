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
		disableEdit: true,
	};

	handleCancelEditUser = (e) => {
		let previousState = utility.fetchPreviousStateFromLocalStorage(
			"email",
			"name",
			"phone"
		);

		utility.loopObject(previousState, this.setStateByKey);
		this.hideEditForm();
	};

	handleDeleteUser = (e) => {
		this.props.onDeleteUser(this.state.id);
	};

	//save the previous value to localstorage for recovering when customer doesn't wanna change
	handleEnableEditUser = (e) => {
		utility.saveStateToLocalStorage({ ...this.state });
		this.showEditForm();
	};

	handleOnChange = (e) => {
		this.setStateByKey(e.target.name, e.target.value);
	};

	handleSaveUser = (e) => {
		this.props.onEditUser(this.state);

		//erase the localstorage
		utility.saveStateToLocalStorage({ id: "", name: "", email: "", phone: "" });
		this.hideEditForm();
	};

	showEditForm = () => {
		this.setStateByKey("disableEdit", false);
	};

	hideEditForm = () => {
		this.setStateByKey("disableEdit", true);
	};

	setStateByKey = (key, value) => {
		this.setState((previousState) => ({
			[key]: (previousState[key] = value),
		}));
	};

	render() {
		return (
			<tr>
				<td colSpan="1">
					<input
						disabled={this.state.disableEdit}
						name="name"
						value={this.state.name}
						onChange={this.handleOnChange}
						className="browser-default"
						type="text"
					/>
				</td>
				<td colSpan="1">
					<input
						disabled={this.state.disableEdit}
						name="email"
						value={this.state.email}
						onChange={this.handleOnChange}
						className="browser-default"
						type="text"
					/>
				</td>
				<td colSpan="1">
					<input
						disabled={this.state.disableEdit}
						name="phone"
						value={this.state.phone}
						onChange={this.handleOnChange}
						className="browser-default"
						type="text"
					/>
				</td>
				<td colSpan="1" className="actions-container">
					<button
						className={this.state.disableEdit ? "hidden" : "show"}
						onClick={this.handleCancelEditUser}
					>
						Cancel
					</button>
					<button
						className="btn-save"
						onClick={this.handleSaveUser}
						className={this.state.disableEdit ? "hidden" : "show"}
					>
						Save
					</button>
					<button
						className="transparent right"
						onClick={this.handleEnableEditUser}
						className={!this.state.disableEdit ? "hidden" : "show"}
					>
						<i className="material-icons">create</i>
					</button>
					<button
						className="transparent right"
						onClick={this.handleDeleteUser}
						className={!this.state.disableEdit ? "hidden" : "show"}
					>
						<i className="material-icons">delete</i>
					</button>
				</td>
			</tr>
		);
	}
}

export default User;

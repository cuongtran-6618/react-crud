import React, { Component } from "react";
import User from "./User";
import AddUser from "./AddUser";
import { users } from "../databases/fake/users";

export class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: users,
		};

		this.handleCreate = this.handleCreate.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleCreate(user) {
		this.setState((previousState) => ({
			data: [...previousState.data, user],
		}));
	}

	handleEdit(user) {}

	handleDelete(id) {
		this.setState((previousState) => ({
			data: [
				...previousState.data.filter((user) => {
					if (user.id !== id) {
						return user;
					}
				}),
			],
		}));
	}

	render() {
		const listUser = this.state.data.map((user) => (
			<User
				key={user.id}
				user={user}
				onEditUser={this.handleEdit}
				onDeleteUser={this.handleDelete}
			/>
		));
		return (
			<div>
				<AddUser onCreateUser={this.handleCreate} />
				<table>
					<tbody>{listUser}</tbody>
				</table>
			</div>
		);
	}
}

export default UserList;

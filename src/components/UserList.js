import React, { Component } from "react";
import User from "./User";
import AddUser from "./AddUser";
import Header from "./Header";
import { users } from "../databases/fake/users";
import { v4 as uuidv4 } from "uuid";
import * as util from "../util/utility";

export class UserList extends Component {
	state = {
		data: users,
	};

	handleCreate = (user) => {
		this.setState((previousState) => ({
			data: [...previousState.data, { ...user, id: uuidv4() }],
		}));
	};

	handleEdit = (updatedUser) => {
		let data = [...this.state.data];
		data = data.map((user) => {
			return user.id === updatedUser.id
				? {
						...user,
						name: updatedUser.name,
						email: updatedUser.email,
						phone: updatedUser.phone,
				  }
				: user;
		});

		this.setState((previousState) => ({
			data,
		}));
	};

	handleDelete = (id) => {
		this.setState((previousState) => ({
			data: [
				...previousState.data.filter((user) => {
					return user.id !== id ? user : null;
				}),
			],
		}));
	};

	handleSorting = (sortField, direction = "acs") => {
		this.setState((previousState) => ({
			data: [...previousState.data].sort(util.sortArray(sortField, direction)),
		}));
	};

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
				<table className="white">
					<Header user={this.state.data} onSortUser={this.handleSorting} />
					<tbody>{listUser}</tbody>
				</table>
			</div>
		);
	}
}

export default UserList;

import React, { Component } from "react";
import User from "./User";
import AddUser from "./AddUser";
import Header from "./Header";
import Title from "./Title";
import { users } from "../databases/fake/users";
import { v4 as uuidv4 } from "uuid";
import * as util from "../util/utility";

export class UserList extends Component {
	state = {
		data: users,
	};

	handleCreate = (user) => {
		this.setState({
			data: [...this.state.data, { ...user, id: uuidv4() }],
		});
	};

	handleEdit = (modifiedUser) => {
		const updatedData = [...this.state.data].map((user) => {
			if (user.id !== modifiedUser.id) {
				return user;
			}

			return {
				...user,
				name: modifiedUser.name,
				email: modifiedUser.email,
				phone: modifiedUser.phone,
				company: modifiedUser.company,
			};
		});

		this.setState({
			data: ([...this.state.data] = updatedData),
		});
	};

	handleDelete = (id) => {
		const updatedData = [...this.state.data].filter((user) => {
			return user.id !== id ? user : null;
		});
		this.setState({
			data: ([...this.state.data] = updatedData),
		});
	};

	handleSorting = (sortField, direction = "acs") => {
		const sortingUser = [...this.state.data].sort(
			util.sortArray(sortField, direction)
		);

		this.setState({
			data: ([...this.state.data] = sortingUser),
		});
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
				<Title user={this.state.data} />
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

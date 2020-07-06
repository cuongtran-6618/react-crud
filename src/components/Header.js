import React, { Component } from "react";

export default class Header extends Component {
	state = {
		id: "",
		name: "",
		email: "",
		phone: "",
	};

	handleClickOnTitle = (field) => (e) => {
		const direction = this.state[field] === "asc" ? "desc" : "asc";

		this.setState((previousState) => ({
			[field]: (previousState[field] = direction),
		}));

		this.props.onSortUser(field, direction);
	};

	render() {
		return (
			<thead>
				<tr>
					<th colSpan="1" onClick={this.handleClickOnTitle("name")}>
						Name
					</th>
					<th colSpan="1" onClick={this.handleClickOnTitle("email")}>
						Email
					</th>
					<th colSpan="1" onClick={this.handleClickOnTitle("phone")}>
						Phone
					</th>
					<th colSpan="1"></th>
				</tr>
			</thead>
		);
	}
}

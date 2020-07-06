import React, { Component } from "react";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			name: "",
			email: "",
			phone: "",
		};
		this.handleClickOnTitle = this.handleClickOnTitle.bind(this);
	}

	handleClickOnTitle = (field) => (e) => {
		const direction = this.state[field] === "asc" ? "desc" : "asc";
		console.log(direction);
		this.setState((previousState) => ({
			[field]: (previousState[field] = direction),
		}));

		this.props.onSortUser(field, direction);
	};

	render() {
		return (
			<thead>
				<tr>
					<th onClick={this.handleClickOnTitle("name")}>Name</th>
					<th onClick={this.handleClickOnTitle("email")}>Email</th>
					<th onClick={this.handleClickOnTitle("phone")}>Phone</th>
				</tr>
			</thead>
		);
	}
}

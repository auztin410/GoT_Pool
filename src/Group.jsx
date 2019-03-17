import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export class Group extends Component {
	constructor(props) {
		super(props);
		this.state = {
			group: null,
			groupResults: []
		};
	}

	handleFindGroup() {
		let group = this.state.group;
		axios
			.get(`/find/group/${group}/`)
			.then((res) => {
				this.setState({
					groupResults: res.data
				});
			})
			.catch((err) => err);
	}

	render() {
		return (
			<div>
				<h1>Game of Thrones Pool</h1>
				<br />
				<br />
				<input type="text" />
				<br />
				<button>Find Group</button>
			</div>
		);
	}
}

export default Group;

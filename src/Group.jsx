import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export class Group extends Component {
	constructor(props) {
		super(props);
		this.state = {
			group: null,
			groupResults: [],
			search: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleFindGroup = this.handleFindGroup.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleFindGroup() {
		let search = this.state.search;
		axios
			.get(`/find/group/${search}/`)
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
				<input type="text" name="search" onChange={this.handleChange} />
				<button className="Button" onClick={this.handleFindGroup}>
					Search
				</button>
			</div>
		);
	}
}

export default Group;

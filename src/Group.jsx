import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export class Group extends Component {
	constructor(props) {
		super(props);
		this.state = {
			group: null,
			groupResults: [],
			search: '',
			current: null,
			points: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleFindGroup = this.handleFindGroup.bind(this);
	}

	componentDidMount() {
		axios
			.get('/current/')
			.then((res) => {
				this.setState({
					current: res.data
				});
				console.log('Test For Current Get');
				console.log(res);
			})
			.catch((err) => console.log(err));
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
				this.setState(
					{
						groupResults: res.data
					},
					() => {
						let groupResults = this.state.groupResults;
						let start = [];
						for (let i = 0; i < groupResults.length; i++) {
							start.push(0);
						}
						console.log(start);
						this.setState(
							{
								points: start
							},
							() => {
								for (let i = 0; i < groupResults.length; i++) {
									if (groupResults[i].jonSnow.DoA === this.state.current[0].jonSnow.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].jonSnow.Wight === true &&
													groupResults[i].jonSnow.Wight === true &&
													groupResults[i].jonSnow.DoA === 'Dead'
												) {
													let points = this.state.points;
													points[i] += 1;
													this.setState({
														points
													});
												}
											}
										);
									}
								}
							}
						);
					}
				);
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div style={{ height: this.props.height }} className="Form">
				<input type="text" name="search" onChange={this.handleChange} />
				<button className="Button" onClick={this.handleFindGroup}>
					Search
				</button>
				{this.state.groupResults.length > 0 ? (
					<div>
						<table className="CharacterTable">
							<tbody>
								<tr>
									<th>Username</th>
									<th>Points</th>
								</tr>
								{this.state.groupResults.map((item) => (
									<tr key={item._id}>
										<td>{item.username}</td>
										<td>5</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : null}
			</div>
		);
	}
}

export default Group;

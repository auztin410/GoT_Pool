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
		this.pointChecker = this.pointChecker.bind(this);
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

	pointChecker(groupResults, character, i) {
		if (groupResults[i][character].DoA === this.state.current[0][character].DoA) {
			let points = this.state.points;
			points[i] += 1;
			this.setState(
				{
					points
				},
				() => {
					if (
						this.state.current[0][character].Wight === true &&
						groupResults[i][character].Wight === true &&
						groupResults[i][character].DoA === 'Dead'
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
						this.setState(
							{
								points: start
							},
							() => {
								for (let i = 0; i < groupResults.length; i++) {
									let groupResults = this.state.groupResults;
									this.pointChecker(groupResults, 'jonSnow', i);
									this.pointChecker(groupResults, 'sansaStark', i);
									this.pointChecker(groupResults, 'aryaStark', i);
									this.pointChecker(groupResults, 'branStark', i);
									this.pointChecker(groupResults, 'daenerysTargaryen', i);
									this.pointChecker(groupResults, 'branStark', i);
									this.pointChecker(groupResults, 'cerseiLannister', i);
									this.pointChecker(groupResults, 'jaimeLannister', i);
									this.pointChecker(groupResults, 'tyrionLannister', i);
									this.pointChecker(groupResults, 'yaraGreyjoy', i);
									this.pointChecker(groupResults, 'theonGreyjoy', i);
									this.pointChecker(groupResults, 'melisandre', i);
									this.pointChecker(groupResults, 'jorahMormont', i);
									this.pointChecker(groupResults, 'hound', i);
									this.pointChecker(groupResults, 'mountain', i);
									this.pointChecker(groupResults, 'samwellTarley', i);
									this.pointChecker(groupResults, 'gilly', i);
									this.pointChecker(groupResults, 'littleSam', i);
									this.pointChecker(groupResults, 'varys', i);
									this.pointChecker(groupResults, 'brienneOfTarth', i);
									this.pointChecker(groupResults, 'davosSeaworth', i);
									this.pointChecker(groupResults, 'bronn', i);
									this.pointChecker(groupResults, 'pod', i);
									this.pointChecker(groupResults, 'tormund', i);
									this.pointChecker(groupResults, 'greyworm', i);
									this.pointChecker(groupResults, 'missandei', i);
									this.pointChecker(groupResults, 'gendry', i);
									this.pointChecker(groupResults, 'beric', i);
									this.pointChecker(groupResults, 'euronGreyjoy', i);
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
								{this.state.groupResults.map((item, index) => (
									<tr key={item._id}>
										<td>{item.username}</td>
										<td>{this.state.points[index]}</td>
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

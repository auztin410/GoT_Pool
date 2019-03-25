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
		if (groupResults[i].character.DoA === this.state.current[0].character.DoA) {
			let points = this.state.points;
			points[i] += 1;
			this.setState(
				{
					points
				},
				() => {
					if (
						this.state.current[0].character.Wight === true &&
						groupResults[i].character.Wight === true &&
						groupResults[i].character.DoA === 'Dead'
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
									// this.pointChecker(groupResults, i, jonSnow);
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
									if (groupResults[i].sansaStark.DoA === this.state.current[0].sansaStark.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].sansaStark.Wight === true &&
													groupResults[i].sansaStark.Wight === true &&
													groupResults[i].sansaStark.DoA === 'Dead'
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
									if (groupResults[i].aryaStark.DoA === this.state.current[0].aryaStark.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].aryaStark.Wight === true &&
													groupResults[i].aryaStark.Wight === true &&
													groupResults[i].aryaStark.DoA === 'Dead'
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
									if (groupResults[i].branStark.DoA === this.state.current[0].branStark.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].branStark.Wight === true &&
													groupResults[i].branStark.Wight === true &&
													groupResults[i].branStark.DoA === 'Dead'
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
									if (
										groupResults[i].daenerysTargaryen.DoA ===
										this.state.current[0].daenerysTargaryen.DoA
									) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].daenerysTargaryen.Wight === true &&
													groupResults[i].daenerysTargaryen.Wight === true &&
													groupResults[i].daenerysTargaryen.DoA === 'Dead'
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
									if (
										groupResults[i].cerseiLannister.DoA ===
										this.state.current[0].cerseiLannister.DoA
									) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].cerseiLannister.Wight === true &&
													groupResults[i].cerseiLannister.Wight === true &&
													groupResults[i].cerseiLannister.DoA === 'Dead'
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
									if (
										groupResults[i].jaimeLannister.DoA === this.state.current[0].jaimeLannister.DoA
									) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].jaimeLannister.Wight === true &&
													groupResults[i].jaimeLannister.Wight === true &&
													groupResults[i].jaimeLannister.DoA === 'Dead'
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
									if (
										groupResults[i].tyrionLannister.DoA ===
										this.state.current[0].tyrionLannister.DoA
									) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].tyrionLannister.Wight === true &&
													groupResults[i].tyrionLannister.Wight === true &&
													groupResults[i].tyrionLannister.DoA === 'Dead'
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
									if (groupResults[i].yaraGreyjoy.DoA === this.state.current[0].yaraGreyjoy.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].yaraGreyjoy.Wight === true &&
													groupResults[i].yaraGreyjoy.Wight === true &&
													groupResults[i].yaraGreyjoy.DoA === 'Dead'
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
									if (groupResults[i].theonGreyjoy.DoA === this.state.current[0].theonGreyjoy.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].theonGreyjoy.Wight === true &&
													groupResults[i].theonGreyjoy.Wight === true &&
													groupResults[i].theonGreyjoy.DoA === 'Dead'
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
									if (groupResults[i].melisandre.DoA === this.state.current[0].melisandre.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].melisandre.Wight === true &&
													groupResults[i].melisandre.Wight === true &&
													groupResults[i].melisandre.DoA === 'Dead'
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
									if (groupResults[i].jorahMormont.DoA === this.state.current[0].jorahMormont.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].jorahMormont.Wight === true &&
													groupResults[i].jorahMormont.Wight === true &&
													groupResults[i].jorahMormont.DoA === 'Dead'
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
									if (groupResults[i].hound.DoA === this.state.current[0].hound.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].hound.Wight === true &&
													groupResults[i].hound.Wight === true &&
													groupResults[i].hound.DoA === 'Dead'
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
									if (groupResults[i].mountain.DoA === this.state.current[0].mountain.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].mountain.Wight === true &&
													groupResults[i].mountain.Wight === true &&
													groupResults[i].mountain.DoA === 'Dead'
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
									if (groupResults[i].samwellTarley.DoA === this.state.current[0].samwellTarley.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].samwellTarley.Wight === true &&
													groupResults[i].samwellTarley.Wight === true &&
													groupResults[i].samwellTarley.DoA === 'Dead'
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
									if (groupResults[i].gilly.DoA === this.state.current[0].gilly.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].gilly.Wight === true &&
													groupResults[i].gilly.Wight === true &&
													groupResults[i].gilly.DoA === 'Dead'
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
									if (groupResults[i].littleSam.DoA === this.state.current[0].littleSam.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].littleSam.Wight === true &&
													groupResults[i].littleSam.Wight === true &&
													groupResults[i].littleSam.DoA === 'Dead'
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
									if (groupResults[i].varys.DoA === this.state.current[0].varys.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].varys.Wight === true &&
													groupResults[i].varys.Wight === true &&
													groupResults[i].varys.DoA === 'Dead'
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
									if (
										groupResults[i].brienneOfTarth.DoA === this.state.current[0].brienneOfTarth.DoA
									) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].brienneOfTarth.Wight === true &&
													groupResults[i].brienneOfTarth.Wight === true &&
													groupResults[i].brienneOfTarth.DoA === 'Dead'
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
									if (groupResults[i].davosSeaworth.DoA === this.state.current[0].davosSeaworth.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].davosSeaworth.Wight === true &&
													groupResults[i].davosSeaworth.Wight === true &&
													groupResults[i].davosSeaworth.DoA === 'Dead'
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
									if (groupResults[i].bronn.DoA === this.state.current[0].bronn.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].bronn.Wight === true &&
													groupResults[i].bronn.Wight === true &&
													groupResults[i].bronn.DoA === 'Dead'
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
									if (groupResults[i].pod.DoA === this.state.current[0].pod.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].pod.Wight === true &&
													groupResults[i].pod.Wight === true &&
													groupResults[i].pod.DoA === 'Dead'
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
									if (groupResults[i].tormund.DoA === this.state.current[0].tormund.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].tormund.Wight === true &&
													groupResults[i].tormund.Wight === true &&
													groupResults[i].tormund.DoA === 'Dead'
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
									if (groupResults[i].greyworm.DoA === this.state.current[0].greyworm.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].greyworm.Wight === true &&
													groupResults[i].greyworm.Wight === true &&
													groupResults[i].greyworm.DoA === 'Dead'
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
									if (groupResults[i].missandei.DoA === this.state.current[0].missandei.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].missandei.Wight === true &&
													groupResults[i].missandei.Wight === true &&
													groupResults[i].missandei.DoA === 'Dead'
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
									if (groupResults[i].gendry.DoA === this.state.current[0].gendry.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].gendry.Wight === true &&
													groupResults[i].gendry.Wight === true &&
													groupResults[i].gendry.DoA === 'Dead'
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
									if (groupResults[i].beric.DoA === this.state.current[0].beric.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].beric.Wight === true &&
													groupResults[i].beric.Wight === true &&
													groupResults[i].beric.DoA === 'Dead'
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
									if (groupResults[i].euronGreyjoy.DoA === this.state.current[0].euronGreyjoy.DoA) {
										let points = this.state.points;
										points[i] += 1;
										this.setState(
											{
												points
											},
											() => {
												if (
													this.state.current[0].euronGreyjoy.Wight === true &&
													groupResults[i].euronGreyjoy.Wight === true &&
													groupResults[i].euronGreyjoy.DoA === 'Dead'
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

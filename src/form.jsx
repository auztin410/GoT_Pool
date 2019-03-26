import React, { Component } from 'react';
import './App.css';
import ReactHowler from 'react-howler';
import axios from 'axios';
import GoT from './assets/GoT-Song.mp3';
import Group from './Group';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			group: '',
			Jon: 'Alive',
			JonWight: false,
			Sansa: 'Alive',
			SansaWight: false,
			Arya: 'Alive',
			AryaWight: false,
			Bran: 'Alive',
			BranWight: false,
			Dany: 'Alive',
			DanyWight: false,
			Cersei: 'Alive',
			CerseiWight: false,
			Jaime: 'Alive',
			JaimeWight: false,
			Tyrion: 'Alive',
			TyrionWight: false,
			Yara: 'Alive',
			YaraWight: false,
			Theon: 'Alive',
			TheonWight: false,
			Melisandre: 'Alive',
			MelisandreWight: false,
			Jorah: 'Alive',
			JorahWight: false,
			Hound: 'Alive',
			HoundWight: false,
			Mountain: 'Alive',
			MountainWight: false,
			Samwell: 'Alive',
			SamwellWight: false,
			Gilly: 'Alive',
			GillyWight: false,
			Sam: 'Alive',
			SamWight: false,
			Varys: 'Alive',
			VarysWight: false,
			Brienne: 'Alive',
			BrienneWight: false,
			Davos: 'Alive',
			DavosWight: false,
			Bronn: 'Alive',
			BronnWight: false,
			Pod: 'Alive',
			PodWight: false,
			Tormund: 'Alive',
			TormundWight: false,
			Grey: 'Alive',
			GreyWight: false,
			Missandei: 'Alive',
			MissandeiWight: false,
			Gendry: 'Alive',
			GendryWight: false,
			Beric: 'Alive',
			BericWight: false,
			Euron: 'Alive',
			EuronWight: false,
			result: [],
			show: 'Form',
			database: [],
			form: 1483,
			table: 0,
			search: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheckBox = this.handleCheckBox.bind(this);
		this.handleForm = this.handleForm.bind(this);
		this.handleReview = this.handleReview.bind(this);
		this.handleGroup = this.handleGroup.bind(this);
		this.handleTest = this.handleTest.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	// componentDidMount() {
	// 	console.log('Component Did Mount Test');
	// }

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleCheckBox(event) {
		this.setState({
			[event.target.name]: event.target.checked
		});
	}

	handleTest() {
		axios
			.get('/find/')
			.then((res) => {
				this.setState({
					database: res.data
				});
			})
			.catch((err) => console.log(err));
	}

	handleSubmit(event) {
		event.preventDefault();

		let result = [
			{ Name: 'Jon Snow', DoA: this.state.Jon, Wight: this.state.JonWight },
			{ Name: 'Sansa Stark', DoA: this.state.Sansa, Wight: this.state.SansaWight },
			{ Name: 'Arya Stark', DoA: this.state.Arya, Wight: this.state.AryaWight },
			{ Name: 'Bran Stark', DoA: this.state.Bran, Wight: this.state.BranWight },
			{ Name: 'Daenerys Targaryen', DoA: this.state.Dany, Wight: this.state.DanyWight },
			{ Name: 'Cersei Lannister', DoA: this.state.Cersei, Wight: this.state.CerseiWight },
			{ Name: 'Jaime Lannister', DoA: this.state.Jaime, Wight: this.state.JaimeWight },
			{ Name: 'Tyrion Lannister', DoA: this.state.Tyrion, Wight: this.state.TyrionWight },
			{ Name: 'Yara Greyjoy', DoA: this.state.Yara, Wight: this.state.YaraWight },
			{ Name: 'Theon Greyjoy', DoA: this.state.Theon, Wight: this.state.TheonWight },
			{ Name: 'Melisandre', DoA: this.state.Melisandre, Wight: this.state.MelisandreWight },
			{ Name: 'Jorah Mormont', DoA: this.state.Jorah, Wight: this.state.JorahWight },
			{ Name: 'The Hound', DoA: this.state.Hound, Wight: this.state.HoundWight },
			{ Name: 'The Mountain', DoA: this.state.Mountain, Wight: this.state.MountainWight },
			{ Name: 'Samwell Tarley', DoA: this.state.Samwell, Wight: this.state.SamwellWight },
			{ Name: 'Gilly', DoA: this.state.Gilly, Wight: this.state.GillyWight },
			{ Name: 'Little Same', DoA: this.state.Sam, Wight: this.state.SamWight },
			{ Name: 'Varys', DoA: this.state.Varys, Wight: this.state.VarysWight },
			{ Name: 'Brienne of Tarth', DoA: this.state.Brienne, Wight: this.state.BrienneWight },
			{ Name: 'Davos Seaworth', DoA: this.state.Davos, Wight: this.state.DavosWight },
			{ Name: 'Bronn of the Blackwater', DoA: this.state.Bronn, Wight: this.state.BronnWight },
			{ Name: 'Podrick Payne', DoA: this.state.Pod, Wight: this.state.PodWight },
			{ Name: 'Tormund Giantsbane', DoA: this.state.Tormund, Wight: this.state.TormundWight },
			{ Name: 'Greyworm', DoA: this.state.Grey, Wight: this.state.GreyWight },
			{ Name: 'Missandei', DoA: this.state.Missandei, Wight: this.state.MissandeiWight },
			{ Name: 'Gendry', DoA: this.state.Gendry, Wight: this.state.GendryWight },
			{ Name: 'Beric Dondarrion', DoA: this.state.Beric, Wight: this.state.BericWight },
			{ Name: 'Euron Greyjoy', DoA: this.state.Euron, Wight: this.state.EuronWight }
		];

		let username = this.state.username.toLocaleLowerCase();
		let group = this.state.group.toLocaleLowerCase();

		axios
			.post('/submit/', {
				username,
				group,
				jonSnow: result[0],
				sansaStark: result[1],
				aryaStark: result[2],
				branStark: result[3],
				daenerysTargaryen: result[4],
				cerseiLannister: result[5],
				jaimeLannister: result[6],
				tyrionLannister: result[7],
				yaraGreyjoy: result[8],
				theonGreyjoy: result[9],
				melisandre: result[10],
				jorahMormont: result[11],
				hound: result[12],
				mountain: result[13],
				samwellTarley: result[14],
				gilly: result[15],
				littleSam: result[16],
				varys: result[17],
				brienneOfTarth: result[18],
				davosSeaworth: result[19],
				bronn: result[20],
				pod: result[21],
				tormund: result[22],
				greyworm: result[23],
				missandei: result[24],
				gendry: result[25],
				beric: result[26],
				euronGreyjoy: result[27]
			})
			.then((res) => {
				console.log(res);
				this.setState({
					show: 'Review',
					form: 0,
					table: 1483,
					search: 0
				});
			})
			.catch((err) => console.log(err));

		this.setState({
			result,
			show: 'Review'
		});
	}

	handleClick(event) {
		console.log(event.target.innerHTML);
		let target = event.target.innerHTML;
		switch (target) {
			case 'Form':
				this.setState({
					show: 'Form',
					form: 1483,
					table: 0,
					search: 0
				});
				break;
			case 'Group':
				this.setState({
					show: 'Group',
					form: 0,
					table: 0,
					search: 1483
				});
				break;
			case 'Review':
				this.setState({
					show: 'Review',
					form: 0,
					table: 1483,
					search: 0
				});
				break;
		}
	}

	handleForm(event) {
		console.log(event.target.innerHTML);
		let target = event.target.innerHTML;
		switch (target) {
			case 'Form':
				this.setState({
					show: 'Form'
				});
				break;
		}
	}

	handleReview() {
		this.setState({
			show: 'Review'
		});
	}

	handleGroup() {
		this.setState({
			show: 'Group'
		});
	}

	handleCurrent(event) {
		event.preventDefault();

		axios
			.post('/current/', {
				jonSnow: {
					Wight: false,
					DoA: 'Alive'
				},
				sansaStark: {
					Wight: false,
					DoA: 'Alive'
				},
				aryaStark: {
					Wight: false,
					DoA: 'Alive'
				},
				branStark: {
					Wight: false,
					DoA: 'Alive'
				},
				daenerysTargaryen: {
					Wight: false,
					DoA: 'Alive'
				},
				cerseiLannister: {
					Wight: false,
					DoA: 'Alive'
				},
				jaimeLannister: {
					Wight: false,
					DoA: 'Alive'
				},
				tyrionLannister: {
					Wight: false,
					DoA: 'Alive'
				},
				yaraGreyjoy: {
					Wight: false,
					DoA: 'Alive'
				},
				theonGreyjoy: {
					Wight: false,
					DoA: 'Alive'
				},
				melisandre: {
					Wight: false,
					DoA: 'Alive'
				},
				jorahMormont: {
					Wight: false,
					DoA: 'Alive'
				},
				hound: {
					Wight: false,
					DoA: 'Alive'
				},
				mountain: {
					Wight: false,
					DoA: 'Alive'
				},
				samwellTarley: {
					Wight: false,
					DoA: 'Alive'
				},
				gilly: {
					Wight: false,
					DoA: 'Alive'
				},
				littleSam: {
					Wight: false,
					DoA: 'Alive'
				},
				varys: {
					Wight: false,
					DoA: 'Alive'
				},
				brienneOfTarth: {
					Wight: false,
					DoA: 'Alive'
				},
				davosSeaworth: {
					Wight: false,
					DoA: 'Alive'
				},
				bronn: {
					Wight: false,
					DoA: 'Alive'
				},
				pod: {
					Wight: false,
					DoA: 'Alive'
				},
				tormund: {
					Wight: false,
					DoA: 'Alive'
				},
				greyworm: {
					Wight: false,
					DoA: 'Alive'
				},
				missandei: {
					Wight: false,
					DoA: 'Alive'
				},
				gendry: {
					Wight: false,
					DoA: 'Alive'
				},
				beric: {
					Wight: false,
					DoA: 'Alive'
				},
				euronGreyjoy: {
					Wight: false,
					DoA: 'Alive'
				}
			})
			.then((res) => {
				console.log('Sent Current Data');
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div className="Main">
				<ReactHowler src={GoT} playing={true} loop={true} ref={(ref) => (this.player = ref)} />
				<h1>Game of Thrones Pool</h1>
				{this.state.show === 'Form' ? (
					<div>
						<span>
							<button onClick={this.handleClick} className="Button">
								Review
							</button>
							<button onClick={this.handleClick} className="Button">
								Group
							</button>
						</span>
					</div>
				) : null}
				{this.state.show === 'Review' ? (
					<span>
						<button onClick={this.handleClick} className="Button">
							Form
						</button>
						<button onClick={this.handleClick} className="Button">
							Group
						</button>
					</span>
				) : null}
				{this.state.show === 'Group' ? (
					<span>
						<button onClick={this.handleClick} className="Button">
							Form
						</button>
						<button onClick={this.handleClick} className="Button">
							Review
						</button>
					</span>
				) : null}

				<div className="Form" style={{ height: this.state.form }}>
					<form>
						<div className="Character">
							<fieldset id="Jon" onChange={this.handleChange}>
								<span className="Name">Jon Snow</span>
								<input defaultChecked type="radio" name="Jon" value="Alive" />Alive
								<input type="radio" name="Jon" value="Dead" />Dead
							</fieldset>
							{this.state.Jon === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="JonWight"
										disabled={this.state.Jon === null || this.state.Jon === 'Alive'}
										// checked={this.state.JonWight}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="JonWight"
										disabled={this.state.Jon === null || this.state.Jon === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Sansa" onChange={this.handleChange}>
								<span className="Name">Sansa Stark</span>
								<input defaultChecked type="radio" name="Sansa" value="Alive" />Alive
								<input type="radio" name="Sansa" value="Dead" />Dead
							</fieldset>
							{this.state.Sansa === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="SansaWight"
										disabled={this.state.Sansa === null || this.state.Sansa === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="SansaWight"
										disabled={this.state.Sansa === null || this.state.Sansa === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Arya" onChange={this.handleChange}>
								<span className="Name">Arya Stark</span>
								<input defaultChecked type="radio" name="Arya" value="Alive" />Alive
								<input type="radio" name="Arya" value="Dead" />Dead
							</fieldset>
							{this.state.Arya === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="AryaWight"
										disabled={this.state.Arya === null || this.state.Arya === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="AryaWight"
										disabled={this.state.Arya === null || this.state.Arya === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Bran" onChange={this.handleChange}>
								<span className="Name">Bran Stark</span>
								<input defaultChecked type="radio" name="Bran" value="Alive" />Alive
								<input type="radio" name="Bran" value="Dead" />Dead
							</fieldset>
							{this.state.Bran === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="BranWight"
										disabled={this.state.Bran === null || this.state.Bran === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="BranWight"
										disabled={this.state.Bran === null || this.state.Bran === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Dany" onChange={this.handleChange}>
								<span className="Name">Daenerys Targaryen</span>
								<input defaultChecked type="radio" name="Dany" value="Alive" />Alive
								<input type="radio" name="Dany" value="Dead" />Dead
							</fieldset>
							{this.state.Dany === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="DanyWight"
										disabled={this.state.Dany === null || this.state.Dany === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="DanyWight"
										disabled={this.state.Dany === null || this.state.Dany === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Cersei" onChange={this.handleChange}>
								<span className="Name">Cersei Lannister</span>
								<input defaultChecked type="radio" name="Cersei" value="Alive" />Alive
								<input type="radio" name="Cersei" value="Dead" />Dead
							</fieldset>
							{this.state.Cersei === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="CerseiWight"
										disabled={this.state.Cersei === null || this.state.Cersei === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="CerseiWight"
										disabled={this.state.Cersei === null || this.state.Cersei === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Jaime" onChange={this.handleChange}>
								<span className="Name">Jaime Lannister</span>
								<input defaultChecked type="radio" name="Jaime" value="Alive" />Alive
								<input type="radio" name="Jaime" value="Dead" />Dead
							</fieldset>
							{this.state.Jaime === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="JaimeWight"
										disabled={this.state.Jaime === null || this.state.Jaime === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="JaimeWight"
										disabled={this.state.Jaime === null || this.state.Jaime === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Tyrion" onChange={this.handleChange}>
								<span className="Name">Tyrion Lannister</span>
								<input defaultChecked type="radio" name="Tyrion" value="Alive" />Alive
								<input type="radio" name="Tyrion" value="Dead" />Dead
							</fieldset>
							{this.state.Tyrion === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="TyrionWight"
										disabled={this.state.Tyrion === null || this.state.Tyrion === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="TyrionWight"
										disabled={this.state.Tyrion === null || this.state.Tyrion === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Yara" onChange={this.handleChange}>
								<span className="Name">Yara Greyjoy</span>
								<input defaultChecked type="radio" name="Yara" value="Alive" />Alive
								<input type="radio" name="Yara" value="Dead" />Dead
							</fieldset>
							{this.state.Yara === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="YaraWight"
										disabled={this.state.Yara === null || this.state.Yara === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="YaraWight"
										disabled={this.state.Yara === null || this.state.Yara === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Theon" onChange={this.handleChange}>
								<span className="Name">Theon Greyjoy</span>
								<input defaultChecked type="radio" name="Theon" value="Alive" />Alive
								<input type="radio" name="Theon" value="Dead" />Dead
							</fieldset>
							{this.state.Theon === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="TheonWight"
										disabled={this.state.Theon === null || this.state.Theon === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="TheonWight"
										disabled={this.state.Theon === null || this.state.Theon === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Melisandre" onChange={this.handleChange}>
								<span className="Name">Melisandre</span>
								<input defaultChecked type="radio" name="Melisandre" value="Alive" />Alive
								<input type="radio" name="Melisandre" value="Dead" />Dead
							</fieldset>
							{this.state.Melisandre === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="MelisandreWight"
										disabled={this.state.Melisandre === null || this.state.Melisandre === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="MelisandreWight"
										disabled={this.state.Melisandre === null || this.state.Melisandre === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Jorah" onChange={this.handleChange}>
								<span className="Name">Jorah Mormont</span>
								<input defaultChecked type="radio" name="Jorah" value="Alive" />Alive
								<input type="radio" name="Jorah" value="Dead" />Dead
							</fieldset>
							{this.state.Jorah === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="JorahWight"
										disabled={this.state.Jorah === null || this.state.Jorah === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="JorahWight"
										disabled={this.state.Jorah === null || this.state.Jorah === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Hound" onChange={this.handleChange}>
								<span className="Name">The Hound</span>
								<input defaultChecked type="radio" name="Hound" value="Alive" />Alive
								<input type="radio" name="Hound" value="Dead" />Dead
							</fieldset>
							{this.state.Hound === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="HoundWight"
										disabled={this.state.Hound === null || this.state.Hound === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="HoundWight"
										disabled={this.state.Hound === null || this.state.Hound === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Mountain" onChange={this.handleChange}>
								<span className="Name">The Mountain</span>
								<input defaultChecked type="radio" name="Mountain" value="Alive" />Alive
								<input type="radio" name="Mountain" value="Dead" />Dead
							</fieldset>
							{this.state.Mountain === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="MountainWight"
										disabled={this.state.Mountain === null || this.state.Mountain === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="MountainWight"
										disabled={this.state.Mountain === null || this.state.Mountain === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Samwell" onChange={this.handleChange}>
								<span className="Name">Samwell Tarley</span>
								<input defaultChecked type="radio" name="Samwell" value="Alive" />Alive
								<input type="radio" name="Samwell" value="Dead" />Dead
							</fieldset>
							{this.state.Samwell === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="SamwellWight"
										disabled={((this.state.Samwell === null) === this.state.Samwell) === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="SamwellWight"
										disabled={((this.state.Samwell === null) === this.state.Samwell) === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Gilly" onChange={this.handleChange}>
								<span className="Name">Gilly</span>
								<input defaultChecked type="radio" name="Gilly" value="Alive" />Alive
								<input type="radio" name="Gilly" value="Dead" />Dead
							</fieldset>
							{this.state.Gilly === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="GillyWight"
										disabled={this.state.Gilly === null || this.state.Gilly === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="GillyWight"
										disabled={this.state.Gilly === null || this.state.Gilly === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Sam" onChange={this.handleChange}>
								<span className="Name">Little Sam</span>
								<input defaultChecked type="radio" name="Sam" value="Alive" />Alive
								<input type="radio" name="Sam" value="Dead" />Dead
							</fieldset>
							{this.state.Sam === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="SamWight"
										disabled={this.state.Sam === null || this.state.Sam === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="SamWight"
										disabled={this.state.Sam === null || this.state.Sam === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Varys" onChange={this.handleChange}>
								<span className="Name">Varys</span>
								<input defaultChecked type="radio" name="Varys" value="Alive" />Alive
								<input type="radio" name="Varys" value="Dead" />Dead
							</fieldset>
							{this.state.Varys === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="VarysWight"
										disabled={this.state.Varys === null || this.state.Varys === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="VarysWight"
										disabled={this.state.Varys === null || this.state.Varys === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Brienne" onChange={this.handleChange}>
								<span className="Name">Brienne of Tarth</span>
								<input defaultChecked type="radio" name="Brienne" value="Alive" />Alive
								<input type="radio" name="Brienne" value="Dead" />Dead
							</fieldset>
							{this.state.Brienne === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="BrienneWight"
										disabled={this.state.Brienne === null || this.state.Brienne === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="BrienneWight"
										disabled={this.state.Brienne === null || this.state.Brienne === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Davos" onChange={this.handleChange}>
								<span className="Name">Davos Seaworth</span>
								<input defaultChecked type="radio" name="Davos" value="Alive" />Alive
								<input type="radio" name="Davos" value="Dead" />Dead
							</fieldset>
							{this.state.Davos === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="DavosWight"
										disabled={this.state.Davos === null || this.state.Davos === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="DavosWight"
										disabled={this.state.Davos === null || this.state.Davos === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Bronn" onChange={this.handleChange}>
								<span className="Name">Bronn of The Blackwater</span>
								<input defaultChecked type="radio" name="Bronn" value="Alive" />Alive
								<input type="radio" name="Bronn" value="Dead" />Dead
							</fieldset>
							{this.state.Bronn === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="BronnWight"
										disabled={this.state.Bronn === null || this.state.Bronn === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="BronnWight"
										disabled={this.state.Bronn === null || this.state.Bronn === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Pod" onChange={this.handleChange}>
								<span className="Name">Podrick Payne</span>
								<input defaultChecked type="radio" name="Pod" value="Alive" />Alive
								<input type="radio" name="Pod" value="Dead" />Dead
							</fieldset>
							{this.state.Pod === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="PodWight"
										disabled={this.state.Pod === null || this.state.Pod === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="PodWight"
										disabled={this.state.Pod === null || this.state.Pod === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Tormund" onChange={this.handleChange}>
								<span className="Name">Tormund Giantsbane</span>
								<input defaultChecked type="radio" name="Tormund" value="Alive" />Alive
								<input type="radio" name="Tormund" value="Dead" />Dead
							</fieldset>
							{this.state.Tormund === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="TormundWight"
										disabled={this.state.Tormund === null || this.state.Tormund === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="TormundWight"
										disabled={this.state.Tormund === null || this.state.Tormund === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Grey" onChange={this.handleChange}>
								<span className="Name">Grey Worm</span>
								<input defaultChecked type="radio" name="Grey" value="Alive" />Alive
								<input type="radio" name="Grey" value="Dead" />Dead
							</fieldset>
							{this.state.Grey === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="GreyWight"
										disabled={this.state.Grey === null || this.state.Grey === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="GreyWight"
										disabled={this.state.Grey === null || this.state.Grey === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Missandei" onChange={this.handleChange}>
								<span className="Name">Missandei</span>
								<input defaultChecked type="radio" name="Missandei" value="Alive" />Alive
								<input type="radio" name="Missandei" value="Dead" />Dead
							</fieldset>
							{this.state.Missandei === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="MissandeiWight"
										disabled={this.state.Missandei === null || this.state.Missandei === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="MissandeiWight"
										disabled={this.state.Missandei === null || this.state.Missandei === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Gendry" onChange={this.handleChange}>
								<span className="Name">Gendry</span>
								<input defaultChecked type="radio" name="Gendry" value="Alive" />Alive
								<input type="radio" name="Gendry" value="Dead" />Dead
							</fieldset>
							{this.state.Gendry === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="GendryWight"
										disabled={this.state.Gendry === null || this.state.Gendry === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="GendryWight"
										disabled={this.state.Gendry === null || this.state.Gendry === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Beric" onChange={this.handleChange}>
								<span className="Name">Beric Dondarrion</span>
								<input defaultChecked type="radio" name="Beric" value="Alive" />Alive
								<input type="radio" name="Beric" value="Dead" />Dead
							</fieldset>
							{this.state.Beric === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="BericWight"
										disabled={this.state.Beric === null || this.state.Beric === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="BericWight"
										disabled={this.state.Beric === null || this.state.Beric === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<div className="Character">
							<fieldset id="Euron" onChange={this.handleChange}>
								<span className="Name">Euron Greyjoy</span>
								<input defaultChecked type="radio" name="Euron" value="Alive" />Alive
								<input type="radio" name="Euron" value="Dead" />Dead
							</fieldset>
							{this.state.Euron === 'Dead' ? (
								<span>
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="EuronWight"
										disabled={this.state.Euron === null || this.state.Euron === 'Alive'}
									/>Wight
								</span>
							) : (
								<span className="disabled">
									<input
										onChange={this.handleCheckBox}
										type="checkbox"
										name="EuronWight"
										disabled={this.state.Euron === null || this.state.Euron === 'Alive'}
									/>Wight
								</span>
							)}
						</div>
						<br />
						<input
							className="Input"
							type="text"
							name="username"
							onChange={this.handleChange}
							placeholder="Username"
						/>
						<br />
						<br />
						<input
							className="Input"
							type="text"
							name="group"
							onChange={this.handleChange}
							placeholder="Group Name"
						/>
						<br />
						<button
							className="Button"
							onClick={this.handleSubmit}
							disabled={this.state.username === '' || this.state.group === ''}
						>
							Submit
						</button>
						{/* <button className="Button" onClick={this.handleCurrent}>
							Current
						</button> */}
					</form>
				</div>

				<div className="Form" style={{ height: this.state.table }}>
					{this.state.result.length > 0 ? (
						<table className="CharacterTable">
							<tbody>
								<tr>
									<th>Name</th>
									<th>Dead or Alive</th>
									<th>Wight</th>
								</tr>
								{this.state.result.map((item) => {
									if (item.Wight === true && item.DoA === 'Dead') {
										return (
											<tr key={item.Name}>
												<td>{item.Name}</td>
												<td>{item.DoA}</td>
												<td>Yes</td>
											</tr>
										);
									} else if (item.Wight === true && item.DoA === 'Alive') {
										return (
											<tr key={item.Name}>
												<td>{item.Name}</td>
												<td>{item.DoA}</td>
												<td>No</td>
											</tr>
										);
									} else {
										return (
											<tr key={item.Name}>
												<td>{item.Name}</td>
												<td>{item.DoA}</td>
												<td>No</td>
											</tr>
										);
									}
								})}
							</tbody>
						</table>
					) : null}
				</div>

				<Group height={this.state.search} />
			</div>
		);
	}
}

export default Form;

import React, { Component } from 'react';
import './App.css';
import ReactHowler from 'react-howler';
import axios from "axios";
import GoT from "./assets/GoT-Song.mp3";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "TestUser",
            group: "Starks4Life",
            Jon: null,
            JonWight: false,
            Sansa: null,
            SansaWight: false,
            Arya: null,
            AryaWight: false,
            Bran: null,
            BranWight: false,
            Dany: null,
            DanyWight: false,
            Cersei: null,
            CerseiWight: false,
            Jaime: null,
            JaimeWight: false,
            Tyrion: null,
            TyrionWight: false,
            Yara: null,
            YaraWight: false,
            Theon: null,
            TheonWight: false,
            Melisandre: null,
            MelisandreWight: false,
            Jorah: null,
            JorahWight: false,
            Hound: null,
            HoundWight: false,
            Mountain: null,
            MountainWight: false,
            Sawmwell: null,
            SamwellWight: false,
            Gilly: null,
            GillyWight: false,
            Sam: null,
            SamWight: false,
            Varys: null,
            VarysWight: false,
            Brienne: null,
            BrienneWight: false,
            Davos: null,
            DavosWight: false,
            Bronn: null,
            BronnWight: false,
            Pod: null,
            PodWight: false,
            Tormund: null,
            TormundWight: false,
            Grey: null,
            GreyWight: false,
            Missandei: null,
            MissandeiWight: false,
            Gendry: null,
            GendryWight: false,
            Beric: null,
            BericWight: false,
            Euron: null,
            EuronWight: false,
            result: null,
            show: "Form",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.handleTest = this.handleTest.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleCheckBox(event) {
        this.setState({
            [event.target.name]: event.target.checked
        });
    };

    handleTest() {
        axios.post("/submit/", {
            username: this.state.username,
            group: this.state.group,
            jonSnow: "Alive",
        }).then((res) => {
            console.log(res);
            console.log("Test is this working?");
        }).catch((err) => console.log(err));
    };

    handleSubmit(event) {
        event.preventDefault();

        let result = [
            { Name: "Jon Snow", DoA: this.state.Jon, Wight: this.state.JonWight },
            { Name: "Sansa Stark", DoA: this.state.Sansa, Wight: this.state.SansaWight },
            { Name: "Arya Stark", DoA: this.state.Arya, Wight: this.state.AryaWight },
            { Name: "Bran Stark", DoA: this.state.Bran, Wight: this.state.BranWight },
            { Name: "Daenerys Targaryen", DoA: this.state.Dany, Wight: this.state.DanyWight },
            { Name: "Cersei Lannister", DoA: this.state.Cersei, Wight: this.state.CerseiWight },
            { Name: "Jaime Lannister", DoA: this.state.Jaime, Wight: this.state.JaimeWight },
            { Name: "Tyrion Lannister", DoA: this.state.Tyrion, Wight: this.state.TyrionWight },
            { Name: "Yara Greyjoy", DoA: this.state.Yara, Wight: this.state.YaraWight },
            { Name: "Theon Greyjoy", DoA: this.state.Theon, Wight: this.state.TheonWight },
            { Name: "Melisandre", DoA: this.state.Melisandre, Wight: this.state.MelisandreWight },
            { Name: "Jorah Mormont", DoA: this.state.Jorah, Wight: this.state.JorahWight },
            { Name: "The Hound", DoA: this.state.Hound, Wight: this.state.HoundWight },
            { Name: "The Mountain", DoA: this.state.Mountain, Wight: this.state.MountainWight },
            { Name: "Samwell Tarley", DoA: this.state.Samwell, Wight: this.state.SamwellWight },
            { Name: "Gilly", DoA: this.state.Gilly, Wight: this.state.GillyWight },
            { Name: "Little Same", DoA: this.state.Sam, Wight: this.state.SamWight },
            { Name: "Varys", DoA: this.state.Varys, Wight: this.state.VarysWight },
            { Name: "Brienne of Tarth", DoA: this.state.Brienne, Wight: this.state.BrienneWight },
            { Name: "Davos Seaworth", DoA: this.state.Davos, Wight: this.state.DavosWight },
            { Name: "Bronn of the Blackwater", DoA: this.state.Bronn, Wight: this.state.BronnWight },
            { Name: "Podrick Payne", DoA: this.state.Pod, Wight: this.state.PodWight },
            { Name: "Tormund Giantsbane", DoA: this.state.Tormund, Wight: this.state.TormundWight },
            { Name: "Greyworm", DoA: this.state.Grey, Wight: this.state.GreyWight },
            { Name: "Missandei", DoA: this.state.Missandei, Wight: this.state.MissandeiWight },
            { Name: "Gendry", DoA: this.state.Gendry, Wight: this.state.GendryWight },
            { Name: "Beric Dondarrion", DoA: this.state.Beric, Wight: this.state.BericWight },
            { Name: "Euron Greyjoy", DoA: this.state.Euron, Wight: this.state.EuronWight }
        ];

        this.setState({
            result,
            show: "Review"
        });
    };

    handleForm() {
        this.setState({
            show: "Form",
        });
    };

    render() {
        switch (this.state.show) {
            case "Form":
                return (
                    <div className="Form">
                        <ReactHowler
                            src={GoT}
                            playing={true}
                            loop={true}
                            ref={(ref) => (this.player = ref)}
                        />
                        <h1>Game of Thrones Pool</h1>
                        <form>
                            <div className="Character">
                                <fieldset id="Jon" onChange={this.handleChange}>
                                    <span>Jon Snow |</span>
                                    <input type="radio" name="Jon" value="Alive" />Alive
                            <input type="radio" name="Jon" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Jon === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="JonWight" disabled={this.state.Jon === null || this.state.Jon === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="JonWight" disabled={this.state.Jon === null || this.state.Jon === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Sansa" onChange={this.handleChange}>
                                    <span>Sansa Stark | </span>
                                    <input type="radio" name="Sansa" value="Alive" />Alive
                            <input type="radio" name="Sansa" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Sansa === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="SansaWight" disabled={this.state.Sansa === null || this.state.Sansa === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="SansaWight" disabled={this.state.Sansa === null || this.state.Sansa === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Arya" onChange={this.handleChange}>
                                    <span>Arya Stark | </span>
                                    <input type="radio" name="Arya" value="Alive" />Alive
                            <input type="radio" name="Arya" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Arya === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="AryaWight" disabled={this.state.Arya === null || this.state.Arya === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="AryaWight" disabled={this.state.Arya === null || this.state.Arya === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Bran" onChange={this.handleChange}>
                                    <span>Bran Stark | </span>
                                    <input type="radio" name="Bran" value="Alive" />Alive
                            <input type="radio" name="Bran" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Bran === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="BranWight" disabled={this.state.Bran === null || this.state.Bran === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="BranWight" disabled={this.state.Bran === null || this.state.Bran === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Dany" onChange={this.handleChange}>
                                    <span>Daenerys Targaryen | </span>
                                    <input type="radio" name="Dany" value="Alive" />Alive
                            <input type="radio" name="Dany" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Dany === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="DanyWight" disabled={this.state.Dany === null || this.state.Dany === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="DanyWight" disabled={this.state.Dany === null || this.state.Dany === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Cersei" onChange={this.handleChange}>
                                    <span>Cersei Lannister | </span>
                                    <input type="radio" name="Cersei" value="Alive" />Alive
                            <input type="radio" name="Cersei" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Cersei === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="CerseiWight" disabled={this.state.Cersei === null || this.state.Cersei === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="CerseiWight" disabled={this.state.Cersei === null || this.state.Cersei === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Jaime" onChange={this.handleChange}>
                                    <span>Jaime Lannister | </span>
                                    <input type="radio" name="Jaime" value="Alive" />Alive
                            <input type="radio" name="Jaime" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Jaime === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="JaimeWight" disabled={this.state.Jaime === null || this.state.Jaime === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="JaimeWight" disabled={this.state.Jaime === null || this.state.Jaime === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Tyrion" onChange={this.handleChange}>
                                    <span>Tyrion Lannister | </span>
                                    <input type="radio" name="Tyrion" value="Alive" />Alive
                            <input type="radio" name="Tyrion" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Tyrion === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="TyrionWight" disabled={this.state.Tyrion === null || this.state.Tyrion === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="TyrionWight" disabled={this.state.Tyrion === null || this.state.Tyrion === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Yara" onChange={this.handleChange}>
                                    <span>Yara Greyjoy | </span>
                                    <input type="radio" name="Yara" value="Alive" />Alive
                            <input type="radio" name="Yara" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Yara === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="YaraWight" disabled={this.state.Yara === null || this.state.Yara === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="YaraWight" disabled={this.state.Yara === null || this.state.Yara === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Theon" onChange={this.handleChange}>
                                    <span>Theon Greyjoy | </span>
                                    <input type="radio" name="Theon" value="Alive" />Alive
                            <input type="radio" name="Theon" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Theon === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="TheonWight" disabled={this.state.Theon === null || this.state.Theon === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="TheonWight" disabled={this.state.Theon === null || this.state.Theon === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Melisandre" onChange={this.handleChange}>
                                    <span>Melisandre | </span>
                                    <input type="radio" name="Melisandre" value="Alive" />Alive
                            <input type="radio" name="Melisandre" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Melisandre === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="MelisandreWight" disabled={this.state.Melisandre === null || this.state.Melisandre === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="MelisandreWight" disabled={this.state.Melisandre === null || this.state.Melisandre === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Jorah" onChange={this.handleChange}>
                                    <span>Jorah Mormont | </span>
                                    <input type="radio" name="Jorah" value="Alive" />Alive
                            <input type="radio" name="Jorah" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Jorah === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="JorahWight" disabled={this.state.Jorah === null || this.state.Jorah === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="JorahWight" disabled={this.state.Jorah === null || this.state.Jorah === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Hound" onChange={this.handleChange}>
                                    <span>The Hound | </span>
                                    <input type="radio" name="Hound" value="Alive" />Alive
                            <input type="radio" name="Hound" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Hound === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="HoundWight" disabled={this.state.Hound === null || this.state.Hound === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="HoundWight" disabled={this.state.Hound === null || this.state.Hound === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Mountain" onChange={this.handleChange}>
                                    <span>The Mountain | </span>
                                    <input type="radio" name="Mountain" value="Alive" />Alive
                            <input type="radio" name="Mountain" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Mountain === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="MountainWight" disabled={this.state.Mountain === null || this.state.Mountain === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="MountainWight" disabled={this.state.Mountain === null || this.state.Mountain === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Samwell" onChange={this.handleChange}>
                                    <span>Samwell Tarley | </span>
                                    <input type="radio" name="Samwell" value="Alive" />Alive
                            <input type="radio" name="Samwell" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Samwell === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="SamwellWight" disabled={this.state.Samwell === null === this.state.Samwell === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="SamwellWight" disabled={this.state.Samwell === null === this.state.Samwell === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Gilly" onChange={this.handleChange}>
                                    <span>Gilly | </span>
                                    <input type="radio" name="Gilly" value="Alive" />Alive
                            <input type="radio" name="Gilly" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Gilly === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="GillyWight" disabled={this.state.Gilly === null || this.state.Gilly === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="GillyWight" disabled={this.state.Gilly === null || this.state.Gilly === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Sam" onChange={this.handleChange}>
                                    <span>Little Sam | </span>
                                    <input type="radio" name="Sam" value="Alive" />Alive
                            <input type="radio" name="Sam" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Sam === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="SamWight" disabled={this.state.Sam === null || this.state.Sam === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="SamWight" disabled={this.state.Sam === null || this.state.Sam === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Varys" onChange={this.handleChange}>
                                    <span>Varys | </span>
                                    <input type="radio" name="Varys" value="Alive" />Alive
                            <input type="radio" name="Varys" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Varys === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="VarysWight" disabled={this.state.Varys === null || this.state.Varys === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="VarysWight" disabled={this.state.Varys === null || this.state.Varys === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Brienne" onChange={this.handleChange}>
                                    <span>Brienne of Tarth | </span>
                                    <input type="radio" name="Brienne" value="Alive" />Alive
                            <input type="radio" name="Brienne" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Brienne === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="BrienneWight" disabled={this.state.Brienne === null || this.state.Brienne === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="BrienneWight" disabled={this.state.Brienne === null || this.state.Brienne === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Davos" onChange={this.handleChange}>
                                    <span>Davos Seaworth | </span>
                                    <input type="radio" name="Davos" value="Alive" />Alive
                            <input type="radio" name="Davos" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Davos === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="DavosWight" disabled={this.state.Davos === null || this.state.Davos === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="DavosWight" disabled={this.state.Davos === null || this.state.Davos === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Bronn" onChange={this.handleChange}>
                                    <span>Bronn of The Blackwater | </span>
                                    <input type="radio" name="Bronn" value="Alive" />Alive
                            <input type="radio" name="Bronn" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Bronn === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="BronnWight" disabled={this.state.Bronn === null || this.state.Bronn === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="BronnWight" disabled={this.state.Bronn === null || this.state.Bronn === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Pod" onChange={this.handleChange}>
                                    <span>Podrick Payne | </span>
                                    <input type="radio" name="Pod" value="Alive" />Alive
                            <input type="radio" name="Pod" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Pod === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="PodWight" disabled={this.state.Pod === null || this.state.Pod === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="PodWight" disabled={this.state.Pod === null || this.state.Pod === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Tormund" onChange={this.handleChange}>
                                    <span>Tormund Giantsbane | </span>
                                    <input type="radio" name="Tormund" value="Alive" />Alive
                            <input type="radio" name="Tormund" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Tormund === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="TormundWight" disabled={this.state.Tormund === null || this.state.Tormund === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="TormundWight" disabled={this.state.Tormund === null || this.state.Tormund === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Grey" onChange={this.handleChange}>
                                    <span>Grey Worm | </span>
                                    <input type="radio" name="Grey" value="Alive" />Alive
                            <input type="radio" name="Grey" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Grey === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="GreyWight" disabled={this.state.Grey === null || this.state.Grey === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="GreyWight" disabled={this.state.Grey === null || this.state.Grey === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Missandei" onChange={this.handleChange}>
                                    <span>Missandei | </span>
                                    <input type="radio" name="Missandei" value="Alive" />Alive
                            <input type="radio" name="Missandei" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Missandei === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="MissandeiWight" disabled={this.state.Missandei === null || this.state.Missandei === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="MissandeiWight" disabled={this.state.Missandei === null || this.state.Missandei === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Gendry" onChange={this.handleChange}>
                                    <span>Gendry | </span>
                                    <input type="radio" name="Gendry" value="Alive" />Alive
                            <input type="radio" name="Gendry" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Gendry === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="GendryWight" disabled={this.state.Gendry === null || this.state.Gendry === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="GendryWight" disabled={this.state.Gendry === null || this.state.Gendry === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Beric" onChange={this.handleChange}>
                                    <span>Beric Dondarrion | </span>
                                    <input type="radio" name="Beric" value="Alive" />Alive
                            <input type="radio" name="Beric" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Beric === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="BericWight" disabled={this.state.Beric === null || this.state.Beric === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="BericWight" disabled={this.state.Beric === null || this.state.Beric === "Alive"} />Wight</span>
                                }
                            </div>
                            <div className="Character">
                                <fieldset id="Euron" onChange={this.handleChange}>
                                    <span>Euron Greyjoy | </span>
                                    <input type="radio" name="Euron" value="Alive" />Alive
                            <input type="radio" name="Euron" value="Dead" />Dead
                        </fieldset>
                                {(this.state.Euron === "Dead")
                                    ?
                                    <span><input onChange={this.handleCheckBox} type="checkbox" name="EuronWight" disabled={this.state.Euron === null || this.state.Euron === "Alive"} />Wight</span>
                                    : <span className="disabled"><input onChange={this.handleCheckBox} type="checkbox" name="EuronWight" disabled={this.state.Euron === null || this.state.Euron === "Alive"} />Wight</span>
                                }
                            </div>
                            <button className="Submit" onClick={this.handleSubmit}>Review</button>
                        </form>
                        <button className="Submit" onClick={this.handleTest}>Test</button>
                    </div>
                )
                break;
            case "Review":
                return (
                    <div className="Form">
                        <ReactHowler
                            src={GoT}
                            playing={true}
                            loop={true}
                            ref={(ref) => (this.player = ref)}
                        />
                        <h1>Game of Thrones Pool</h1>
                        <br />
                        <table className="CharacterTable">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Dead or Alive</th>
                                    <th>Wight</th>
                                </tr>
                                {this.state.result.map(item => {
                                    if (item.Wight === true && item.DoA === "Dead") {
                                        return (
                                            <tr key={item.Name}>
                                                <td>{item.Name}</td>
                                                <td>{item.DoA}</td>
                                                <td>Yes</td>
                                            </tr>
                                        )
                                    }
                                    else if (item.Wight === true && item.DoA === "Alive") {
                                        return (
                                            <tr key={item.Name}>
                                                <td>{item.Name}</td>
                                                <td>{item.DoA}</td>
                                                <td>No</td>
                                            </tr>
                                        )
                                    }
                                    else {
                                        return (
                                            <tr key={item.Name}>
                                                <td>{item.Name}</td>
                                                <td>{item.DoA}</td>
                                                <td>No</td>
                                            </tr>
                                        )
                                    }

                                })}
                            </tbody>
                        </table>
                        <br/>
                        <button onClick={this.handleForm}>Form</button>
                    </div>
                )
                break;
        }



    }
}

export default Form;
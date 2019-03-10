import React, { Component } from 'react';
import './App.css';
import ReactHowler from 'react-howler';
import GoT from "./assets/GoT-Song.mp3";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
            TyrronWight: false,
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
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
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
                    <fieldset id="Jon" onChange={this.handleChange}>
                        <span>Jon Snow | </span>
                        <span className="radioButtons">
                            <input type="radio" name="Jon" value="Alive" />Alive
                        <input type="radio" name="Jon" value="Dead" />Dead
                        {(this.state.Jon === "Dead")
                                ?
                                <span><input type="checkbox" name="JonWight" />Wight</span>
                                : null
                            }
                        </span>
                    </fieldset>
                    <br />
                    <fieldset id="Sansa" onChange={this.handleChange}>
                        <span>Sansa Stark | </span>
                        <input type="radio" name="Sansa" value="Alive" />Alive
                        <input type="radio" name="Sansa" value="Dead" />Dead
                        {(this.state.Sansa === "Dead")
                            ?
                            <span><input type="checkbox" name="SansaWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br />
                    <fieldset id="Arya" onChange={this.handleChange}>
                        <span>Arya Stark | </span>
                        <input type="radio" name="Arya" value="Alive" />Alive
                        <input type="radio" name="Arya" value="Dead" />Dead
                        {(this.state.Arya === "Dead")
                            ?
                            <span><input type="checkbox" name="AryaWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Bran" onChange={this.handleChange}>
                        <span>Bran Stark | </span>
                        <input type="radio" name="Bran" value="Alive" />Alive
                        <input type="radio" name="Bran" value="Dead" />Dead
                        {(this.state.Bran === "Dead")
                            ?
                            <span><input type="checkbox" name="BranWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Dany" onChange={this.handleChange}>
                        <span>Daenerys Targaryen | </span>
                        <input type="radio" name="Dany" value="Alive" />Alive
                        <input type="radio" name="Dany" value="Dead" />Dead
                        {(this.state.Dany === "Dead")
                            ?
                            <span><input type="checkbox" name="DanyWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Cersei" onChange={this.handleChange}>
                        <span>Cersei Lannister | </span>
                        <input type="radio" name="Cersei" value="Alive" />Alive
                        <input type="radio" name="Cersei" value="Dead" />Dead
                        {(this.state.Cersei === "Dead")
                            ?
                            <span><input type="checkbox" name="CerseiWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Jaime" onChange={this.handleChange}>
                        <span>Jaime Lannister | </span>
                        <input type="radio" name="Jaime" value="Alive" />Alive
                        <input type="radio" name="Jaime" value="Dead" />Dead
                        {(this.state.Jaime === "Dead")
                            ?
                            <span><input type="checkbox" name="JaimeWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Tyrion" onChange={this.handleChange}>
                        <span>Tyrion Lannister | </span>
                        <input type="radio" name="Tyrion" value="Alive" />Alive
                        <input type="radio" name="Tyrion" value="Dead" />Dead
                        {(this.state.Tyrion === "Dead")
                            ?
                            <span><input type="checkbox" name="TyrionWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Yara" onChange={this.handleChange}>
                        <span>Yara Greyjoy | </span>
                        <input type="radio" name="Yara" value="Alive" />Alive
                        <input type="radio" name="Yara" value="Dead" />Dead
                        {(this.state.Yara === "Dead")
                            ?
                            <span><input type="checkbox" name="YaraWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Theon" onChange={this.handleChange}>
                        <span>Theon Greyjoy | </span>
                        <input type="radio" name="Theon" value="Alive" />Alive
                        <input type="radio" name="Theon" value="Dead" />Dead
                        {(this.state.Theon === "Dead")
                            ?
                            <span><input type="checkbox" name="TheonWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Melisandre" onChange={this.handleChange}>
                        <span>Melisandre | </span>
                        <input type="radio" name="Melisandre" value="Alive" />Alive
                        <input type="radio" name="Melisandre" value="Dead" />Dead
                        {(this.state.Melisandre === "Dead")
                            ?
                            <span><input type="checkbox" name="MelisandreWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Jorah" onChange={this.handleChange}>
                        <span>Jorah Mormont | </span>
                        <input type="radio" name="Jorah" value="Alive" />Alive
                        <input type="radio" name="Jorah" value="Dead" />Dead
                        {(this.state.Jorah === "Dead")
                            ?
                            <span><input type="checkbox" name="JorahWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Hound" onChange={this.handleChange}>
                        <span>The Hound | </span>
                        <input type="radio" name="Hound" value="Alive" />Alive
                        <input type="radio" name="Hound" value="Dead" />Dead
                        {(this.state.Hound === "Dead")
                            ?
                            <span><input type="checkbox" name="HoundWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Mountain" onChange={this.handleChange}>
                        <span>The Mountain | </span>
                        <input type="radio" name="Mountain" value="Alive" />Alive
                        <input type="radio" name="Mountain" value="Dead" />Dead
                        {(this.state.Mountain === "Dead")
                            ?
                            <span><input type="checkbox" name="MountainWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Samwell" onChange={this.handleChange}>
                        <span>Samwell Tarley | </span>
                        <input type="radio" name="Samwell" value="Alive" />Alive
                        <input type="radio" name="Samwell" value="Dead" />Dead
                        {(this.state.Samwell === "Dead")
                            ?
                            <span><input type="checkbox" name="SamwellWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Gilly" onChange={this.handleChange}>
                        <span>Gilly | </span>
                        <input type="radio" name="Gilly" value="Alive" />Alive
                        <input type="radio" name="Gilly" value="Dead" />Dead
                        {(this.state.Gilly === "Dead")
                            ?
                            <span><input type="checkbox" name="GillyWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Sam" onChange={this.handleChange}>
                        <span>Little Sam | </span>
                        <input type="radio" name="Sam" value="Alive" />Alive
                        <input type="radio" name="Sam" value="Dead" />Dead
                        {(this.state.Sam === "Dead")
                            ?
                            <span><input type="checkbox" name="SamWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Varys" onChange={this.handleChange}>
                        <span>Varys | </span>
                        <input type="radio" name="Varys" value="Alive" />Alive
                        <input type="radio" name="Varys" value="Dead" />Dead
                        {(this.state.Varys === "Dead")
                            ?
                            <span><input type="checkbox" name="VarysWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Brienne" onChange={this.handleChange}>
                        <span>Brienne of Tarth | </span>
                        <input type="radio" name="Brienne" value="Alive" />Alive
                        <input type="radio" name="Brienne" value="Dead" />Dead
                        {(this.state.Brienne === "Dead")
                            ?
                            <span><input type="checkbox" name="BrienneWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Davos" onChange={this.handleChange}>
                        <span>Davos Seaworth | </span>
                        <input type="radio" name="Davos" value="Alive" />Alive
                        <input type="radio" name="Davos" value="Dead" />Dead
                        {(this.state.Davos === "Dead")
                            ?
                            <span><input type="checkbox" name="DavosWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Bronn" onChange={this.handleChange}>
                        <span>Bronn of The Blackwater | </span>
                        <input type="radio" name="Bronn" value="Alive" />Alive
                        <input type="radio" name="Bronn" value="Dead" />Dead
                        {(this.state.Bronn === "Dead")
                            ?
                            <span><input type="checkbox" name="BronnWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Pod" onChange={this.handleChange}>
                        <span>Podrick Payne | </span>
                        <input type="radio" name="Pod" value="Alive" />Alive
                        <input type="radio" name="Pod" value="Dead" />Dead
                        {(this.state.Pod === "Dead")
                            ?
                            <span><input type="checkbox" name="PodWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Tormund" onChange={this.handleChange}>
                        <span>Tormund Giantsbane | </span>
                        <input type="radio" name="Tormund" value="Alive" />Alive
                        <input type="radio" name="Tormund" value="Dead" />Dead
                        {(this.state.Tormund === "Dead")
                            ?
                            <span><input type="checkbox" name="TormundWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Grey" onChange={this.handleChange}>
                        <span>Grey Worm | </span>
                        <input type="radio" name="Grey" value="Alive" />Alive
                        <input type="radio" name="Grey" value="Dead" />Dead
                        {(this.state.Grey === "Dead")
                            ?
                            <span><input type="checkbox" name="GreyWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Missandei" onChange={this.handleChange}>
                        <span>Missandei | </span>
                        <input type="radio" name="Missandei" value="Alive" />Alive
                        <input type="radio" name="Missandei" value="Dead" />Dead
                        {(this.state.Missandei === "Dead")
                            ?
                            <span><input type="checkbox" name="MissandeiWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Gendry" onChange={this.handleChange}>
                        <span>Gendry | </span>
                        <input type="radio" name="Gendry" value="Alive" />Alive
                        <input type="radio" name="Gendry" value="Dead" />Dead
                        {(this.state.Gendry === "Dead")
                            ?
                            <span><input type="checkbox" name="GendryWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Beric" onChange={this.handleChange}>
                        <span>Beric Dondarrion | </span>
                        <input type="radio" name="Beric" value="Alive" />Alive
                        <input type="radio" name="Beric" value="Dead" />Dead
                        {(this.state.Beric === "Dead")
                            ?
                            <span><input type="checkbox" name="BericWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                    <br/>
                    <fieldset id="Euron" onChange={this.handleChange}>
                        <span>Euron Greyjoy | </span>
                        <input type="radio" name="Euron" value="Alive" />Alive
                        <input type="radio" name="Euron" value="Dead" />Dead
                        {(this.state.Euron === "Dead")
                            ?
                            <span><input type="checkbox" name="EuronWight" />Wight</span>
                            : null
                        }
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Form;
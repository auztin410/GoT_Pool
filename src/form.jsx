import React, { Component } from 'react';
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Jon: null,
            Sansa: null,
            Arya: null,
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
                <h1>Game of Thrones Pool</h1>
                <form>
                    <fieldset id="Jon" onChange={this.handleChange}>
                    <span>Jon Snow | </span>
                        <input type="radio" name="Jon" value="Alive" />Alive
                        <input type="radio" name="Jon" value="Dead" />Dead
                        {(this.state.Jon === "Dead")
                    ?
                    <span><input type="checkbox" name="JonWight"/>Wight</span>
                    : null
                    }                        
                    </fieldset>
                    <br/>
                    <fieldset id="Sansa" onChange={this.handleChange}>
                    <span>Sansa Stark | </span>
                    <input type="radio" name="Sansa" value="Alive" />Alive
                        <input type="radio" name="Sansa" value="Dead" />Dead
                        {(this.state.Sansa === "Dead")
                    ?
                    <span><input type="checkbox" name="SansaWight"/>Wight</span>
                    : null                    
                    }                        
                    </fieldset>
                    <br/>
                    <fieldset id="Arya" onChange={this.handleChange}>
                    <span>Arya Stark | </span>
                    <input type="radio" name="Arya" value="Alive" />Alive
                        <input type="radio" name="Arya" value="Dead" />Dead
                        {(this.state.Arya === "Dead")
                    ?
                    <span><input type="checkbox" name="AryaWight"/>Wight</span>
                    : null
                    }                        
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Form;
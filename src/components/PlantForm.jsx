import React, { Component } from 'react';
import { createPlant } from '../actions/plants';
import { connect } from 'react-redux';

export class PlantForm extends Component {

    state = {
        name: "",
        color: ""
    }

    constructor(){
        super();
        this.handleOnChange.bind(this);
        this.handleOnSubmit.bind(this);
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: [event.target.value]})
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createPlant(this.state.name, this.state.color)
        this.setState({
            name: '',
            color: ''
        })
        this.props.history.push('/plants');
    }

    render() {
        return (
            <div>
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <p>
                        <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnChange(event)}
                        placeholder="plant name" />
                    </p>
                    <p>
                        <input
                        name="color"
                        type="text"
                        value={this.state.color}
                        onChange={(event) => this.handleOnChange(event)}
                        placeholder="plant color" />
                    </p>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addPlant: (newPlant) => {
//             dispatch(addPlant(newPlant))
//         }
//     }
// }

export default connect(null, {createPlant})(PlantForm);
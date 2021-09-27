import React, { Component } from 'react';
import { addPlant, fetchPlants } from '../actions/plants';
import { connect } from 'react-redux';

export class PlantForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
            color: ''
        }
    }

    handleOnChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createPlant(this.state)
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

const mapDispatchToProps = dispatch => {
    return {
        addPlant: (newPlant) => {
            dispatch(addPlant(newPlant))
        }
    }
}

export default connect(null, mapDispatchToProps)(PlantForm);
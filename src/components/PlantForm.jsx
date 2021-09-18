import React, { Component } from 'react';
import { addPlant } from './actions/plants,js';
import { connect } from 'react-redux';

export class PlantForm extends Component {

    state = {
        name: '',
        color: ''
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addPlant(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                    <p>
                        <input
                        type="text"
                        value={this.state.name}
                        placeholder="plant name" />
                    </p>
                    <p>
                        <input
                        type="text"
                        value={this.state.color}
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
import React from 'react';
import { connect } from 'react-redux';
import { deletePlant } from '../actions/plants';

const DeleteButton = (props) => {

    let plant = props.plant

    const handleDelete = (plant) => {
        props.deletePlant(plant.id)
    }

    return (
        <button onClick={() => handleDelete(plant)}> Delete </button>
    )
}
export default connect(null, {deletePlant})(DeleteButton)
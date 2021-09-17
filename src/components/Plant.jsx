import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions/plants';

class Plants extends Component  {

    render() {

        let plants = this.props.plants.map((plant, index) => <li key={index}> {plant.name} </li>);

        return(
            <div>
                <ul>
                    {plants}
                </ul>
            </div>
        );
    
    }

};

const mapDispatchToProps = (dispatch) => {
    return { fetchPlants: () => dispatch(fetchPlants())}
}

const mapStateToProps = (state) => {
    return { plants: state.plants }
}


export default connect (mapStateToProps, mapDispatchToProps)(Plants);
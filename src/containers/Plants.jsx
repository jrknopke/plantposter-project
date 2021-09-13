import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPlants } from '../actions/plants';

export class Plants extends Component {
    
    componentDidMount(){
        this.props.fetchPlants()
    }
    
    render() {
        return (
            <div>
                <h1>Plants</h1>
                {}
            </div>
        );
    }
}

const mapStateToProps = ({plantsReducer}) => {
    return {
        plants: plantsReducer.plants,
        requesting: plantsReducer.requesting
    }
}

export default connect(mapStateToProps, { fetchPlants } )(Plants);
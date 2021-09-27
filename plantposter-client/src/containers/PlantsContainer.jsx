import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions/plants';
import Plant from '../components/Plant';

class PlantsContainer extends Component {
    componentDidMount(){
        this.props.fetchPlants()
    }

    render(){
        // debugger;
        const plants = this.props.plants.map((plant) => <Plant plant = {plant}/>)
        
        return(
        <div>
            <h2> Plants </h2>
            <div>
                { plants }
            </div>
        </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        plants: state.plants.all
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPlants
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PlantsContainer);
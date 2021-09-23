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
        const { plants } = this.props

        return(
        <div>
            <h2> Plants </h2>
            <div>
                {plants.map((plant) => <Plant key = {plant.id} plant = {plant}/>)}
            </div>
        </div>
        )
    };
};

const mapStateToProps = state => {
    console.log(state)
    return {
        plants: state.plants.all
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPlants
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PlantsContainer);
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions/plants';
import Plant from '../components/Plant';
import HomeButton from '../components/HomeButton';

class PlantsContainer extends Component {
    componentDidMount(){
        this.props.fetchPlants()
    }

    render(){
        // debugger;
        const plants = this.props.plants.map((plant) => <Plant key= {plant.name} plant = {plant}/>)
        
        return(
        <div>
            <h2> Plants </h2>
            <HomeButton/>
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
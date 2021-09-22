// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Plant from '../components/Plant';

// import { fetchPlants } from '../actions/plants';

// export class PlantsContainer extends Component {
    
//     constructor(){
//         super();

//         this.state = {
//             plants: []
//         };
//     }

//     componentDidMount(){
//         this.props.fetchPlants()
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Plants</h1>
//                 <Plant />
//             </div>
//         );
//     }
// }

// const mapStateToProps = ({plantsReducer}) => {
//     return {
//         plants: plantsReducer.plants,
//         requesting: plantsReducer.requesting
//     }
// }

// export default connect(mapStateToProps, { fetchPlants } )(PlantsContainer);
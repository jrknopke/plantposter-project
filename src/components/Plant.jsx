import React from 'react';

const Plant = ({plant}) =>
    <div>
        <h3> {plant.name} </h3>
        <p> {plant.color} </p>
        <br></br>
    </div>

export default Plant
// import { connect } from 'react-redux'
// import { fetchPlants } from '../actions/plants';

// class Plant extends Component  {

//     render() {

//         const plants = this.props.plants.map((plant, index) => <li key={index}> {plant.name} </li>);

//         return(
//             <div>
//                 <ul>
//                     {plants}
//                 </ul>
//             </div>
//         );
    
//     }

// };

// const mapDispatchToProps = (dispatch) => {
//     return { fetchPlants: () => dispatch(fetchPlants())}
// }

// const mapStateToProps = (state) => {
//     return { plants: state.plants }
// }


// export default connect (mapStateToProps, mapDispatchToProps)(Plant);
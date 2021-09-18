export const fetchPlants = () =>{
    return dispatch => {
        dispatch({type: "START_FETCH_PLANTS"})
        fetch("http://localhost:3001/plants")
        .then(resp => resp.json())
        .then(plants => {
            dispatch({type: "ADD_PLANTS", plants})
        })
    }
}

export const addPlant = (plant) => {
    return {
        type: "ADD_PLANTS", 
        plant
    };
}
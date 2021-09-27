export const fetchPlants = () =>{
    return dispatch => {
        fetch("http://localhost:3001/plants")
        .then(resp => resp.json())
        .then(plants => {
            dispatch({type: "LOAD_PLANTS", payload: plants})
        })
    }
}

export const addPlant = (plantObj) => {
    return {
        type: "ADD_PLANT",
        payload: plantObj
    }
}

export const createPlant = (plant) => {
    return (dispatch) => {
        fetch("http://localhost:3001/plants", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({plant}),
        })
        .then(resp => resp.json)
        .then(plant => {
            dispatch(addPlant(plant))
        })
    }
}
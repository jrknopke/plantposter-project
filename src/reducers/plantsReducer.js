const initialState = {
    plants: [],
    requesting: false
}

const plantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PLANTS":
            return {
                ...state,
                plants: [...state.plants, ...action.payload],
                requesting: true
            }

        case "ADD_PLANT":
            return {
                ...state,
                plants: [...state.plants, action.payload],
                requesting: false
            }

        default:
            return state
   }
}

export default plantsReducer;
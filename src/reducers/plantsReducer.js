const plantsReducer = (state = {plants: [], requesting: true}, action) => {
    switch (action.type) {
        case "START_FETCH_PLANTS":
            return {
                ...state,
                requesting: true
            }

        case "ADD_PLANTS":
            return {
                ...state,
                requesting: false,
                plants: [...action.plants]
            }

        default:
            return state
   }
}

// export default plantsReducer
const plantsReducer = (state = {plants: [], requesting: false}, action) => {
    switch (action.type) {
        case "START_FETCH_PLANTS":
            return {
                ...state,
                requesting: true
            }
            break;

        case "ADD_PLANTS":
            return {
                ...state,
                requesting: false,
                plants: [...action.plants]
            }
            break;

        default:
            return state
            break;
    }
}
export default function plantsReducer(
    state = {all: [], requesting: false}, action) {
    switch (action.type) {
        case "START_FETCH_PLANTS":
            return {
                ...state,
                requesting: true
            }

        case "LOAD_PLANTS":
            return {
                ...state,
                requesting: false,
                all: [...action.payload]
            }

        case "ADD_PLANT":
            return {
                ...state,
                requesting: false,
                all: [...state.all, action.payload]
            }

        case "DELETE_PLANT":
            return {
                all: state.all.filter(plant => plant.id !== action.payload)
            }
        
        default:
            return state
   }
}
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
            // const plant = { name: action.name, color: action.color}
            return {
                ...state,
                requesting: false,
                all: action.payload
            }
        default:
            return state
   }
}
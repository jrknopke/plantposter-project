export default function plantsReducer(
    state = {all: [], requesting: false}, action) {
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
                all: [action.payload]
            }

        default:
            return state
   }
}
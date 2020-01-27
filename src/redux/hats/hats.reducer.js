import HatsActionTypes from "./hats-types"

const INITIAL_STATE = {
    allHats: [],
    errorMessage: null
}

export default function hatsReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case HatsActionTypes.FETCH_ALL_HATS_SUCCESS:
            return {
                ...state,
                allHats: action.payload
            }
        case HatsActionTypes.FETCH_ALL_HATS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}
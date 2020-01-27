import JacketActionTypes from '../jackets/jackets-types'

const INITIAL_STATE = {
    allJackets: [],
    errorMessage: null
}

export default function jacketsReducer ( state = INITIAL_STATE, action) {
    switch (action.type) {
        case JacketActionTypes.FETCH_ALL_JACKETS_SUCCESS:
            return {
                ...state,
                allJackets: action.payload
            }
        case JacketActionTypes.FETCH_ALL_JACKETS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
            default:
                return state;
        }
}

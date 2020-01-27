import JacketActionTypes from '../jackets/jackets-types'

export const fetchAllJackets = () => ({
    type: JacketActionTypes.FETCH_ALL_JACKETS
})

export const fetchAllJacketsSuccess = (jackets) => ({
    type: JacketActionTypes.FETCH_ALL_JACKETS_SUCCESS,
    payload: jackets
})

export const fetchAllJacketsFailure = () => ({
    type: JacketActionTypes.FETCH_ALL_JACKETS_FAILURE,
    payload: 'Cannot fetch jackets at this moment'
})
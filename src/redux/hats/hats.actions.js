import HatsActionTypes from './hats-types';

export const fetchAllHats = () => ({
    type: HatsActionTypes.FETCH_ALL_HATS
})

export const fetchAllHatsSuccess = (hats) => ({
    type: HatsActionTypes.FETCH_ALL_HATS_SUCCESS,
    payload: hats
})

export const fetchAllHatsFailure = () => ({
    type: HatsActionTypes.FETCH_ALL_HATS_FAILURE,
    payload: 'Cannot fetch posts at the moment'
})
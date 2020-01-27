import { all, takeLatest, call, put } from 'redux-saga/effects'
import JacketActionTypes from '../jackets/jackets-types'
import { fetchAllJacketsSuccess, fetchAllJacketsFailure } from '../jackets/jackets.actions';


export function* fetchAllJacketsAsync () {
    const allJackets = yield call(fetchAllJackets)
    if (allJackets) {
        yield put(fetchAllJacketsSuccess(allJackets));
    } else {
        yield put(fetchAllJacketsFailure());
    }
}

export function* fetchAllJacketsSaga () {
    yield takeLatest(JacketActionTypes.FETCH_ALL_JACKETS, fetchAllJacketsAsync)
}

export function* jacketsSaga () {
    yield all([
        fetchAllJacketsSaga()
    ])
}

async function fetchAllJackets() {
    const response = await fetch('http://my-json-server.typicode.com/Bakra/react-app/jackets').then(res => res.json()).catch(error => {
        return null;
    });
    return response;
}
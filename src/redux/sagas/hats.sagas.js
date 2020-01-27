import { all, takeLatest, call, put } from 'redux-saga/effects'
import HatsActionTypes from '../hats/hats-types';
import { fetchAllHatsSuccess, fetchAllHatsFailure } from '../hats/hats.actions';

export function* fetchAllHatsAsync() {
    const allHats = yield call(fetchAllHats);
    if (allHats) {
        yield put(fetchAllHatsSuccess(allHats));
    } else {
        yield put(fetchAllHatsFailure());
    }
}

export function* fetchAllHatsSaga() {
    yield takeLatest(HatsActionTypes.FETCH_ALL_HATS, fetchAllHatsAsync);
}

export function* hatsSaga() {
    yield all([
        fetchAllHatsSaga()
    ]);
}

async function fetchAllHats() {
    const response = await fetch('http://my-json-server.typicode.com/Bakra/react-app/items').then(res => res.json()).catch(error => {
        return null;
    });
    return response;
}
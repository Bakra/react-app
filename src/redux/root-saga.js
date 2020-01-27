import { hatsSaga } from "./sagas/hats.sagas"
import { addItemSaga } from "../redux/sagas/cart.sagas"
import { jacketsSaga } from "./sagas/jackets.sagas"
import { all } from 'redux-saga/effects';
// Watcher saga
export default function* rootSaga() {
    yield all([
        hatsSaga(),
        jacketsSaga(),
        addItemSaga()
    ]);
}
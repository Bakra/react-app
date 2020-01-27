import { postsSaga } from "./sagas/posts.sagas"
import { addItemSaga } from "../redux/sagas/cart.sagas"
import { jacketsSaga } from "./sagas/jackets.sagas"
import { all } from 'redux-saga/effects';
// Watcher saga
export default function* rootSaga() {
    yield all([
        postsSaga(),
        jacketsSaga(),
        addItemSaga()
    ]);
}
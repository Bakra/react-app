import { postsSaga } from "./sagas/posts.sagas"
import { addItemSaga } from "../redux/sagas/cart.sagas"
import { all } from 'redux-saga/effects';
// Watcher saga
export default function* rootSaga() {
    yield all([
        postsSaga(),
        addItemSaga()
    ]);
}
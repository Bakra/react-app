import { all, takeLatest, call, put } from 'redux-saga/effects'
import PostsActionTypes from '../posts/post-types';
import { fetchAllPostsSuccess, fetchAllPostsFailure } from '../posts/posts.actions';

export function* fetchAllPostsAsync() {
    const allPosts = yield call(fetchAllPosts);
    if (allPosts) {
        yield put(fetchAllPostsSuccess(allPosts));
    } else {
        yield put(fetchAllPostsFailure());
    }
}

export function* fetchAllPostsSaga() {
    yield takeLatest(PostsActionTypes.FETCH_ALL_POSTS, fetchAllPostsAsync);
}

export function* postsSaga() {
    yield all([
        fetchAllPostsSaga()
    ]);
}

async function fetchAllPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).catch(error => {
        return null;
    });
    return response;
}
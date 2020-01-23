import PostsActionTypes from './post-types';

export const fetchAllPosts = () => ({
    type: PostsActionTypes.FETCH_ALL_POSTS
})

export const fetchAllPostsSuccess = (posts) => ({
    type: PostsActionTypes.FETCH_ALL_POSTS_SUCCESS,
    payload: posts
})

export const fetchAllPostsFailure = () => ({
    type: PostsActionTypes.FETCH_ALL_POSTS_FAILURE,
    payload: 'Cannot fetch posts at the moment'
})
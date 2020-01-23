import PostsActionTypes from "./post-types"

const INITIAL_STATE = {
    allPosts: [],
    errorMessage: null
}

export default function postsReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case PostsActionTypes.FETCH_ALL_POSTS_SUCCESS:
            return {
                ...state,
                allPosts: action.payload
            }
        case PostsActionTypes.FETCH_ALL_POSTS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}
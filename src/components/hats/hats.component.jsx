import React from 'react'
import { connect } from 'react-redux'
import '../hats/hats.styles.scss'
import PostsActionTypes from '../../redux/posts/post-types';


const hats = ({ hatsItems, fetchAllPosts }) => (
    
    <div>
        <button onClick={ fetchAllPosts }>Fetch clothes</button>
        <div className="main-container">
        { 
            hatsItems.map((hat) => 
                <div className="container" key={hat.id}>
                        <div><img alt="" width="200" height="250" src={`${hat.imageUrl}`}/></div>
                        <div>{hat.name}</div> 
                </div>
        )}

        </div>

    </div>
);

const mapStateToProps = state => ({
    hatsItems : state.posts.allPosts
});

const mapDispatchToProps = dispatch => ({
        fetchAllPosts: () => dispatch({ type: PostsActionTypes.FETCH_ALL_POSTS })
});

export default connect(mapStateToProps, mapDispatchToProps)(hats);

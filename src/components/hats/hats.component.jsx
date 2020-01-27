import React from 'react'
import { connect } from 'react-redux'
import '../hats/hats.styles.scss'
import HatsActionTypes from '../../redux/hats/hats-types';


const hats = ({ hatsItems, fetchAllHats }) => (
    
    <div>
        <button onClick={ fetchAllHats }>Show hats</button>
        <div className="main-container">
        { 
            hatsItems.map((hat) => 
                <div className="container" key={hat.id}>
                        <div><img alt="" width="100" height="100" src={`${hat.imageUrl}`}/></div>
                        <div>{hat.name}</div> 
                </div>
        )}

        </div>

    </div>
);



const mapStateToProps = state => ({
    hatsItems : state.hats.allHats
});

const mapDispatchToProps = dispatch => ({
        fetchAllHats: () => dispatch({ type: HatsActionTypes.FETCH_ALL_HATS })
});

export default connect(mapStateToProps, mapDispatchToProps)(hats);

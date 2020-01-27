import React from 'react'
import { connect } from 'react-redux'
import '../jackets/jackets.styles.scss'

import JacketActionTypes from '../../redux/jackets/jackets-types'


const jackets = ({ fetchAllJackets, jacketsItems }) => (

    <div>
        <button onClick={ fetchAllJackets }>Show jackets</button>
        <div className="main-container">
        { 
            jacketsItems.map((jacket) => 
                <div className="container" key={jacket.id}>
                        <div><img alt="" width="100" height="100" src={`${jacket.imageUrl}`}/></div>
                        <div>{jacket.name}</div> 
                </div>
        )}

        </div>

    </div>
);

const mapStateToProps = state => ({
    jacketsItems : state.jackets.allJackets
});

const mapDispatchToProps = dispatch => ({
    fetchAllJackets: () => dispatch({ type: JacketActionTypes.FETCH_ALL_JACKETS })
});

export default connect(mapStateToProps, mapDispatchToProps)(jackets);
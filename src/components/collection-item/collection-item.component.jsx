import React from 'react'

import { connect } from 'react-redux'
import { AddItem } from '../../redux/cart/cart.actions'

import '../collection-item/collection-item.styles.scss'

const CollectionItem = ({ item, AddItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' 
                style= {{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <button className='add-to-cart' onClick={() => AddItem(item)}>Add to cart</button>
        </div>
    )};

const mapStateToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})
export default connect(null, mapStateToProps)(CollectionItem);
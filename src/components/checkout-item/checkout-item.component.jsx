import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart, removeItem, AddItem } from '../../redux/cart/cart.actions'

import '../checkout-item/checkout-item.styles.scss'
import { fetchAllHats } from '../../redux/hats/hats.actions'
const CheckoutItem = ({ cartItem, clearItem, removeItem, AddItem, fetchAllHats }) => {

    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => AddItem(cartItem)}>&#10095;</div>
                {/* <div className='arrow' onClick={() => fetchAllHats()}>FETCHING</div> */}
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem) }>
                &#10005;
            </div>
        </div>
    );
};

const mapDistpatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    AddItem: item => dispatch(AddItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    fetchAllHats: () => dispatch(fetchAllHats())
})


export default connect(null, mapDistpatchToProps)(CheckoutItem);
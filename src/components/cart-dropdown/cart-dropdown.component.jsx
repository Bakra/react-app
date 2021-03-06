import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../cart-dropdown/cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component'

import {selectCartItems} from '../../redux/cart/cart.selectors'

const Cart = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <button onClick={()=> history.push('/checkout')}>GO TO CHECKOUT</button>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(Cart)); 
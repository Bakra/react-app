import { all, takeEvery } from 'redux-saga/effects'
import CartActionTypes from '../cart/cart.types'

function addItemSuccess () {
    console.log("Added Item")
}

export function* addItem (){
    yield takeEvery(CartActionTypes.ADD_ITEM, addItemSuccess)
}

export function* addItemSaga () {
    yield all([
        addItem()
    ])
}
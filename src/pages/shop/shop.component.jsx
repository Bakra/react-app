import React from 'react'

import SHOP_DATE from './shop.date'

import PreviewCollection from '../../components/preview-collection/preview-collection.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATE
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
               { 
                collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps}/>
                ))}
            </div>
        )
    }
} 
export default ShopPage;
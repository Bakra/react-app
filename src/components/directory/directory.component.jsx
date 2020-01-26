import React, { Component } from 'react'

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 1,
                    linkUrl: '/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: '/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 3,
                    linkUrl: '/sneakers'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 4,
                    linkUrl: '/mens'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 5,
                    linkUrl: '/womens'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map( ( {id, ...otherSections} ) => ( 
                    <MenuItem key={id} {...otherSections}/> 
                    ))
                }
            </div>
        )
    }
}
export default Directory;
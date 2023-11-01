import React from 'react'
import "./SCSS/ShopCate.scss";
function ShopCategory(props) {
    return (
        <div className='Shop-category'>
            <img src={props.banner} alt='banner' />
        </div>
    )
}

export default ShopCategory

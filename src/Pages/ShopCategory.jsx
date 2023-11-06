import React from 'react'
import "./SCSS/ShopCate.scss";
import all_product from '../Components/assets/all_product';
import Item from '../Components/Item/Item';

function ShopCategory(props) {
    return (
        <div className='Shop-category'>
            <div className="banner-box">
                <img src={props.banner} alt='banner' />
                <h1>{props.headName}</h1>

            </div>
            <div className="mens-item-area">


                {

                    all_product.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item
                                key={i}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                                id={item.id}
                            />
                        } else {
                            return null;
                        }
                    })


                }
            </div>

        </div>
    )
}

export default ShopCategory

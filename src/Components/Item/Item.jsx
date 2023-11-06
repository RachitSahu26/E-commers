import React from 'react'
import  "./Item.scss";
import "../assets/all_product";
import { Link } from 'react-router-dom';
function Item(props) {
  return (
<>
       <div className='item'>
            {/* .........shoeImg....... */}
            <div className="item-img">
               <Link to={`/product/${props.id}`}> <img src={props. image} /> </Link>
            </div>

            {/* ........detail of shoe..... */}
            <div className="item-detail">
                <p className='head-d'>{props.name}</p>
                <p>Men Color Black/white</p>
                <span>${props.new_price}</span>
                <p>${props.old_price}</p>
            </div>
        </div>
</>
  
  )
}

export default Item

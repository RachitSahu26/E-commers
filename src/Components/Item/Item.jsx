import React from 'react'
import  "./Item.scss";
import "../assets/all_product";
function Item(props) {
  return (
<>
       <div className='item'>
            {/* .........shoeImg....... */}
            <div className="item-img">
                <img src={props. image} />
            </div>

            {/* ........detail of shoe..... */}
            <div className="item-detail">
                <p className='head-d'>Red Tape</p>
                <p>Men Color Black/white</p>
                <span>{props. new_price}</span>
                <p>{props. old_price}</p>
            </div>
        </div>
</>
  
  )
}

export default Item

import React from 'react'
import "./Popularity.scss";
import Item from '../Item/Item';
import  Collection from"../assets/new_collections";
function Popularity() {
  return (
    <div className='Popularity'>
      <h1>POPULARITY</h1>

<div className="product-area">
{
Collection.map((item,i)=>{
    return (
        <Item
         key={i} 
         name={item.name} 
         image={item.image} 
          new_price={item.new_price} 
          old_price={item.old_price} 
          id={item.id}
            />
    )
})

}

</div>


    </div>
  )
}

export default Popularity

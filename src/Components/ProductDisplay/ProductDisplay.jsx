import React, { useContext } from 'react'
import "./ProductDis.scss";
import { ShopContext } from '../../Context/ShopContext';
function ProductDisplay(props) {
    const { product } = props;
    const {addToCart}=useContext(ShopContext)
    return (


        <div>
            <div className="productDis">





                {/* ..........................left display part ....... */}
                <div className="leftDis">

                    <div className="collection-img">
                        <img src={product.image} />
                        <img src={product.image} />
                        <img src={product.image} />
                        <img src={product.image} />


                    </div>



                    <div className="mainImg">
                        <img src={product.image} />


                    </div>

                </div>





                {/* ..........................right display part ....... */}
                <div className="rightDis">

                    {/* .................detail.............. */}
                    <div className="detail">

                        <h1> {product.name} </h1>
                        <p>${product.old_price} , MRP ₹2999(69% OFF)</p>
                        <p>${product.new_price}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, mollitia.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, adipisci?
                        </p>
                    </div>
                    {/* .................size select.............. */}

                    <div className="size-select">
                        <h3>Select Size</h3>
                        <button >S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>Xl</button>

                    </div>
                    {/* .................add to card.............. */}

                    <div className="add-to-card">
                        <button onClick={()=>{addToCart(product.id)}}>Add to Card</button>
                        <button>Wish List </button>
                    </div>



                </div>



            </div>
        </div>






    )
}

export default ProductDisplay

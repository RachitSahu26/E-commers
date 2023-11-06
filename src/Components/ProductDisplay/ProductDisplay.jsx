import React from 'react'
import "./ProductDis.scss";
function ProductDisplay(props) {
    const { product } = props;
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
<button>Add to Card</button>



                </div>



            </div>
        </div>






    )
}

export default ProductDisplay

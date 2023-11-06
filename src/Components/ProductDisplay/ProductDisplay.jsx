import React from 'react'
import "./ProductDis.css";
function ProductDisplay(props) {
const { product }=props;
    return (


        <div>
            <div className="productDis">
                {/* ..........................left display part ....... */}

                <div className="leftDis">
                    <img src={product.image } />
                dfdsfsdfd
                </div>
                {/* ..........................right display part ....... */}
                <div className="rightDis">

                </div>



            </div>
        </div>






    )
}

export default ProductDisplay

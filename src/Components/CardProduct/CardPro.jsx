import React from 'react'
import "./CardPro.scss";
import shoe4 from "./CardDetailImg/shoe4.jpg"
import ShoeCard from '../ShoeCard/ShoeCard';
import { Link } from 'react-router-dom';
export default function CardPro() {
    return (


        <>
        
        
        <div className=' CardProduct'>

            {/* .............right product  image.............. */}


            <div className="left">

                {/* ...........img box........ */}
                <div className="img-box">
                    <img src={shoe4}></img>
                </div>



            </div>

            {/* .............right product detail.............. */}
            <div className="right">



                <div className="shoe-detail">
                    <h3>U.S. POLO ASSN.</h3>
                    <p>Lebron 3.0 Blu Mens Textured Off White Sneakers</p>
                    <p>Based on 25 ratings</p>
                    <span>₹2,36545% Off</span>

                </div>





                <hr></hr>





                {/* ................................size box .......................... */}
                <div className="size-box">

                    <h3>Select Size</h3>
                    <button >S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>Xl</button>

                </div>






                {/* .................................add to card and wishlist ............... */}

                <div className="addCard-addWish">
                    <button>Add To Card</button>
                    <button>Add To Bag</button>


                </div>



            </div>
        </div>




<div className="card-area">



             <Link to="/cardDetail" > <ShoeCard/></Link>

             <Link to="/cardDetail" > <ShoeCard/></Link>
             <Link to="/cardDetail" > <ShoeCard/></Link>
             <Link to="/cardDetail" > <ShoeCard/></Link>
             <Link to="/cardDetail" > <ShoeCard/></Link>
             <Link to="/cardDetail" > <ShoeCard/></Link>
             <Link to="/cardDetail" > <ShoeCard/></Link>
             <Link to="/cardDetail" > <ShoeCard/></Link>
             <Link to="/cardDetail" > <ShoeCard/></Link>
             <Link to="/cardDetail" > <ShoeCard/></Link>
             <Link to="/cardDetail" > <ShoeCard/></Link>
             <Link to="/cardDetail" > <ShoeCard/></Link>
             <Link to="/cardDetail" > <ShoeCard/></Link>



</div>








        </>



    )
}

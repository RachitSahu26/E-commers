import React from 'react'
import "./NavBar.scss";
// import "../assets/all_product"
// import mylog from '../assets/logo.png';
import Shopinglog from "../assets/cart_icon.png";
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div className='nav-bar'>

            {/* ..............................left nav................ */}

            <div className="left-nav">
                {/* <img src={image. p39_img_women} alt='logo' /> */}
            </div>
            {/* ..............................mid nav................ */}

            <div className="mid-nav">
                <ul>
                <li><Link to="/shop">Shop</Link></li>
           
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/kid">Kids</Link></li>

               
                </ul>





               







            </div>






            {/* ..............................right nav................ */}






            <div className="right-nav">
                <div className="item-box">
                    <button><Link to='/signup'>LOGOUT</Link></button>
                   <Link to='/additem'>
                   
                   <img src={Shopinglog} style={{cursor:'pointer',padding:'10px 20px'}}></img>
                   </Link> 
                </div>
            </div>

        </div>
    )
}

export default NavBar

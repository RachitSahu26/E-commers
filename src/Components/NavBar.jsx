import React from 'react'
import "./NavBar.css";

import mylog from '../assets/logo.png';
import Shopinglog from '../assets/cart_icon.png';



function NavBar() {
    return (
        <div className='nav-bar'>

            {/* ..............................left nav................ */}

            <div className="left-nav">
                <img src={mylog} alt='logo' />
            </div>
            {/* ..............................mid nav................ */}

            <div className="mid-nav">
                <ul>
                    <li>Shop</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>kid</li>

                </ul>


            </div>






            {/* ..............................right nav................ */}






            <div className="right-nav">
<div className="item-box">
    <button>LOGOUT</button>
<img src={ Shopinglog}></img>
</div>
            </div>

        </div>
    )
}

export default NavBar

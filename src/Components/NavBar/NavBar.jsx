import React from 'react'
import "./NavBar.css";

// import mylog from '../assets/logo.png';
// import Shopinglog from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div className='nav-bar'>

            {/* ..............................left nav................ */}

            <div className="left-nav">
                {/* <img src={mylog} alt='logo' /> */}
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
                    <button>LOGOUT</button>
                    {/* <img src={Shopinglog}></img> */}
                </div>
            </div>

        </div>
    )
}

export default NavBar

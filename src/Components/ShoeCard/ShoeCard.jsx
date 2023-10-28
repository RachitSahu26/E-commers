import React from 'react';
import shoe5 from "./ShoeImg/shoe5.jpg"; // Update the import path
import "./shoe.scss";
function ShoeCard() {
    return (
        <div className='shoe-card'>
            {/* .........shoeImg....... */}
            <div className="shoe-img">
                <img src={shoe5} alt="Shoe" />
            </div>

            {/* ........detail of shoe..... */}
            <div className="shoe-detail">
                <p className='head-d'>Red Tape</p>
                <p>Men Color Black/white</p>
                <span>₹1,479 55% Off</span>
                <p>Extra 50% off</p>
            </div>
        </div>
    );
}

export default ShoeCard;

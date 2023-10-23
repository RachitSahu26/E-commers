import React from 'react'
// import shoe from "..../assets/shoe/shoe.jpg";
import shoe5 from "../ShoeCard/ShoeImg/shoe5.jpg";
import "../ShoeCard/shoe.css";

function ShoeCard() {
    return (
        <div className='shoe-card'>

            {/* .........shoeImg....... */}
            <div className="shoe-img">
                <img src={shoe5}/>
            </div>

            {/* ........detail of shoe..... */}

            <div className="shoe-detail">
                <p className='head-d'>Red Tape</p>
                <p>MenColor Black/white</p>
                <span>₹1,47955% Off</span>
                <p>Extra 50% off</p>
            </div>



        </div>
    )
}

export default ShoeCard

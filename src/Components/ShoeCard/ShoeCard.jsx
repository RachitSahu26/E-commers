import React from 'react'
// import shoe from "..../assets/shoe/shoe.jpg";

import "../ShoeCard/shoe.css";

function ShoeCard() {
    return (
        <div className='shoe-card'>

            {/* .........shoeImg....... */}
            <div className="shoe-img">
                {/* <img src={shoe}/> */}
            </div>

            {/* ........detail of shoe..... */}

            <div className="shoe-detail">
                <h5>Red Tape</h5>
                <p>MenColor Black/white</p>
            </div>



        </div>
    )
}

export default ShoeCard

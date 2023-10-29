import React from 'react'

import "./HeroSec.scss";
import ShoeCard from '../ShoeCard/ShoeCard';
import { Link } from 'react-router-dom';

function HeroSec({ menhead }) {
    return (
        <>

            <div className='Hero-img-sec'>
                <div className="hold-img">

                    {/* <img src={} /> */}
                </div>
                <div className="heading">
                    <h1>{menhead}</h1>

                </div>
            </div>


            {/* ...........................category and item section........... */}
            <div className="buy-item">
                {/* ..........select cagetory.... */}
                <div className="category">
                    dfdsfsdf
                </div>



                {/* .....product item..... */}
                <div className="item-box">





                    {/* <link to=></link> "/cardDetail"/cardDetail"" */}
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>
                    <Link to="/cardDetail"><ShoeCard /></Link>




                </div>

            </div>
        </>
    )
}

export default HeroSec

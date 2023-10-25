import React from 'react'
// import WomenBanner from "../assets/banner_women.png";
import "./HomeSec.css";
import ShoeCard from '../ShoeCard/ShoeCard';
import { Link } from 'react-router-dom';

function HomeSec({ menhead }) {
    return (
        <>

            <div className='Hero-img-sec'>
                <div className="hold-img">
                    {/* <img src={WomenBanner} /> */}

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
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>
            <Link to="/cardDetail"><ShoeCard/></Link>




                </div>

            </div>
        </>
    )
}

export default HomeSec

import React from 'react'
import WomenBanner from "../assets/banner_women.png";
import "./HomeSec.css";
import ShoeCard from '../ShoeCard/ShoeCard';
function HomeSec({ menhead }) {
    return (
        <>

            <div className='Hero-img-sec'>
                <div className="hold-img">
                    <img src={WomenBanner} />

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
                    <link to="/shoeDetail" >

                        <ShoeCard />

                    </link>
                    <link to="/shoeDetail" >

                        <ShoeCard />

                    </link>
                    <link to="/shoeDetail" >

                        <ShoeCard />

                    </link>
                    <link to="/shoeDetail" >

                        <ShoeCard />

                    </link>
                    <link to="/shoeDetail" >

                        <ShoeCard />

                    </link>
                    <link to="/shoeDetail" >

                        <ShoeCard />

                    </link>
                    <link to="/shoeDetail" >

                        <ShoeCard />

                    </link>
                    <link to="/shoeDetail" >

                        <ShoeCard />

                    </link>

                </div>

            </div>
        </>
    )
}

export default HomeSec

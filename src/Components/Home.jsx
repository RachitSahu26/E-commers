import React from 'react'
import WomenBanner from "../assets/banner_women.png";
// import from '../assets/cart_icon.png';
import "./Home.css";
import ShoeCard from './ShoeCard/ShoeCard';
function Home() {
    return (<>



        <div className='Hero-img-sec'>
            <div className="hold-img">
                <img src={WomenBanner} />

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
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>
       <ShoeCard/>

            </div>

        </div>
    </>



    )
}

export default Home

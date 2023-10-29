import React from 'react'
import "./CSS/LogOut.scss";
import HeroSec from '../Components/Hero/HeroSec';
function LogOut() {
  return (
    <>
   
   <div className="form">
         
         <form className='Form-area'>
   
    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="Your Email" />
    
    
        <label htmlFor="email">Password</label>
        <input type="Password" id="Password" name="Password" required placeholder="Password" />
   
    </div>
  
    <button type="submit" className="animated-button">Submit</button>
</form>

        </div>
        
        
            </>

  )
}

export default LogOut

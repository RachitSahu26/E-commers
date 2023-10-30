import React from 'react'
import "./CSS/LogOut.scss";

function LogOut() {
  return (
    <>
    <div className="wrap-container">

 <div className="container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-box">
          <input type="text" id="username" required />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-box">
          <input type="password" id="password" required />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>

    </div>

            </>

  )
}

export default LogOut

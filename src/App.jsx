import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Shop from './Pages/Shop'
import Kid from './Pages/Kid'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Home from './Components/Home'
// import Home from './Components/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
<Home/>
        <Routes>


          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/kid' element={<Kid />}></Route>
          <Route path='/men' element={<Men />}></Route>
          <Route path='/women' element={<Women />}></Route>


        </Routes>



      </BrowserRouter>

    </>
  )


}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Shop from './Pages/Shop'
import Kid from './Pages/Kid'
import Men from './Pages/Men'
import Women from './Pages/Women'
// import ShoeCard from './Components/ShoeCard/ShoeCard'
import CardDetail from './Pages/CardDetail/CardDetail'


function App() {
  return (
    <>
      <BrowserRouter>
     
        <Routes>


          <Route path='/' element={<Shop />}></Route>
          <Route path='/kid' element={<Kid />}></Route>
          <Route path='/men' element={<Men />}></Route>
          <Route path='/women' element={<Women />}></Route>
          <Route path='/cardDetail' element={<CardDetail/>}></Route>


        </Routes>



      </BrowserRouter>

    </>
  )


}

export default App

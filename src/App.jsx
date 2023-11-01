import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Shop from './Pages/Shop'

import Singup from './Pages/Singup'
import ItemAdded from './Components/ItemAdded/ItemAdded'
import ShopCategory from './Pages/ShopCategory'
import mencate from "./Components/assets/banner_mens.png";
import womencate from "./Components/assets/banner_women.png";
import kidcate from "./Components/assets/banner_kids.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/shop' element={<Shop />} />

          <Route path='/men' element={<ShopCategory headName={"Men"} banner={mencate} category="men" />} />
          <Route path='/women' element={<ShopCategory headName={"Women"} banner={womencate} category="women" />} />
          <Route path='/kid' element={<ShopCategory headName={"Kid"} banner={kidcate} category="kid" />} />

          <Route path='/signup' element={<Singup />} />
          <Route path='/additem' element={<ItemAdded />} />

        </Routes>



      </BrowserRouter>

    </>
  )


}

export default App

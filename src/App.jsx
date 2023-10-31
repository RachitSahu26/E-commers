import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Shop from './Pages/Shop'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kid from './Pages/Kid'
import Singup from './Pages/Singup'
import ItemAdded from './Components/ItemAdded/ItemAdded'


function App() {
  return (
    <>
      <BrowserRouter>
<NavBar/>  
        <Routes>

<Route  path='/shop' element={<Shop/>}/>

<Route  path='/men' element={<Men/>}/>
<Route  path='/women' element={<Women/>}/>
<Route  path='/kid' element={<Kid/>}/>

<Route  path='/signup' element={<Singup/>}/>
<Route  path='/additem' element={<ItemAdded/>}/>

        </Routes>



      </BrowserRouter>

    </>
  )


}

export default App

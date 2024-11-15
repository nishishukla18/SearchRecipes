import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainpage from './components/Mainpage'
import {Route,Routes} from 'react-router-dom';
import Mealinfo from './components/Mealinfo'

function App() {

  return (
    // <Mainpage/>
    <Routes>
      <Route path='/' element={<Mainpage/>} />
      <Route path='/:mealid' element={<Mealinfo/>} />
    </Routes>
   
  )
}

export default App
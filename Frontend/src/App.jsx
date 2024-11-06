import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import { ListaPaises } from './components/ListaPaises/consultaListaPaises';
import { PaisEspecifico } from './components/PaisEspecifico/consultaPaisEspecifico';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<ListaPaises/>}/>
            <Route path='/consultaPaisEspecifico' element={<PaisEspecifico/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App

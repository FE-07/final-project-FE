import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './component/Navbar'

import Login from './pages/Login'

import './index.css'
import BuatCampaign from './pages/BuatCampaign'
import ListPenggalangan from './pages/ListPenggalangan'

function App() {

  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <ListPenggalangan />
      {/* <h1 className="text-3xl font-bold bg-sky-300 underline-offset-2">Hello</h1> */}
    </>
  )
}

export default App

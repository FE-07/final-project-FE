import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./component/Navbar";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

import './index.css'
import BuatCampaign from './pages/BuatCampaign'
import ListPenggalangan from './pages/ListPenggalangan'
import ListKosong from "./component/ListKosong";

function App() {
  return (
    <>
      <Navbar />



      {/* <Register /> */}

      {/* <Login /> */}

      {/* <Navbar /> */}

      {/* <Login /> */}
      <ListKosong />

      {/* <BuatCampaign /> */}
      {/* <h1 className="text-3xl font-bold bg-sky-300 underline-offset-2">Hello</h1> */}
    </>
  );
}

export default App;

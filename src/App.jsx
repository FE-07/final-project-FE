import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./component/Navbar";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

<<<<<<< HEAD
import './index.css'
import BuatCampaign from './pages/BuatCampaign'
import ListCampaign from './pages/ListCampaign'
=======
import "./index.css";
import BuatCampaign from "./pages/BuatCampaign";
import ListPenggalangan from "./component/ListPenggalangan";
import ListKosong from "./component/ListKosong";

import { Routes, Route } from "react-router-dom";
import GalangDana from "./pages/GalangDana";
>>>>>>> dev

function App() {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      {/* <Login /> */}
      {/* <BuatCampaign /> */}
      <ListCampaign/>
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galangdana" element={<GalangDana />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buatcampaign" element={<BuatCampaign />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* <Register /> */}

      {/* <Login /> */}

      {/* <Navbar /> */}

      {/* <Login /> */}
      {/* <ListKosong /> */}

      {/* <BuatCampaign /> */}
>>>>>>> dev
      {/* <h1 className="text-3xl font-bold bg-sky-300 underline-offset-2">Hello</h1> */}
    </>
  );
}

export default App;

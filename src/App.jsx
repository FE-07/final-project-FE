import { useState, useEffect } from "react";
import Navbar from "./component/Navbar";

import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";

import "./index.css";
import BuatCampaign from "./pages/BuatCampaign";
import { Routes, Route } from "react-router-dom";
import GalangDana from "./pages/GalangDana";
import { PrivateRoute } from "./PrivateRoute";

import { users } from "./api";
import { campaign } from "./api";
import LoginAdmin from "./pages/loginAdmin";
import HomeLogged from "./pages/homeLogged";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    users();
    campaign();
  }, []);

  return (
    <>
      <Navbar data={""} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact element={<PrivateRoute />}>
          <Route path="/home" element={<HomeLogged />} />
        </Route>
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/galangdana" element={<GalangDana />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buatcampaign" element={<BuatCampaign />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

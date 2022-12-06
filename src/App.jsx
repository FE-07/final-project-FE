import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./component/Navbar";

import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";

import "./index.css";
import BuatCampaign from "./pages/BuatCampaign";
import ListCampaign from "./pages/ListCampaign";
import ListPenggalangan from "./component/ListPenggalangan";
import ListKosong from "./component/ListKosong";

import { Routes, Route } from "react-router-dom";
import GalangDana from "./pages/GalangDana";
import { PrivateRoute } from "./PrivateRoute";

import { users } from "./api";
import LoginAdmin from "./pages/loginAdmin";
import HomeLogged from "./pages/homeLogged";

function App() {
  // const api = import.meta.env.VITE_APP_API_USERS;
  // console.log(api);
  const [user, setUser] = useState({});

  useEffect(() => {
    users();
  }, []);

  return (
    <>
      <Navbar data={""} />
      {/* <Login /> */}
      {/* <BuatCampaign /> */}

      {/* <ListCampaign /> */}

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

      {/* <Register /> */}

      {/* <Login /> */}

      {/* <Navbar /> */}

      {/* <Login /> */}
      {/* <ListKosong /> */}

      {/* <BuatCampaign /> */}
      {/* <h1 className="text-3xl font-bold bg-sky-300 underline-offset-2">Hello</h1> */}
    </>
  );
}

export default App;

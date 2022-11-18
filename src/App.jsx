import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./component/Navbar";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      {/* <Home /> */}

      <Register />

      <Login />

      {/* <h1 className="text-3xl font-bold bg-sky-300 underline-offset-2">Hello</h1> */}
    </>
  );
}

export default App;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import InputText from "../component/InputText";

function HomeLogged() {
  return (
    <>
      <div>Ini setelah login</div>
      <InputText/>
    </>
  );
}

export default HomeLogged;

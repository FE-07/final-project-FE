import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import homeImage from "../assets/home-img.png";
import InputText from "../component/InputText";
import ListPenggalangan from "../component/ListPenggalangan";

function HomeLogged() {
  return (
    <>
    <div className="container mx-auto">
    <div className="flex flex-col-reverse lg:flex-row gap-5 mt-8 items-center">
      <div className="basis-1/2">
        <div className="flex flex-col gap-5 px-5 lg:px-0">
          <p className="text-5xl font-extrabold text-sky-600">Ayo Bantu!</p>
          <p className="text-xl lg:w-3/4">
            For Youth, By Youth Together We Turn The World Into A{" "}
            <span className="text-yellow-500">Brighter Place.</span>
          </p>
          <div className="lg:w-1/4">
          </div>
        </div>
      </div>
      <div className="basis-1/2">
        <img src={homeImage} alt="" />
      </div>
    </div>
  </div>
      <ListPenggalangan/>
    </>
  );
}

export default HomeLogged;

import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import homeImage from "../assets/home-img.png";
import handleNav from '../component/Button';
import userSlice from "../features/userSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function LandingPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const display = useSelector((state) => state.user.data || {})
  const {data} = display

  const btnLogin = (evt) => {
    navigate(`${evt}`);
  };

  return (
    <>
    <div className="container mx-auto">
    <div className="flex flex-col-reverse lg:flex-row gap-5 mt-8 items-center">
      <div className="basis-1/2">
        <div className="flex flex-col gap-5 px-5 lg:px-0">
          <p className="text-5xl font-extrabold text-sky-600">Ayo Bantu!</p>
          <p className="text-xl lg:w-3/4">
          
            For Youth, By Youth Together We Turn The World Into A{" "}
            <span className="text-yellow-500" onClick={handleNav}>Brighter Place.</span>
          </p>
          <Outlet/>
          <div className="lg:w-1/4">
            <Button
              name="Login"
              bgcolor="bg-sky-600"
              hover="hover:bg-sky-700"
              evt={() => btnLogin("login")}
            />
          </div>
        </div>
      </div>
      <div className="basis-1/2">
        <img src={homeImage} alt="" />
      </div>
    </div>
  </div>
    </>
  );
}

export default LandingPage;

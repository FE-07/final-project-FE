import React from "react";

// import image
import imgLogin from "../assets/login-img.png";
import banner from "../assets/bannerDaftar.png";

// import component
import Checkbox from "../component/Checkbox";
import Button from "../component/Button";
import InputText from "../component/InputText";

function Login() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 mt-8 items-center">
          <div className="basis-1/2">
            <img className="px-4 lg:px-0" src={imgLogin} alt="" />
          </div>

          <div className="basis-1/2 px-4 lg:px-0">
            {/* login title */}
            <p className="mb-5 text-4xl font-extrabold text-sky-700">Login</p>
            <img className="lg:w-3/4 rounded-md mb-5" src={banner} alt="" />

            {/* input type checkbox */}
            <div className="flex gap-5 mb-3">
              <Checkbox name={"User"} />
              <Checkbox name={"Admin"} />
            </div>

            {/* text input */}
            <div className="flex flex-col gap-5 lg:w-3/4">
              <InputText type="text" placeholder="masukkan username" />
              <InputText type="password" placeholder="masukkan password" />
              <Button
                name="Login"
                bgcolor="bg-sky-600"
                hover="hover:bg-sky-700"
              />
              {/* <button className="bg-sky-600 text-white px-2 py-2 rounded-md hover:bg-sky-700">
                Login
              </button> */}
              <div className="text-center">
                <p>
                  Dont have account?{" "}
                  <a href="">
                    <span className="text-sky-600">Sign Up</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Login;

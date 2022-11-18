import React from "react";
import homeImage from "../assets/home-img.png";

function Home() {
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
              <button className="bg-sky-600 hover:bg-sky-700 py-2 lg:w-1/4 rounded-md text-white">
                Login
              </button>
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

export default Home;

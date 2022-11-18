import React from "react";

import InputText from "../component/InputText";
import Checkbox from "../component/Checkbox";
import Button from "../component/Button";

import banner from "../assets/bannerDaftar.png";

function Register() {
  return (
    <>
      <div className="container mx-auto">
        <img className="w-full" src={banner} alt="" />

        <div className="flex gap-5 justify-between">
          <div className="basis-1/2">
            <p className="text-4xl font-bold text-sky-600">Daftar</p>

            <div className="flex gap-5 mb-3">
              <Checkbox name={"Partner/Donatur"} />
              <Checkbox name={"Penggalang Dana"} />
            </div>

            <div className="flex flex-col gap-5">
              <InputText
                name={"Username"}
                type={"text"}
                placeholder={"masukkan username"}
              />
              <InputText
                name={"Password"}
                type={"password"}
                placeholder={"masukkan password"}
              />
              <InputText
                name={"Alamat"}
                type={"text"}
                placeholder={"masukkan alamat"}
              />
              <InputText
                name={"Hobi"}
                type={"text"}
                placeholder={"masukkan hobi"}
              />
            </div>
          </div>

          <div className="basis-1/4">
            <div className="flex flex-col gap-3 mb-5">
              <InputText
                name={"Berkas 1"}
                type={"text"}
                placeholder={"masukkan berkas 1"}
              />
              <Button name="Upload Berkas" bgcolor="bg-sky-600" />
            </div>
            <div className="flex flex-col gap-3">
              <InputText
                name={"Berkas 1"}
                type={"text"}
                placeholder={"masukkan berkas 1"}
              />
              <Button name="Upload Berkas" bgcolor="bg-sky-600" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

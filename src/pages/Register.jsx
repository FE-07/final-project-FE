import React from "react";

import InputText from "../component/InputText";
import Checkbox from "../component/Checkbox";
import Button from "../component/Button";

import banner from "../assets/bannerDaftar.png";

function Register() {
  const submitForm = (evt) => {
    evt.preventDefault();

    console.log("Anda sudah submit");
  };

  return (
    <>
      <div className="container mx-auto lg:my-10 my-5 px-5">
        <img className="w-full rounded-md" src={banner} alt="" />
        <p className="lg:text-4xl text-2xl font-bold text-sky-600 lg:my-5 my-3">
          Daftar
        </p>

        <div className="flex gap-5 mb-3">
          <Checkbox name={"Partner/Donatur"} />
          <Checkbox name={"Penggalang Dana"} />
        </div>

        <form action="" onSubmit={submitForm} method="post">
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <div className="basis-1/2">
              <div className="flex flex-col gap-5">
                <InputText
                  title={"Nama"}
                  name={"nama"}
                  type={"text"}
                  id={"nama"}
                  placeholder={"masukkan nama lengkap"}
                />
                <InputText
                  title={"Tanggal Lahir"}
                  type={"date"}
                  id={"ttl"}
                  placeholder={"masukkan tanggal lahir"}
                />
                <InputText
                  title={"No Telepon"}
                  type={"text"}
                  id={"telp"}
                  placeholder={"masukkan nomor telepon"}
                />
                <InputText
                  title={"Email"}
                  type={"email"}
                  id={"email"}
                  placeholder={"masukkan email"}
                />
                <InputText
                  title={"Alamat"}
                  type={"text"}
                  id={"alamat"}
                  placeholder={"masukkan alamat"}
                />
                <InputText
                  title={"Username"}
                  type={"text"}
                  id={"username"}
                  placeholder={"masukkan username"}
                />
                <InputText
                  title={"Password"}
                  type={"password"}
                  id={"password"}
                  placeholder={"masukkan password"}
                />
              </div>
            </div>

            <div className="lg:relative basis-1/4">
              <div className="flex flex-col gap-3 mb-5">
                <InputText
                  name={"Berkas 1"}
                  type={"text"}
                  placeholder={"masukkan data"}
                />
                <Button name="Upload Berkas" bgcolor="bg-sky-600" />
              </div>
              <div className="flex flex-col gap-3">
                <InputText
                  name={"Berkas 1"}
                  type={"text"}
                  placeholder={"masukkan data"}
                />
                <Button name="Upload Berkas" bgcolor="bg-sky-600" />
              </div>
              <div className="lg:absolute lg:bottom-0 w-full my-5 lg:my-0">
                <Button name="Register" bgcolor="bg-teal-600" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;

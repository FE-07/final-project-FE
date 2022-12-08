import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

// import image
import imgLogin from "../assets/login-img.png";
import banner from "../assets/bannerDaftar.png";

// import component
import Button from "../component/Button";
import InputText from "../component/InputText";
import { useDispatch, useSelector } from "react-redux";
import {apiusers} from '../api'

import userSlice from "../features/userSlice";

import axios from "axios";


function Login() {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUsers((values) => ({ ...values, [name]: value }));
  };



  async function loginUser(){
    let res = await axios.get(`${apiusers}`)
    console.log(res.data)

    const userMau = await res.data.find(res =>
      res.username == users.username && res.password == users.password)

    if (userMau){
      localStorage.setItem('users',users.username)
      localStorage.setItem ('Status', "Logged in")
      console.log('login sukses')
      console.log(dispatch(userSlice.actions.getUser( res )));
      navigate('/home')
    }else{
      alert("anyway ur input wrong email/password bro/sis")  
    }
}

  const submitForm = (evt) => {
    evt.preventDefault();

    console.log(users)
    loginUser()
    setUsers({})
  };

  return (
    <>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 mt-8 items-center">
          <div className="basis-1/2">
            <img className="px-4 lg:px-0" src={imgLogin} alt="" />
          </div>

          <div className="basis-1/2 px-4 lg:px-0">
            {/* login title */}
            <p className="mb-5 text-4xl font-bold text-sky-700">Login</p>
            <img className="lg:w-3/4 rounded-md mb-5" src={banner} alt="" />

            {/* input type checkbox
            <div className="flex gap-5 mb-3">
              <Checkbox name={"User"} />
              <Checkbox name={"Admin"} />
            </div> */}

            {/* text input */}
            <div className="flex flex-col gap-5 lg:w-3/4">
              <form  onSubmit={submitForm}>
              <InputText type="text" placeholder="masukkan username" name={"username"} onChange={handleChange} value={users.username || ""} />
              <InputText type="password" placeholder="masukkan password" name={"password"} onChange={handleChange} value={users.password || ""} />
              <Button
                name="Login"
                bgcolor="bg-sky-600"
                hover="hover:bg-sky-700"
              />
              </form>
              {/* <button className="bg-sky-600 text-white px-2 py-2 rounded-md hover:bg-sky-700">
                Login
              </button> */}
              <div className="text-center">
                <p>
                  Dont have account?

                  <Link to="/register">

                    <span className="text-sky-600">Sign Up</span>
                  </Link>
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

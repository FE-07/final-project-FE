import React, { useState } from "react";
import { Link } from "react-router-dom";

// import image
import banner from "../assets/bannerDaftar.png";

import { useSelector } from "react-redux";

function LoginAdmin() {
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const data = {
        username:uname,
        password :pass,
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(data)
        dispatch(userLogin(data));
        setUname('');
        setPass('');
    }
  
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 mt-8 items-center">
          <div className="basis-1/2"></div>

          <div className="basis-1/2 px-4 lg:px-0">
            {/* login title */}
            <p className="mb-5 text-4xl font-bold text-sky-700">Admin</p>
            <img className="lg:w-3/4 rounded-md mb-5" src={banner} alt="" />

            <div className="flex flex-col gap-5 lg:w-3/4">
              <div className="flex flex-col gap-2">
                <form onSubmit={handleSubmit}>
                  <input
                    className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
                    type="text"
                    name="username"
                    placeholder="masukan username"
                    value={uname}
                    onChange={(e) => setUname(e.target.value)}
                    
                  />
                  <input
                    className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
                    type="text"
                    name="Password"
                    placeholder="masukan password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    
                  />
                    <button className="bg-sky-600 text-white px-2 py-2 rounded-md hover:bg-sky-700">
                Login
              </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;

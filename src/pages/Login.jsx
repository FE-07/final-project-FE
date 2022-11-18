import React from "react";

import imgLogin from "../assets/login-img.png"
import banner from "../assets/bannerDaftar.png"

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
                            <div className="flex gap-2">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Admin</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">User</label>
                            </div>
                        </div>

                        {/* text input */}
                        <div className="flex flex-col gap-5 lg:w-3/4">
                            <input className="outline-none bg-slate-100 border border-slate-200 px-3 py-2" type="text" name="" id="" placeholder="username" />
                            <input className="outline-none bg-slate-100 border border-slate-200 px-3 py-2" type="text" name="" id="" placeholder="password" />
                            <button className="bg-sky-600 text-white px-2 py-2 rounded-md hover:bg-sky-700">Login</button>

                            <div className="text-center">
                                <p>Dont have account? <a href=""><span className="text-sky-600">Sign Up</span></a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;

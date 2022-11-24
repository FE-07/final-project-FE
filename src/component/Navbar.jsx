import { useState } from "react";
import { Link } from "react-router-dom";
import { logoAyoBantu, IconUser } from "../assets";
import "./../css/Navbar.css";

const Navbar = () => {
    const [login, isLogin] = useState(false)

    return (
        <>
            <header className="bg-white drop-shadow-xl">
                <nav className="Navbar container mx-auto flex items-center justify-between px-2 md:px-0">
                    <Link to='/'>
                        <img src={logoAyoBantu} alt="" />
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/">Home</Link>
                        {!isLogin == true ? <Link to="/galangdana">Galang Dana</Link> : <Link to="/login">Galang Dana</Link>}

                        <Link
                            className="rounded-md px-4 text-white hover:bg-red-100 py-1 bg-sky-600"
                            to="/login"
                        >
                            Login
                        </Link>
                    </div>
                    <Link to="/login" className="flex md:hidden">
                        <img src={IconUser} alt="icon-User" />
                    </Link>
                </nav>
            </header>
        </>
    );
};

export default Navbar;

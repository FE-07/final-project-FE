import { Link } from "react-router-dom";
import { logoAyoBantu } from "../assets";
import "./../css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="bg-white drop-shadow-xl">
        <nav className="Navbar container mx-auto flex items-center justify-between px-2 md:px-0">
          <img src={logoAyoBantu} alt="" />
          <div className="flex items-center gap-8">
            <Link to="">Home</Link>
            <Link to="">Galang Dana</Link>
            <Link
              className="rounded-md px-4 text-white hover:bg-red-100 py-1 bg-sky-600"
              to=""
            >
              Login
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

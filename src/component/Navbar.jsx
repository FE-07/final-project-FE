import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoAyoBantu, IconUser } from "../assets";
import "./../css/Navbar.css";

import userSlice from "../features/userSlice";

const Navbar = () => {
  // const [login, isLogin] = useState({});
  // const [data, setData] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const displayRender = useSelector((state) => state.user.data || {});
  const { data } = displayRender;
  console.log(displayRender.status);

  useEffect(() => {
    dispatch(userSlice.actions.getUser(data));
  }, []);

  const handleClickIcon = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };

  function handleCampaign() {
    alert("eits ur not logged in");
  }

  return (
    <>
      {displayRender == undefined ? (
        <div>Loading</div>
      ) : (
        <header className="bg-white drop-shadow-xl">
          <nav className="Navbar container mx-auto flex items-center justify-between px-2 md:px-0">
            <Link to="/">
              <img src={logoAyoBantu} alt="" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {displayRender.status == 200 ? (
                <Link to="/home">Home</Link>
              ) : (
                <Link to="/">Home</Link>
              )}

              {displayRender.status == 200 ? (
                <Link to="/galangdana">Campaign</Link>
              ) : (
                <Link to="/login" onClick={handleCampaign}>
                  Campaign
                </Link>
              )}

              {displayRender.status == 200 ? (
                <img src={IconUser} alt="icon-User" onClick={handleClickIcon} />
              ) : (
                <Link
                  className="rounded-md px-4 text-white hover:bg-red-100 py-1 bg-sky-600"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navbar;

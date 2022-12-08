import ListKosong from "../component/ListKosong";
import Navbar from "../component/Navbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../features/userSlice";

const GalangDana = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const display = useSelector((state) => state.user.data || {});
  const { data } = display;

  console.log(display)

  const backToLogin = () => {
    return(
      <Navigate to='/login'/>
    )
  };

  useEffect(() => {
    backToLogin();
  }, []);

  if (display.status == 200) {
    return <ListKosong />;
    
  } else {
    return backToLogin();
  }
};

export default GalangDana;

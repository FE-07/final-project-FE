import ListKosong from "../component/ListKosong";
import Navbar from "../component/Navbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../features/userSlice";

const GalangDana = () => {
    const [data, setData] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [display, setDisplay] = useState('')
    const display = useSelector((state)=> state.data)

useEffect(() =>{
    setData(localStorage.getItem("users"))
    console.log(display)
},[])

  return (
    <>
    {
      (data == null)
      ?
        navigate('/login')
      :
      <div>
        <ListKosong/>
        {/* {
            (data == null)
            ?navigate('/login')
            :<ListKosong />
        }   */}
      </div>
    }
    </>
  );
};

export default GalangDana;

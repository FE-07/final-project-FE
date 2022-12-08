import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
export { PrivateRoute };

function PrivateRoute({ children }) {
    const display = useSelector((state) => state.user.data || {})
    const {data} = display
    const user = localStorage.getItem('status');
    


    // useEffect(() => {
    //     setUser(localStorage.getItem('status'))
    // },[])

    // console.log(user)

    // if(display !== null){
    //     return(
    //         children
    //     )
    // }else{
    //     <Outlet/>
    // }

    return (
        <>
            {user !== "Logged in" ?children : <Navigate to='/'/>   }
        </>
    )
}
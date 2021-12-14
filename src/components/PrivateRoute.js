import React,{useContext} from "react";
import {
  Navigate,
  Outlet
  
} from "react-router-dom";


 import IsAuthContext from "./context/isAuthContext";
export default function PrivateRoute(){
  const {isAuthenticated} = useContext(IsAuthContext)


        return isAuthenticated?<Outlet></Outlet>:<Navigate to="/login"></Navigate>
}
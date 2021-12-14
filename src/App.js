import React,{useState,useContext,useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Alert from "./components/Alert";
import PrivateRoute from "./components/PrivateRoute";
import IsAuthContex from "./components/context/isAuthContext"
export default function App() {
  
  const {setisAuthenticated} =useContext(IsAuthContex)
  // function PrivateOutlet() {
  //   const auth = isAuthenticated;
  //   return auth ? <Outlet /> : <Navigate to="/login" />;
  // }
const [loading, setLoading] = useState(true)

useEffect(() => {
  
  if(localStorage.getItem("isAuthenticated"))
  {
    setisAuthenticated(true);
    setLoading(false);

  }
  else{
    setLoading(false);
  }
  // eslint-disable-next-line
}, [])
return (
   
   loading?<>loading</>: 
    <Router>
      <Alert></Alert>
      <Routes>
        <Route element={<PrivateRoute ></PrivateRoute>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Route>
        <Route path="/login" exact element={<Login></Login>} />
        <Route path="/signup" exact element={<SignUp></SignUp>} />
      </Routes>
    </Router>

    
   
  );
}

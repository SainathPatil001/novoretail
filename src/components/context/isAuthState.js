
import React,{useState} from 'react'
import IsAuthContext from "./isAuthContext"
export default function IsAuthState(props) {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [alertMessge, setAlertMessage] = useState("");
  const [showAlertMessge, setShowAlertMessage] = useState(false);
  const [alertColor, setAlertColor] = useState("danger");
  
  

    return (
        <IsAuthContext.Provider value={{alertColor,setAlertColor,isAuthenticated,setisAuthenticated,alertMessge,setAlertMessage,showAlertMessge,setShowAlertMessage}}>
          {props.children}   
        </IsAuthContext.Provider>
    )
}

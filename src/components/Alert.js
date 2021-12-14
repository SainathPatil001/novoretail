import React,{useContext}from 'react'
import "./alert.css"
import IsAuthContext from './context/isAuthContext'

export default function Alert() {

    const {showAlertMessge,alertMessge,alertColor} =useContext(IsAuthContext)



    const style={
        display:showAlertMessge?"block":"none",
        backgroundColor:alertColor==="danger"?"#df4759":"#5cb85c"
    }
    return (
        <div className='mainAlertContainer' style={style} >
            {alertMessge}
        </div>
    )
}

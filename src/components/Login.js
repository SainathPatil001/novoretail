import React,{useState,useContext} from 'react'
import "./style.css"
import {
    Link
 } from "react-router-dom";
import IsAuthContext from './context/isAuthContext'
import { useNavigate  } from "react-router-dom";

export default function Login() {
    const {setShowAlertMessage,setAlertColor,setAlertMessage,setisAuthenticated} =useContext(IsAuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  const history=useNavigate()
    const handleEmail=(e)=>{

        // if(isEmail(email) !==true)
        // {
        //     emailRef.current.style.outline="1px solid red"
        // }
        // else{
        //     emailRef.current.style.outline="1px solid green"
        // }
        setEmail(e.target.value)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
          
          const data = {email,password};
          console.log(data);
          fetch('http://localhost:8000/login', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
             
            if(data.success)
            {
              setShowAlertMessage(true);
               setAlertColor("success");
               setAlertMessage("Loged In Successfuly!")
               setTimeout(() => {
                setShowAlertMessage(false)
               }, 3000);
           
               localStorage.getItem("isAuthenticated");
               localStorage.setItem("isAuthenticated",JSON.stringify(data))
               setisAuthenticated(true)
              history("/home")
            }
            else{
              setShowAlertMessage(true);
              setAlertColor("danger");
              setAlertMessage("Invalid Credentials!")
              setTimeout(() => {
                setShowAlertMessage(false)
              }, 3000);
    
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    
    
    
    // console.log("hello");
    
      }

    
    return (
        <div className='mainFormContainer'>
            
            <div className="loginTitle">
                <h2>Login</h2>
            </div>
            <div className="form">
                 <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
                     <input type="email" name="email" placeholder="Email" id="" value={email} onChange={handleEmail}/>
                     <label htmlFor="password">Password:</label>
                     <input type="password"  placeholder="Password"name='password' value={password} onChange={handlePassword}/>
                     <button type="submit">Login</button>
                 </form>
            </div>

            <div className="footerText">
                <p>Don't have an Account Please <Link to="/signup">SignUp!</Link></p>
            </div>
        </div>
    )
}
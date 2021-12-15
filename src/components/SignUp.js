import React, { useState, createRef, useEffect,useContext } from "react";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import {
   Link
} from "react-router-dom";
import "./style.css";
import { useNavigate  } from "react-router-dom";
import IsAuthContext from './context/isAuthContext'

export default function SignUp() {
  const emailRef = createRef();
  const emailSpanRef = createRef();
  const passwordRef = createRef();
  const passwordSpanRef = createRef();
  const nameRef = createRef();
  const nameSpanRef = createRef();
  const repasswordRef = createRef();
  const repasswordSpanRef = createRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("Sai@3201");
  const [repassword, setRePassword] = useState("Sai@3201");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false)
  const [disable, setDisable] = useState(false)

  const {setShowAlertMessage,setAlertColor,setAlertMessage,setisAuthenticated} =useContext(IsAuthContext)

  const handleEmail = (e) => {
    if (isEmail(email) !== true) {
      emailRef.current.style.outline = "1px solid red";
    } else {
      emailRef.current.style.outline = "1px solid green";
    }
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRePassword = (e) => {
    setRePassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };


  let history=useNavigate()
  useEffect(() => {
    if (name.length >= 3) {
      nameRef.current.style.outline = "1px solid green";
      nameSpanRef.current.style.display="none"

    } else {

      if(name!=="")
      {
        nameRef.current.style.outline = "1px solid red";
        nameSpanRef.current.style.display="inline"
      }
    
    }
    // eslint-disable-next-line
  }, [name]);

  useEffect(() => {
    // eslint-disable-next-line
    if (isEmail(email) !== true) {

      if(email!=="")
      {
      emailRef.current.style.outline = "1px solid red";
         emailSpanRef.current.style.display="inline"
      }
    } else {
      emailRef.current.style.outline = "1px solid green";
      emailSpanRef.current.style.display="none"

    }
    // eslint-disable-next-line
  }, [email]);

  useEffect(() => {
    // eslint-disable-next-line
    if (isStrongPassword(password) === true) {
      passwordRef.current.style.outline = "1px solid green";
      passwordSpanRef.current.style.display="none"

    } else {

      if(password!=="")
      {
        passwordRef.current.style.outline = "1px solid red";
        passwordSpanRef.current.style.display="inline"

      }
    }
    // eslint-disable-next-line
  }, [password]);

  useEffect(() => {
    if (repassword !== password) {
      repasswordRef.current.style.outline = "1px solid red";
      repasswordSpanRef.current.style.display="inline"
    } else {
      if (password !== "") {
        repasswordRef.current.style.outline = "1px solid green";
      repasswordSpanRef.current.style.display="none"

      }
    }
    // eslint-disable-next-line
  }, [repassword]);


  const handleSubmit=(e)=>{
    e.preventDefault()
    setLoading(true) 
    setDisable(true)
    if(name.length>=3 && isEmail(email) && isStrongPassword(password) && password===repassword)
    {
      const data = { name,email,password};
      fetch('https://novoretailbackend.herokuapp.com/signup', {
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
    setLoading(false) 
  setDisable(false)
          setShowAlertMessage(true);
           setAlertColor("success");
           setAlertMessage("User Created Successfuly!")
           setTimeout(() => {
            setShowAlertMessage(false)
           }, 3000);
       
           localStorage.getItem("isAuthenticated");
           localStorage.setItem("isAuthenticated",JSON.stringify(data))
           setisAuthenticated(true)
          history("/home")
        }
        else{
    setLoading(false) 
    setDisable(false)

          setShowAlertMessage(true);
          setAlertColor("danger");
          setAlertMessage("User Already Exits!")
          setTimeout(() => {
            setShowAlertMessage(false)
          }, 3000);

        }
      })
      .catch((error) => {
    setLoading(false) 
  setDisable(false)

    setShowAlertMessage(true);
    setAlertColor("danger");
    setAlertMessage("Something Went Wrong!")
    setTimeout(() => {
     setShowAlertMessage(false)
    }, 3000);
        console.error('Error:', error);
      });

    }
    else{
     

    }

// console.log("hello");

  }
  return (
    <div className="mainFormContainer">
      <div class="loader" style={{display:loading?"block":"none"}}></div>

      <div className="loginTitle">
        <h2>SignUp</h2>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            ref={nameRef}
            name="name"
            placeholder="Name"
            
            value={name}
            onChange={handleName}
            onBlur={(e)=>{
                     if(e.target.value==="")
                     {
                       nameRef.current.style.outline="1px solid #1877f2"
                     }
            }}
          />
          <span ref={nameSpanRef} style={{display:"none"}}>Name Must Be at least 3 character</span>
          <label htmlFor="email">Email:</label>

          <input
            type="email"
            ref={emailRef}
            name="email"
            placeholder="Email"
        
            value={email}
            onChange={handleEmail}
            onBlur={(e)=>{
              if(e.target.value==="")
              {
                emailRef.current.style.outline="1px solid #1877f2"
              }
     }}
          />
          <span ref={emailSpanRef} style={{display:"none"}}>Enter valid Email</span>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            password={passwordRef}
            placeholder="Password"
            name="password"
            value={password}
            ref={passwordRef}
            onChange={handlePassword}
            onBlur={(e)=>{
              if(e.target.value==="")
              {
                passwordRef.current.style.outline="1px solid #1877f2"
              }
     }}
          />
          <span ref={passwordSpanRef} style={{display:"none"}}>Password must be of 8 characters, Must contain One capital letter, Symbol and Number</span>
          
          <label htmlFor="repassword">R-enter Password:</label>

          <input
            type="password"
            password={repasswordRef}
            placeholder="R-enter Password"
            name="repassword" 
            value={repassword}
            onChange={handleRePassword}
            ref={repasswordRef}
            onBlur={(e)=>{
              if(e.target.value==="")
              {
                repasswordRef.current.style.outline="1px solid #1877f2"
              }
     }}
          />
          <span ref={repasswordSpanRef} style={{display:"none"}}>Password don't match</span>

          <button type="submit" disabled={disable}>SignUp</button>
        </form>
      </div>

      <div className="footerText">
        <p>Already Have an Account Please <Link to="/login">Login!</Link></p>
      </div>
    </div>
  );
}

// TODO:disable button while signup login
// TODO: haldle error something went wrong from backend
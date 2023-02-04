import React,{ useEffect, useRef, useState } from 'react'
import Home from './Home';
import './SignInSignUp.css';

const SignInSignUp = () => {
    const name=useRef();
    const email=useRef();
    const pass=useRef();

    const flag = localStorage.getItem("signup_flag");
    const localEmail = localStorage.getItem("email");
    const localUserame = localStorage.getItem("name");
    const localPass = localStorage.getItem("password");

    const [showHome,setShowHome]=useState(false);
    const [showLogin,setShowLogin]=useState(false);
    
    useEffect(()=>{
        if(flag){
            setShowHome(true);
        }

        if(localEmail){
            setShowLogin(true);
        }
    })

    const getSignupData = () =>{
        if(name.current.value&&email.current.value&&pass.current.value){
            localStorage.setItem("name",name.current.value);
            localStorage.setItem("email",email.current.value);
            localStorage.setItem("password",pass.current.value);
            localStorage.setItem("signup_flag",1)
            alert("Account Created Successfully!");
            window.location.reload()
        }
    }

    const checkAuth = ()=>{
        if(email.current.value == localEmail && pass.current.value == localPass){
            localStorage.setItem("signup_flag",1);
            window.location.reload();
        }else{
            alert("Please enter valid credential!");
        }
    }

    return (
    <div>
        {showHome?<Home />:
            (showLogin?
                <div className='container'>
                    <div className='head-label'>
                        <label><h1>SIGN IN</h1></label>
                    </div>
                    <h2 style={{color:"#6e5c5c"}}>Hii {localUserame}</h2>
                    <div className='input_fields'>
                        <input placeholder='Email' type='text' ref={email}></input>
                    </div>
                    <div className='input_fields'>
                        <input placeholder='password' type='password' ref={pass}></input>
                    </div>
                    <button type="submit" onClick={checkAuth}>LOGIN</button>
                </div>
            :
                <div className='container'>
                    <div className='head-label'>
                        <label><h1>SIGN UP</h1></label>
                    </div>
                    <div className='input_fields'>
                        <input placeholder='Name' type='text' ref={name}></input>
                    </div> 
                    <div className='input_fields'>
                        <input placeholder='Email' type='text' ref={email}></input>
                    </div>
                    <div className='input_fields'>
                        <input placeholder='password' type='password' ref={pass}></input>
                    </div>
                    <button type="submit" onClick={getSignupData}>SIGNUP</button>
                </div>
            )
        }
    </div>
  )
}

export default SignInSignUp
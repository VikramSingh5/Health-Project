import React from 'react'

const Home = () => {
    const logoutAcc = ()=>{
        localStorage.removeItem("signup_flag");
        window.location.reload();
    }
    return (
    <div>
        <h1>Home Page</h1>
        <button type='submit' onClick={logoutAcc}>Logout</button>
    </div>
  )
}

export default Home
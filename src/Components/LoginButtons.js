import React, {useEffect} from "react"
import { Link } from "react-router-dom"

function LoginButtons({currentUser, setCurrentUser}) {

    // auto-login
    //useEffect(() => {
    //  fetch("http://localhost:3000/api/v1/users/1")
    //    .then((r) => r.json())
    //    .then(r => setCurrentUser(r));
    //}, [])
  
    // manual login
    function handleLogin() {
      fetch("http://localhost:3000/autologin")
         .then((r) => r.json())
         .then(setCurrentUser);
    }
  
    // manual logout
    function handleLogout() {
      setCurrentUser(null)
    }


    return (
        <div className="flex-container">
          
            {currentUser ? 
              <div><Link to={"./"} onClick={handleLogout}> Logout</Link></div> : 
              <React.Fragment> 
                <div><Link to={"./"} onClick={handleLogin}> Demo </Link></div>
                <div><Link to={"./login"}> Login </Link></div>
                <div><Link to={"./sign-up"}> Signup </Link></div>
              </React.Fragment> 
            }
  
        </div>
    )
  }

export default LoginButtons

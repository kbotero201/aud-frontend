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
          <div>
            {currentUser ? 
              <Link to={"./"}> <button onClick={handleLogout}> Logout </button> </Link> : 
              <React.Fragment> 
                <Link to={"./"}> <button onClick={handleLogin}> Demo </button> </Link>
                <Link to={"./login"}> <button > Login </button> </Link>
              </React.Fragment> 
            }
          </div>
          <div>
            {currentUser ?  null : <Link to={"./sign-up"}><button > Sign Up </button></Link> }

          </div>
        </div>
    )
  }

export default LoginButtons

import React, {useEffect} from "react";
//import { Link } from "react-router-dom"

function LoginButtons({currentUser, setCurrentUser}) {

    // auto-login
    useEffect(() => {
      fetch("http://localhost:3000/api/v1/users/1")
        .then((r) => r.json())
        .then(r => setCurrentUser(r));
    }, []);
  
    // manual login
    function handleLogin() {
      console.log("Hi, moving away from autologin")
      // fetch("http://localhost:3000/autologin")
      //   .then((r) => r.json())
      //   .then(setCurrentUser);
    }
  
    // manual logout
    function handleLogout() {
      setCurrentUser(null)
    }


    return (
      <div className="flex-container">
        <div>
          {currentUser ? <button className="navbarbuttons" onClick={handleLogout}></button> : <button className="navbarbuttons" onClick={handleLogin}></button> }

        </div>
        <div>
          {currentUser ?  null : <button className="navbarbuttons"></button> }

        </div>
      </div>
    );
  }

export default LoginButtons

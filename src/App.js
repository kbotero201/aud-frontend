import './App.css'
import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Test from "./TestComponents/Test.js"
import Graph from "./Components/Graph.js"
import UserProfile from "./Pages/UserProfile.js"
import LoginButtons from "./Components/LoginButtons.js"
import SignUp from "./Pages/SignUp.js"
import Login from "./Pages/Login.js"
import NavButtons from "./Components/NavButtons.js"


function App() {

  const [currentUser, setCurrentUser] = useState([])


  function reloadCurrentUser(currentUser) {
    fetch(`http://127.0.0.1:3000/api/v1/users/${currentUser.id}`)
        .then((r) => r.json())
        .then(r => 
          setCurrentUser(r),
          )
  }


  return (
    <div className="App">
      <div className="grid-container">

      
      <div className="Bar">
        {currentUser? <small> Welcome, {currentUser.name} </small> : <small> No current user </small>}
      </div>

      <div className="Logo">
        <p>Logo</p>
      </div>

      <div className="Navbar">
      <LoginButtons currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </div>

    <div className="Main">
      <BrowserRouter>
        <NavButtons currentUser={currentUser} />
        <Switch>
          <Route exact path="/">
              <Test currentUser={currentUser} reloadCurrentUser={reloadCurrentUser}/>
          </Route>

          <Route exact path="/result">
              <Graph  />
          </Route>

          <Route exact path="/profile">
            <UserProfile currentUser={currentUser} reloadCurrentUser={reloadCurrentUser} />
          </Route>

          <Route exact path="/login">
            <Login setCurrentUser={setCurrentUser}/>
          </Route>

          <Route exact path="/sign-up">
            <SignUp />
          </Route>

          <Route path="*">
            <h1>404 Page</h1>
          </Route>
          
        </Switch>
      </BrowserRouter>
      </div>

      <div className="Footer">
        <h1>Footer</h1>
      </div>

      </div>
    </div>
  )
}

export default App

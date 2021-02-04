import './App.css'
import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Test from "./Test.js"
import Graph from "./Components/Graph.js"
import UserProfile from "./Pages/UserProfile.js"
import LoginButtons from "./Components/LoginButtons.js"
import SignUp from "./Pages/SignUp.js"
import Login from "./Pages/Login.js"


function App() {

  const [currentUser, setCurrentUser] = useState([])

  return (
    <div className="App">
      {currentUser? <h1> Welcome, {currentUser.name} </h1> : <h1> No current user </h1>}
      <LoginButtons currentUser={currentUser} setCurrentUser={setCurrentUser} />
      

    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <Test />
          </Route>

          <Route exact path="/result/">
              <Graph  />
          </Route>

          <Route exact path="/users/">
            <UserProfile currentUser={currentUser} />
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

    </div>
  )
}

export default App

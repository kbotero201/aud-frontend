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
import AudiologistList from "./Pages/AudiologistList.js"
import StartTest from "./Pages/StartTest/Main.js"


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [equipment, setEquipment] = useState("Audio type used")
  const [tags, setTags] = useState(null)

  useEffect(()=> {
    setTags([equipment, "Loud concert today"])
  },[equipment])



  function reloadCurrentUser(currentUser) {
    fetch(`http://127.0.0.1:3000/api/v1/users/${currentUser.id}`)
        .then((r) => r.json())
        .then(r => 
          setCurrentUser(r),
          )
  }


  return (
    <div className="App">
      <BrowserRouter>
      <div className="grid-container">
      
      <div className="Bar">
        {currentUser? <small> Welcome, {currentUser.name} </small> : <small> No current user </small>}
      </div>

      <div className="Logo">
        <p>Logo</p>
      </div>

      <div className="Navbar">
        <NavButtons currentUser={currentUser} />
      </div>

      <div className="Login">
      <LoginButtons currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </div>

    <div className="Main">
        <Switch>
          <Route exact path="/">
              <StartTest currentUser={currentUser} reloadCurrentUser={reloadCurrentUser} tags={tags} setTags={setTags} setEquipment={setEquipment}/>
          </Route>

          <Route exact path="/test">
              <Test currentUser={currentUser} reloadCurrentUser={reloadCurrentUser} tags={tags}/>
          </Route>

          <Route exact path="/Audiologists">
              <AudiologistList  />
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
      </div>

      <div className="Footer">
        <small> Made by Kevin Botero </small>
      </div>

      </div>
      </BrowserRouter>
    </div>
  )
}

export default App

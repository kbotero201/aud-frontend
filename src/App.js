import './App.css'
import React, {useState, useEffect} from 'react';
import Test from "./Test.js"
import Graph from "./Graph.js"
import UserProfile from "./Pages/UserProfile.js"
import LoginButtons from "./LoginButtons.js"
import SignUp from "./Pages/SignUp.js"
import Login from "./Pages/Login.js"


function App() {

  const [currentUser, setCurrentUser] = useState([])
  console.log(currentUser.age)

  return (
    <div className="App">
      <LoginButtons currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Test  />
      <Graph />
      <UserProfile />
      <SignUp />
      <Login setCurrentUser={setCurrentUser}/>
    </div>
  )
}

export default App

import './App.css'
import React, {useState, useEffect} from 'react';
import Test from "./Test.js"
import Graph from "./Graph.js"
import UserProfile from "./Pages/UserProfile.js"
import LoginButtons from "./LoginButtons.js"

function App() {

  const [currentUser, setCurrentUser] = useState([])


  useEffect(()=> {
    fetch("http://127.0.0.1:3000/api/v1/users/")
      .then(resp=> resp.json())
      .then(data => {
        console.log(data)
    })
  },[])

 
  return (
    <div className="App">
      <LoginButtons currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Test  />
      <Graph />
      <UserProfile />
    </div>
  )
}

export default App

import React, {useState} from "react";

function SignUp(){


    const [name, setName] =useState("")
    const [age, setAge] =useState(null)
    const[username, setUsername] = useState("")
    const [password, setPassword] = useState("")



  function handleSubmit(evt){
      console.log("submitted!")
      evt.preventDefault()

      let newUser = {
        name: name,
        age: age,
        username: username,
        password: password, 
      }

      fetch("http://127.0.0.1:3000/api/v1/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
      })
        .then(resp => resp.json())
        .then(data => {
            //console.log(data)
        })
  }



    return(
    <div className="cardlogin">
      <div className="fillsignup">
        <p>image sample </p>
      </div>
      

      <div>
      <h1> Sign Up </h1>
        <form onSubmit={handleSubmit} >
        <div >
          <p> Name </p>
          <div className="search">
          <input className="round"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            type="name" 
            name="name" 
            placeholder="Name..." />
          </div>

          <p> Age </p>
          <div className="search">
          <input className="round"
            value={age}
            onChange={(e)=> setAge(e.target.value)}
            type="age" 
            name="age" 
            placeholder="Age..." />
          </div>

          <p> Username </p>
          <div className="search">
          <input className="round"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            type="username" 
            name="username" 
            placeholder="Username..." />
          </div>
          
          <p> Password </p>
          <div className="search">
          <input className="round"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type="password" 
            name="password" 
            placeholder="Password..." />
          </div>
        </div>

        
      <div className="buttondiv">
        <button className="signupbutton" type="submit">
          Sign Up
        </button>
      </div>

        </form>
        <div>
            <input type="checkbox" id="agree" name="agree"/>
            <label for="scales">Remember Me</label>
            <p>
            By continuing past this page, you agree to the Terms of Use and understand that information will be used as described in our Privacy Policy.
            </p>
        </div>
      </div>

    </div>
    )
  }


export default SignUp
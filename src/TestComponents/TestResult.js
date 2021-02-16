import React from "react"
import Graph from "../Components/Graph.js"
import { Link } from "react-router-dom"


 function TestResult ({finalTestValues, currentUser, reloadCurrentUser, tags}) {


    function handleSaveClick(){

        const myCurrentDate = new Date()
        const date = (myCurrentDate.getMonth()+1) + '/' + myCurrentDate.getDate() + '/' + myCurrentDate.getFullYear()

        let newUserTest = {
            user_id: currentUser.id,
            test_id: 1,
            result_both: finalTestValues, 
            date: date,
            notes: tags,
          }


        fetch("http://127.0.0.1:3000/api/v1/user_tests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserTest)
        })
            .then(resp => resp.json())
            .then(data =>
                console.log(data),
                reloadCurrentUser(currentUser)
            )
    }


    return (
      <div>
        <div>
            <Graph finalTestValues={finalTestValues} />
        </div>
        <div>
            {currentUser? <Link to= {"/profile"}> <button onClick={handleSaveClick} className="large-button"> Save </button> </Link> : 
                          <Link to= {"/sign-up"}> <button className="large-button"> Sign up to save your test! </button> </Link>
            }
        </div>
      </div>
    )


  }


  export default TestResult
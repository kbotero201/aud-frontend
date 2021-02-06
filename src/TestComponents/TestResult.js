import React, { useEffect } from "react";
import Chart from "chart.js";
import Graph from "../Components/Graph.js"


 function TestResult ({finalTestValues, currentUser, reloadCurrentUser}) {


    function handleSaveClick(){

        const myCurrentDate = new Date()
        const date = (myCurrentDate.getMonth()+1) + '/' + myCurrentDate.getDate() + '/' + myCurrentDate.getFullYear()

        let newUserTest = {
            user_id: currentUser.id,
            test_id: 1,
            result_both: finalTestValues, 
            date: date,
          }


        fetch("http://127.0.0.1:3000/api/v1/user_tests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserTest)
        })
            .then(resp => resp.json())
            .then(
                //console.log(data)
                //reloadCurrentUser(currentUser)
            )

        
    }


    return (
      <div>
        <div>
            <Graph finalTestValues={finalTestValues} />
        </div>
        <div>
            {currentUser? <button onClick={handleSaveClick}> Save </button> : <button> Sign up to save your test! </button>}
        </div>
      </div>
    )


  }


  export default TestResult
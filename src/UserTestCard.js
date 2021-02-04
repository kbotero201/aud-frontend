import React, {useState} from 'react'
import Graph from "./Components/Graph.js"

function UserTestCard({test}){

    const [showGraph, setShowGraph] = useState(false)

    function handleTestClick(){
        setShowGraph(true)
    }

    function handleGraphClick(){
        setShowGraph(false)
    }

    function handleDeleteClick(){
        
        fetch(`http://127.0.0.1:3000/api/v1/user_tests/${test.id}`, {
            method: 'DELETE'
            })
              .then (r => r.json())
              .then(
                  console.log("deleted!")
                )
    }

    return(
        <div>

            <div>
                <div onClick={handleTestClick}>
                    <h3>{test.date}</h3>
                    <p>{test.result_both}</p>
                </div>
                {showGraph? <div onClick={handleGraphClick}> <Graph finalTestValues={test.result_both} /> </div> : null}
                <div onClick={handleDeleteClick}>
                    <button>Delete</button>
                </div>
            </div>

        </div>   
    )
}

export default UserTestCard
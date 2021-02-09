import React, {useState} from 'react'
import Graph from "./Graph.js"

function UserTestCard({test, handleDeletedTest}){

    const [showGraph, setShowGraph] = useState(false)

    function handleTestClick(){
        setShowGraph((showGraph) => !showGraph)
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
                  console.log("deleted!"),
                  handleDeletedTest(test.id),
                )
    }

    return(
        <div>

            <div className="testcard">
                <div className="div1">
                    <div onClick={handleTestClick}>
                        <h3>{test.date}</h3>
                        {/*<p>{test.result_both}</p>*/}
                        <p>Test #{test.id}</p>
                    </div>
                    {showGraph? <div onClick={handleGraphClick}> <Graph finalTestValues={test.result_both} /> </div> : null}
                </div>

                <div className="div2" onClick={handleDeleteClick}>
                    <img src="./Images/trash.png" alt="Trash Icon" />
                </div>
            </div>

        </div>   
    )
}

export default UserTestCard
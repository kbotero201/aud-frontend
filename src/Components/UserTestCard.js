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


    const testNotes = JSON.parse(test.notes)
    let displayTags
    if (test.notes){
        displayTags = testNotes.map((tag) => (
            <li key={tag}> {tag} </li> 
        ))
    }


    return(
        <div>

            <div className="testcard">
                <div className="div1">
                    <div onClick={handleTestClick}>
                        <h3>{test.date}</h3>
                        <p>Test #{test.id}</p>
                    </div>
                    {showGraph? 
                        <React.Fragment>
                            <div>
                                <button className='alt-large-button'><a href="mailto: ?subject=Please Take a Look At My Audiogram.&body=Here is my Hearing Test Audiogram I took on Audzi. Would you please take a look?"> Email My Result </a></button>
                                <button className='alt-large-button' id='link' download='filename.png'> Download </button>
                            </div>
                            <div onClick={handleGraphClick}> 
                            <div>
                                <ul className="input-tag__tags">
                                    {displayTags}   
                                </ul>
                            </div>
                                <Graph finalTestValues={test.result_both} /> 
                            </div>
                        </React.Fragment> 
                        : null
                    }
                </div>
                <div className="div2" onClick={handleDeleteClick}>
                    <img src="./Images/trash.png" alt="Trash Icon" />
                </div>
            </div>

        </div>   
    )
}

export default UserTestCard
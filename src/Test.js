import React, {useState, useEffect} from 'react'
import TestStepContainer from './TestStepContainer.js'
import Graph from "./Components/Graph.js"
import ProgressBar from "./ProgressBar.js"

function Test(){

    const [currentTest, setCurrentTest] = useState([])
    const [currentStep, setCurrentStep] = useState(1)
    const [stepValue, setStepValue] = useState(null)
    const [finalTestValues, setFinalTestValues] = useState([])
    const [lastStep, setLastStep] = useState(false)
    const [sounds, setSounds] = useState([])
    const [showResults, setShowResults] = useState(false)

    useEffect(()=> {
        fetch("http://127.0.0.1:3000/api/v1/tests/1")
          .then(resp=> resp.json())
          .then(data => {
            setCurrentTest(data.steps)
            setSounds(data.steps[0].sounds)
        })
    },[])


    function handleNextClick(){
        setFinalTestValues([...finalTestValues, stepValue ])
        setStepValue(null)
        setCurrentStep(currentStep + 1)
        if(currentStep === 5){
            setLastStep(true)
        }
        setSounds(currentTest[currentStep].sounds)
    }

    function handleResultsClick(){
        setFinalTestValues([...finalTestValues, stepValue ])
        setStepValue(null)
        setShowResults(true)
    }

    if (currentStep === 1){
        const displayText = <h1>Press the first button to start!</h1>
        console.log("first step")
    } else if (currentStep === 2){
        const displayText = <h1>Keep going :)</h1>
        console.log("2nd step")
    } else if (currentStep === 3){
        const displayText = <h1>Almost there</h1>
    }

    console.log("step value:" + stepValue)
    console.log("final test values:" + finalTestValues)

    return(
        <div> 
            {showResults? <Graph finalTestValues={finalTestValues}/> : 
                <div>
                    <ProgressBar currentStep={currentStep}/>
                    <h1>displayText</h1>
                    <p> Start from left to right. Once you hear a sound, click {lastStep? "see results" : "next"}. </p>        
                    <TestStepContainer sounds={sounds} setStepValue={setStepValue} />    
                    
                    {lastStep? 
                        <button disabled={stepValue === null} onClick={handleResultsClick}> See Results </button> : 
                        <button disabled={stepValue === null} onClick={handleNextClick}> Next </button>
                    }
                </div> 
            }
        </div>
    )
}

export default Test


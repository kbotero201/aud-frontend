import React, {useState, useEffect} from 'react'
import TestStepContainer from './TestStepContainer.js'
import ProgressBar from "../Components/ProgressBar.js"
import TestResult from "./TestResult.js"

function Test({currentUser, reloadCurrentUser}){

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

    function displayText(){
        if (currentStep === 1){
            return <React.Fragment> <h1>Press the first button to start!</h1> <strong> Level: 250 Hz </strong> </React.Fragment>
        } else if (currentStep === 2){
            return <React.Fragment> <h1>Keep going :)</h1> <strong> Level: 500 Hz </strong> </React.Fragment>
        } else if (currentStep === 3){
            return <React.Fragment> <h1>You're halfway there</h1> <strong> Level: 1000 Hz </strong> </React.Fragment>
        } else if (currentStep === 4){
            return <React.Fragment> <h1>So far so good!</h1> <strong> Level: 2000 Hz </strong> </React.Fragment>
        } else if (currentStep === 5){
            return <React.Fragment> <h1>Almost there</h1> <strong> Level: 4000 Hz </strong> </React.Fragment>
        } else if (currentStep === 6){
            return <React.Fragment> <h1>Last step!</h1> <strong> Level: 8000 Hz </strong> </React.Fragment>
        }
    }

    return(
        <div > 
            
            {
                showResults? <TestResult finalTestValues={finalTestValues} currentUser={currentUser} reloadCurrentUser={reloadCurrentUser}/> : 

                <div>
                    <ProgressBar currentStep={currentStep}/>
                    <div>{displayText()}</div>
                    <p> Start from left to right. Once you hear a sound, click {lastStep? "see results" : "next"}. </p>        
                    <TestStepContainer sounds={sounds} setStepValue={setStepValue} />    
                    
                    {lastStep? 
                        <button className="large-button" disabled={stepValue === null} onClick={handleResultsClick}> See Results </button> : 
                        <button className="large-button" disabled={stepValue === null} onClick={handleNextClick}> Next </button>
                    }
                </div> 
            }
            
        </div>
    )
}

export default Test


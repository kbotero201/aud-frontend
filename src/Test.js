import React, {useState} from 'react';
import TestButton from './TestButton.js'

function Test(){

    const [currentStep, setCurrentStep] = useState(1)
    const [stepValue, setStepValue] = useState(null)
    const [finalTestValues, setFinalTestValues] = useState([])
    const [lastStep, setLastStep] = useState(false)
  
    console.log(stepValue)
    console.log(finalTestValues)

    function handleNextClick(){
        setFinalTestValues([...finalTestValues, stepValue ])
        setStepValue(null)
        setCurrentStep(currentStep + 1)
        if(currentStep === 5){
            setLastStep(true)
        }
    }

    function handleResultsClick(){
        setFinalTestValues([...finalTestValues, stepValue ])
        setStepValue(null)
    }

    return(
        <div>

            <p> Test Buttons</p>

            <tr>
                <td><button className="soundbutton" >{currentStep}</button></td>

                <TestButton setStepValue={setStepValue} />
                <td><button className="soundbutton" >Play</button></td>
                <td><button className="soundbutton">Play</button></td>
                <td><button className="soundbutton">Play</button></td>
                <td><button className="soundbutton">Play</button></td>
                <td><button className="soundbutton">Play</button></td>
                <td><button className="soundbutton">Play</button></td>
                <td><button className="soundbutton">Play</button></td>
                <td><button className="soundbutton">Play</button></td>
                <td><button className="soundbutton">Play</button></td>
                <td><button className="soundbutton">Play</button></td>
                <td><button className="soundbutton">Play</button></td>
                <td><button className="soundbutton">Play</button></td>
            </tr>

    
      {lastStep? <button onClick={handleResultsClick}> See Results </button> : <button onClick={handleNextClick}> Next </button>}

        </div>
    )
}

export default Test
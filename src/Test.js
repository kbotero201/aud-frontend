import React, {useState} from 'react';
import TestButton from './TestButton.js'




function Test(){

    const [stepValue, setStepValue] = useState(null)
    const [finalTestValues, setFinalTestValues] = useState([])
  
    console.log(stepValue)
    console.log(finalTestValues)

    function handleNextClick(){
        setFinalTestValues([...finalTestValues, stepValue ])
        setStepValue(null)
    }

    return(
        <div>

            <p> Test Buttons</p>

            <tr>
                <TestButton stepValue={stepValue} setStepValue={setStepValue} />
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

      <button onClick={handleNextClick}>Next</button>
      <button> See Results </button>

      
        </div>
    )
}

export default Test
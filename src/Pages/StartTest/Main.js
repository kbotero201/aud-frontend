import React, {useState, useEffect} from 'react'
import Equipment from "./Equipment.js"
import Calibration from "./Calibration.js"

function StartTest(){

    const [startStep, setStartStep] = useState(1)

    function displayStep(){
        if (startStep === 1){
            return <Equipment setStartStep={setStartStep} />
        } else if (startStep === 2){
            return <Calibration setStartStep={setStartStep} />
        } 
        //add more set-up steps if needed
    }

    return(
        <div>
            {displayStep()}  
        </div>
    )
}

export default StartTest




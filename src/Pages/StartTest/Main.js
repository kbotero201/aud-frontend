import React, {useState, useEffect} from 'react'
import Equipment from "./Equipment.js"
import Calibration from "./Calibration.js"
import AddTags from "./AddTags.js"

function StartTest({tags, setTags}){

    const [startStep, setStartStep] = useState(1)

    function displayStep(){
        if (startStep === 1){
            return <Equipment setStartStep={setStartStep} />
        } else if (startStep === 2){
            return <AddTags setStartStep={setStartStep} tags={tags} setTags={setTags}/>
        } else if (startStep === 3){
            return  <Calibration setStartStep={setStartStep} />
        } 
        else if (startStep === 4){
            return  <React.Fragment> 
                        <h1>Start Your Hearing Test</h1>
                        <p>The quick & easy way to test your hearing</p>
                        <button> Start </button>
                    </React.Fragment>
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




import React from 'react'
import TestButton from './TestButton.js'

function TestStepContainer({sounds, setStepValue}){

    const soundsMapped = sounds.map((sound) => {
        return <TestButton sound={sound} setStepValue={setStepValue} key={sound.id}  />
    })

    return(
        <div className="soundsdiv">
            <tr className="center">
                {soundsMapped}
            </tr> 
        </div>    
    )
}

export default TestStepContainer
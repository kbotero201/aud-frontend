import React, {useState} from 'react'
import TestButton from './TestButton.js'

function TestStepContainer({sounds, setStepValue}){

    const soundsMapped = sounds.map((sound) => {
        return <TestButton sound={sound} setStepValue={setStepValue} key={sound.id} />
    })

    return(

        <div>
            <h1> test container</h1>
            <tr>
                {soundsMapped}
            </tr>
            
        </div>

        
    )
}

export default TestStepContainer
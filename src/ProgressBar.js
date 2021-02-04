import React from 'react'

function ProgressBar({currentStep}){

    return(
        <div>
            <progress value={currentStep} max={6}/>
        </div>
    )
}

export default ProgressBar
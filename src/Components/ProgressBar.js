import React from 'react'

function ProgressBar({currentStep}){

    return(
        <div className="progressdiv">
            <progress value={currentStep} max={6}/>
        </div>
    )
}

export default ProgressBar
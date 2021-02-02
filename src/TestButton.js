import React from 'react';

function TestButton({setStepValue}){

    const audio = new Audio("./sounds/hearingTest.online.warble_500_70.ogg")

    function playSound(){
        audio.play()
        const value = 10 
        setStepValue(value)
    }

    return(
        <td><button className="soundbutton" onClick={playSound}>Play</button></td>
    )
}

export default TestButton
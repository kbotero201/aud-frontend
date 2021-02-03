import React from 'react'

function TestButton({setStepValue, sound}){

    const audio = new Audio(sound.file)

    function playSound(){
        audio.play()
        const value = sound.value
        setStepValue(value)
        console.log(sound.name)
    }

    return(
        
        <td><button className="soundbutton" onClick={playSound}>Play</button></td>

    )
}

export default TestButton
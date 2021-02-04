import React, {useState} from 'react'

function TestButton({setStepValue, sound}){

    const [isPlaying, setIsPlaying] = useState(false)
    const audio = new Audio(sound.file)

    function playSound(){
        audio.play()
        const value = sound.value
        setStepValue(value)
        setIsPlaying(true)
        setTimeout(() => {
            setIsPlaying(false)
        }, 3000)
        //console.log(sound.name)
    }

    return( 
        <td>
            <button className="soundbutton" onClick={playSound}>
                { isPlaying? <img src="./Images/earsound.png" /> : <img src="./Images/earnosound.png" /> }
            </button>
        </td>
    )
}

export default TestButton
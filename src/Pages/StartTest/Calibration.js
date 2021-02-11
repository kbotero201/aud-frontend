import React, {useState} from 'react'
import { Link } from "react-router-dom"

function Calibration({setStartStep}){

    const [isPlaying, setIsPlaying] = useState(false)
    const [cantHear, setCantHear] = useState(false)
    const audio = new Audio("../Sounds/calibrated.ogg")

    function handleNextClick(){
        setStartStep(2)
    }

    function playSound(){
        audio.play()
        setIsPlaying(true)
        setTimeout(() => {
            setIsPlaying(false)
        }, 3000)
    }

    function handleCantHearClick(){
        setCantHear(()=> !cantHear)
    }
    
    return(
        <div>
            <div>
                <h1>Let's calibrate your headphones</h1>
                <p>Using headphones, listen to the calibration audio file. Then, without your headphones on, rub your hands together closely in front of your nose, quickly and firmly, and try producing the same sound.</p>
                <p>Adjust your computer's volume so that both levels match: the calibration file through your headphones, and your hands rubbing, without headphones. Once matched, do not change your levels anymore during the rest of the hearing test.</p>
            </div>

            <div>
                <button className="soundbutton" onClick={playSound}>
                    { isPlaying? <img src="./Images/earsound.png" alt="ear sound"/> : <img src="./Images/earnosound.png" alt="ear"/> }
                </button>
            </div>
            

            <div><Link to={"./test"}> <button onClick={handleNextClick}> Start the test </button> </Link></div>
            <div><button onClick={handleCantHearClick}> I don't hear my hands rubbing </button></div>
            
            {cantHear? 
                <p>You may suffer from severe hearing loss. <Link to={"./Audiologists"}> Find an Audiologist > </Link> </p> : 
                null
            }

        </div>
    )
}

export default Calibration 
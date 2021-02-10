import React from 'react'

function Equipment({setStartStep}){

    function handleNextClick(){
        setStartStep(2)
    }
    
    return(
        <div>

            <h1>Let's make sure you have the right equipment</h1>

            <div>
                <div>
                    <img src="./Images/yelp_logo.png" className="yelp-logo"></img>
                    <h3>(reccomended)</h3>
                </div>
                <div>
                    <img src="./Images/yelp_logo.png" className="yelp-logo"></img>
                    <h3>(acceptable)</h3>
                </div>
                <div>
                    <img src="./Images/yelp_logo.png" className="yelp-logo"></img>
                    <h3>(do not use)</h3>
                </div>
            </div>
            <button onClick={handleNextClick}> I'm ready! </button>

        </div>
    )
}

export default Equipment 
import React, { useEffect, useState } from "react";
import Chart from "chart.js";

 function Graph({finalTestValues}) {

    const [url, setUrl] = useState("")

    const max = Math.max(...finalTestValues)
    let resultText = "hello"
    if (max < 20){
        resultText= <h3> <img className="icon" src="../Images/tick.png" alt="Checkmark" /> Great Job! Your hearing is within normal range. </h3>
    } else {
        resultText= <h3>  <img className="icon" src="../Images/warning.png" alt="Warning" />You may have signs of hearing loss. Send your test results to an Audiologist for review. </h3>
    }


    useEffect(() => {

      const ctx = document.getElementById("myChart").getContext('2d')
      const xlabels = [null, finalTestValues[0],finalTestValues[1],finalTestValues[2],finalTestValues[3],finalTestValues[4],finalTestValues[5]]
        let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '250 Hz', '500 Hz', '1,000 Hz', '2,000 Hz', '4,000 Hz', '8,000 Hz', ''],
            datasets: [{
                label: 'Loudness(dB)',
                lineTension: 0,
                fill: false,
                pointRadius: 10,
                data: xlabels,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                
                xAxes: [{
                    position: 'top',
                    
                
                }],
                yAxes: [{
                    ticks: {
                        min: -10,
                        max: 90,
                        stepSize: 10,
                        reverse: true,
                    }
                }]
            },
            animation: {
                onComplete : () => {
                    const url_base64 = chart.toBase64Image()
                    setUrl(url_base64)
                  } 
            }
        }
    })
    },[])


    return (
      <div>
        <div>
            { resultText }
            <canvas id="myChart" width="50" height="50" />
            <div>
                <a href="mailto: ?subject=Please Take a Look At My Audiogram.&body=Here is my Hearing Test Audiogram I took on Audzi. Would you please take a look?"> <button className='alt-large-button'> Email My Result </button> </a>
                <a href={url} download='Audiogram.png'> <button className='alt-large-button' id='link' download='filename.png'> Download </button> </a>
            </div>
        </div>
      </div>
    )

  }


  export default Graph
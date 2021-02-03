import React, { useEffect } from "react";
import Chart from "chart.js";


 function Graph({finalTestValues}) {

    console.log("graph values:" + finalTestValues)

    useEffect(() => {
      const ctx = document.getElementById("myChart")
      const xlabels = [null, finalTestValues[0],finalTestValues[1],finalTestValues[2],finalTestValues[3],finalTestValues[4],finalTestValues[5]]
      new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '250Hz', '500Hz', '1,000Hz', '2,000Hz', '4,000Hz', '8,000Hz', ''],
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
                        min: 0,
                        max: 80,
                        stepSize: 10,
                        reverse: true,
                        //beginAtZero: true
                    }
                }]
            }
        }
    });
    })


    return (
      <div>
        <canvas id="myChart" width="50" height="50" />
      </div>
    )


  }



  export default Graph
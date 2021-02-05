import React, { useEffect } from "react";
import Chart from "chart.js";


 function Graph({finalTestValues}) {


    useEffect(() => {
      const ctx = document.getElementById("myChart")
      const xlabels = [null, finalTestValues[0],finalTestValues[1],finalTestValues[2],finalTestValues[3],finalTestValues[4],finalTestValues[5]]
      new Chart(ctx, {
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
        <div>
            <canvas id="myChart" width="50" height="50" />
        </div>
      </div>
    )


  }


  export default Graph
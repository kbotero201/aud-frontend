import React, { useEffect } from "react";
import Chart from "chart.js";


 function Graph() {

    useEffect(() => {
      const ctx = document.getElementById("myChart")
      //const xlabels = 
      new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '250', '500', '1,000', '2,000', '4,000', '8,000', ''],
            datasets: [{
                label: 'Hearing Level',
                lineTension: 0,
                fill: false,
                pointRadius: 10,
                data: [null, 40, 19, 3, 5, 2, 3],
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
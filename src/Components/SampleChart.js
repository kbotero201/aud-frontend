import React, { useEffect, useState } from "react";
import Chart from "chart.js";

function SampleChart(){

const [url, setUrl] = useState("")

console.log(url)

useEffect(()=> {
const ctx = document.getElementById("chart").getContext('2d')
let chart = new Chart(ctx, {
    type: 'bar',
    data: {
       labels: ['Standing costs', 'Running costs'], 
       datasets: [{
          label: 'Washing and cleaning',
          data: [0, 8],
          backgroundColor: '#22aa99'
       }, {
          label: 'Traffic tickets',
          data: [0, 2],
          backgroundColor: '#994499'
       }, {
          label: 'Tolls',
          data: [0, 1],
          backgroundColor: '#316395'
       }, {
          label: 'Parking',
          data: [5, 2],
          backgroundColor: '#b82e2e'
       }, {
          label: 'Car tax',
          data: [0, 1],
          backgroundColor: '#66aa00'
       }, {
          label: 'Repairs and improvements',
          data: [0, 2],
          backgroundColor: '#dd4477'
       }, {
          label: 'Maintenance',
          data: [6, 1],
          backgroundColor: '#0099c6'
       }, {
          label: 'Inspection',
          data: [0, 2],
          backgroundColor: '#990099'
       }, {
          label: 'Loan interest',
          data: [0, 3],
          backgroundColor: '#109618'
       }, {
          label: 'Depreciation of the vehicle',
          data: [0, 2],
          backgroundColor: '#109618'
       }, {
          label: 'Fuel',
          data: [0, 1],
          backgroundColor: '#dc3912'
       }, {
          label: 'Insurance and Breakdown cover',
          data: [4, 0],
          backgroundColor: '#3366cc'
       }]
    },
    options: {
       responsive: false,
       legend: {
          position: 'right' // place legend on the right side of chart
       },
       scales: {
          xAxes: [{
             stacked: true // this should be set to make the bars stacked
          }],
          yAxes: [{
             stacked: true // this also..
          }]
       },
       animation : {
          onComplete : () => {
              //console.log(chart.toBase64Image())
              const url_base64 = chart.toBase64Image()
              setUrl(url_base64)
              console.log("hello")
            }
       }      
    }
 })
 },[])
 

 //function done(){
 //       var url_base64 = chart.toBase64Image()
 //       setUrl(url_base64)
 //       console.log("hello")
 //}



 return(
     <div>
          <canvas id="chart" width="1000" height="700" />
          <a href={url} download='Audiogram.png'> Download Results </a>
     </div>

    )
}


export default SampleChart

 
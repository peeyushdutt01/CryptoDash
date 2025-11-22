import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import './LineChart.css'

const LineChart = ({ historicalData }) => {

    const [data, setData] = useState([["Date", "Prices"]])
    useEffect(() => {
        let dataCopy = [['Date', 'Prices']];
        if (historicalData.prices) {
            historicalData.prices.map((item) => {
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
            })
            setData(dataCopy);
        }
    }, [historicalData])


    return (
        <Chart 
            className='linechart'
            chartType='LineChart'
            data={data}
            options={{
                backgroundColor: "transparent",                     // removes white bg
                chartArea: {
                    backgroundColor: "transparent",                  // transparent inner area too
                    width: "70%",
                    height: "60%"
                },
                colors: ["#21d6b5"],                               
                hAxis: {
                    textStyle: { color: "#EAEAEA" , fontSize: 10},                 
                    gridlines: { color: "rgba(255,255,255,0.1)" }   
                },
                vAxis: {
                    
                    textStyle: { color: "#EAEAEA" , fontSize: 10},
                    gridlines: { color: "rgba(255,255,255,0.1)" }
                },
                legend: "none",                                      
                lineWidth: 3,
                curveType: "function",                             
                tooltip: { textStyle: { color: "#000" } }          
            }}
            height="100%"
            legendToggle
        />
    )
}

export default LineChart
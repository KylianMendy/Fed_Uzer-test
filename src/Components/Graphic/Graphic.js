import React from 'react'
import { Chart } from "react-google-charts";
import '../Graphic/Graphic.scss'

function Graphic(props) {

  const values = props.values
  const data = [
    ["Task", "Hours per Day"],
    ["ValueX", values[0]],
    ["ValueY", values[1]],
  ];

  const options = {
    backgroundColor: { fill:'transparent' },
    colors:["#FFC953","#F47000"],
    pieHole: 0.5,
    is3D: false
  };

  return (
    <div className='graphic'>
      <Chart
          chartType="PieChart"
          width="100%"
          height="350px"
          data={data}
          options={options}
        />
    </div>
  )
  
}

export default Graphic

import React from 'react'
import "../Chart/chart.css";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend, ResponsiveContainer} from "recharts";

const Chart = ({data, dataKey, title, name}) => {
  return (
<div className='chart mx-5 my-4'>
<h4 className='fs-4 fw-bold p-5'>{title}</h4>
<ResponsiveContainer width="100%" aspect={4/1}>
<LineChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 70,
        left: 45,
        bottom: 45
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={name} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={dataKey}
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
</ResponsiveContainer>

</div>



  )
}

export default Chart


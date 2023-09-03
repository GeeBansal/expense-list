import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  // const dataPointValues = props.dataPoints?.map(dataPoint => (dataPoint.value));
  // const totalMaximum = Math.max(...dataPointValues);
  // const totalMaximum =Math.random();
  let totalMax=0;
  const dataPointValues=props.datapoints.map((data)=>(totalMax=totalMax+data.value));
  // const totalMax=Math.max(...dataPointValues)
  
  return (
    <div className='chart'>

      {/* hello */}
      {props.datapoints.map((dataPoint)=><ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />)}
      
    </div>
  );
};

export default Chart;
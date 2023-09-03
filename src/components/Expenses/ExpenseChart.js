import React from 'react'
import Chart from '../Charts/Chart'

const ExpenseChart = (props) => {
    const dataPoints=[
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sept',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0}
    ]
    for(const expense of props.expenses){
      const month=expense.date.getMonth();
      dataPoints[month].value=dataPoints[month].value+expense.amount
      // console.log(expense);
    } 
// console.log(dataPoints);
  return (
   <Chart datapoints={dataPoints} />
    // <h1>hello</h1>
  )
}

export default ExpenseChart
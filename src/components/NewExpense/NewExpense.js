import React from 'react'
import { useState } from "react";

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [show,setShow]=useState(false);
  const SaveExpenseDataHandler=(data)=>{
      // props.onSubmit(data)
      const expenseData={
        ...data,
        id:Math.random().toString()
      }
      // console.log(expenseData);
      props.onSubmit(expenseData);
      setShow(false);
  }
  const stopHandler=()=>{
    setShow(false);
  }
  return (
    <div className='new-expense'>
      {!show && <button onClick={()=>setShow((prevShow)=>(!prevShow))}>Add New Expense</button>}
      {show &&  <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopHandler} />}
    </div>
  )
}

export default NewExpense
import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    console.log(expenseData);
     props.onSaveExpenseData(expenseData);
    setTitle('')
    setAmount('');
    setDate('');
  };
  //     const datehandler=(e)=>{
  // setDate(e.target.value);
  //     }
  const inputchangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "date") {
      setDate(value);
    } else {
      setAmount(value);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => inputchangeHandler("title", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}  
            onChange={(e) => inputchangeHandler("amount", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            value={date}
            max="2023-12-31"
            onChange={(e) => inputchangeHandler("date", e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

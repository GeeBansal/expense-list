import React from "react";

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  return (
    <div className="expense-date">
      <div className="expense-date__month">{props.date.toLocaleDateString("en-US", { month: "long" })}</div>
      <div className="expense-date__year">{props.date.getFullYear()}</div>
      <div className="expense-date__day">{props.date.toLocaleDateString("en-US", { day: "2-digit" })}</div>
    </div>
  );
};

export default ExpenseDate;

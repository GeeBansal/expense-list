import React, { useState } from "react";

import Card from "../UIElement/Card";
import ExpenseItem from "./ExpenseItem";
import FilterExpense from "./FilterExpense";
import "./ExpenseList.css";
import ExpenseChart from "./ExpenseChart";
const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const year = (data) => {
    setFilteredYear(data);
  };

  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  })

  // console.log(filteredExpenses);
  let expense=<h2 className="expenses-list__fallback">NO EXPENSE FOUND</h2>;
  if(filteredExpenses.length>0){
    expense=filteredExpenses.map((item) => {    
      return (
        <ul className="expenses-list">
        <ExpenseItem
          key={item.id}
          id={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
        </ul>
      );
    
  })
  }
  

  return (
    <Card className="expenses">
    
      <FilterExpense selected={filteredYear} year={year} />
      <ExpenseChart expenses={filteredExpenses} />
      {expense}
    </Card>
  );
};

export default ExpenseList;

import React from "react";
import ExpenseItem from './ExpensesItem'
import "./ExpensesList.css";




const ExpensesList = (props) => {

if (props.items.length === 0) {
  return <h2 className="expenses-list__fallback">No expenses Found</h2>
  }
  
  return (<ul className="expenses-list">
    {props.items.map((value, index) => {
      return (
        <ExpenseItem
          key={index}
          date={value.date}
          title={value.title}
          price={value.amount}
        />
      )
    })};
  </ul>)
  
    
};

export default ExpensesList;

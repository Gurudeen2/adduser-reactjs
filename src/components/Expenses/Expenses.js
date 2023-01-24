import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import FilterExpenses from "./FilterExpenses";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterExpenses, setFilterExpenses] = useState("");

  const FilterExpensesHandler = (selectedYear) => {
    setFilterExpenses(selectedYear);
  };

  const FilterExpenseDataHandler = props.items.filter((expenseData) => {
    return expenseData.date.getFullYear().toString() === filterExpenses;
  });

  return (
    <Card className="expenses">
      <FilterExpenses
        selected={filterExpenses}
        onChangeFilter={FilterExpensesHandler}
      />
      <ExpensesChart expenses={FilterExpenseDataHandler} />
      <ExpensesList items={FilterExpenseDataHandler} />
    </Card>
  );
};
export default Expenses;

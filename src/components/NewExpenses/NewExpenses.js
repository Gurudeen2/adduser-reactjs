import React, { useState } from "react";
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";

const NewExpenses = (props) => {
  const [editState, setEditState] = useState(false);

  const onSaveHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
    };
    props.data(expenseData);
  };

  const startEditingHandle = () => {
    setEditState(true);
  };

  const stopEditingHandler = () => {
    setEditState(false);
  };

  return (
    <div className="new-expense">
      {!editState && <button onClick={startEditingHandle}>Add Expenses</button>}
      {editState && (
        <ExpensesForm
          SaveExpenseData={onSaveHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpenses;

import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  const [enteredtitle, setTitle] = useState("");
  const [enteredamount, setAmount] = useState("");
  const [entereddate, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, title: e.target.value };
    // });
  };

  const amountOnChangeHandler = (e) => {
    setAmount(e.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: e.target.value };
    // });
  };
  const dateOnChangeHandler = (e) => {
    setDate(e.target.value);
    // setUserInput((...prevState) => {
    //   return { ...prevState, date: e.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };
    props.SaveExpenseData(userData);

    setDate("");
    setAmount("");
    setTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleOnChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredamount}
            onChange={amountOnChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-12-31"
            max="2024-12-31"
            value={entereddate}
            onChange={dateOnChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpensesForm;

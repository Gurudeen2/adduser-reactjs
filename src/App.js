import React, { useState } from "react"; //
import "./App.css";

//
import Header from "./components/Header/Header";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

import AddUser from "./components/Users/AddUser/AddUser";

function App() {
  const expenseData = [
    {
      date: new Date(2021, 1, 3),
      title: "Lexus 2023 Model",
      amount: 250,
    },
    {
      date: new Date(2023, 1, 3),
      title: "Lexus 2021 Model",
      amount: 900,
    },
  ];
  const [data, setData] = useState(expenseData);

  const expenseHandler = (expenseData) => {
    setData((prevState) => {
      return [expenseData, ...prevState];
    });
  };

  return (
    <div className="container-fluid App">
      <Header />

      <AddUser />

      <NewExpenses data={expenseHandler} />

      <Expenses items={data} />
    </div>
  );
}

export default App;

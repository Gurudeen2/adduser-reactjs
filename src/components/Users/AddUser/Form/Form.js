import React, { useState } from "react";
import Button from "../../../UI/Button";
import classes from "./Form.module.css";
import ErrorModal from "../../Modal/ErrorModal";
import Wrapper from "../../../Wrapper/Wrapper";

const Form = (props) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [dat, setData] = useState([]);
  const [modalError, setModalError] = useState();

  const onChangeUserHandler = (e) => {
    setUser(e.target.value);
  };

  const onChangeAgeHandler = (e) => {
    setAge(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.trim().length === 0 || age.trim().length === 0) {
      setModalError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (+age < 1) {
      setModalError({
        title: "Invalid Age",
        message: "Age must be > (0)",
      });
      return;
    }
    setData([
      {
        username: user,
        userAge: age,
      },
    ]);

    const data = [
      {
        username: user,
        userAge: age,
      },
      ...dat,
    ];
    props.usersData(data);
    setAge("");
    setUser("");
  };
  const onCloseHandler = () => {
    setModalError();
  };
  return (
    <Wrapper>
      {modalError && (
        <ErrorModal
          title={modalError.title}
          message={modalError.message}
          onClose={onCloseHandler}
        />
      )}
      <form onSubmit={onSubmit}>
        <div className={classes.form}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={onChangeUserHandler}
              value={user}
            />
          </div>

          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              name="age"
              onChange={onChangeAgeHandler}
              value={age}
            />
          </div>

          <div>
            <Button type="submit">Add User</Button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Form;

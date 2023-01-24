import React, { useState } from "react";
import Form from "./Form/Form";
import UserDisplay from "../UserDisplay/UserDisplay";
import classes from "./AddUser.module.css";
import Wrapper from "../../Wrapper/Wrapper";

const AddUser = () => {
  const [usersData, setUsersData] = useState([]);

  const usersDataHandler = (userdata) => {
    setUsersData(userdata);
  };

  return (
    <Wrapper>
      <div className={classes.center_div}>
        <Form usersData={usersDataHandler} />;
      </div>

      <UserDisplay data={usersData} />
    </Wrapper>
  );
};

export default AddUser;

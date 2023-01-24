import React from "react";
import UserList from "../UserList/UserList";
import "./UserDisplay.css";

const UserDisplay = (props) => {
  
  return (
    <ul>
      <UserList userlists={props.data} />
    </ul>
  );
};

export default UserDisplay;

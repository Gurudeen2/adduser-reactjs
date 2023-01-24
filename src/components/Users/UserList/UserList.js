import React from "react";
import "./UserList.css";
import Wrapper from "../../Wrapper/Wrapper";

const UserList = (props) => {
  return (
    <Wrapper>
      {props.userlists.length !== 0 &&
        props.userlists.map((userlist, index) => (
          <li key={index}>
            {userlist.username} ({userlist.userAge} Years Old)
          </li>
        ))}
      {props.userlists.length === 0 && <li>User Not Found</li>}
    </Wrapper>
  );
};

export default UserList;

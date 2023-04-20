import React from "react";
import axios from "axios";
let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>fsafas</button>
      {props.users.map((u) => (
        <div>{u.name}</div>
      ))}
    </div>
  );
};

export default Users;
// {u.followed ?
//     <button onClick={() = > {props.follow(u.id)}}>UnFollow</button> :
//     <button onClick={() = > {props.follow(u.id)}}>Follow</button>}

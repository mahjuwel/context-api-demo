import React from "react";
import User from "./User";
import useUsersContext from "../hooks/useUsersContext";

const Users = () => {
  const { users } = useUsersContext();
//   const newUsers = { id: 4, username: "belal" };
//   setUsers((prevUsers) => [...prevUsers, newUsers]);
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;

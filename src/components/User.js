import React from "react";

const User = ({ user }) => {
  const { id, username } = user;
  console.log(username)
  return (
    <article>
      <h2>{id}</h2>
      <p>{username}</p>
    </article>
  );
};

export default User;

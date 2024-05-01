import React from "react";
import Users from "./components/Users";
import UsersProvider from "./context/UsersContext";

const App = () => {
  
  return (
    <UsersProvider>
      <Users  />
    </UsersProvider>
  );
};

export default App;

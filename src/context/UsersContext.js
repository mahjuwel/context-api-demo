import { createContext, useState } from "react";

export const UsersContext= createContext({});

const UsersProvider=({ children }) => {
    const [users, setUsers] = useState([
        {
          id: 1,
          username: "al hasan",
        },
        {
          id: 2,
          username: "mohammad",
        },
        {
          id: 3,
          username: "fatima",
        }]
      );
      return (
        <UsersContext.Provider value={{users, setUsers}}>
            {children}
        </UsersContext.Provider>
      );
}
export default UsersProvider;
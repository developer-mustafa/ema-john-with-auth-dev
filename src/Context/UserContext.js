import React from "react";
import { createContext } from "react";

export const AuthContext = createContext();


const UserContext = ({ children }) => {
    const authinfo = { name: "mustafa rahman" };

  return (

    <AuthContext.Provider value={authinfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default UserContext;

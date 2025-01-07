/* eslint-disable react/prop-types */
import { UserContexto } from "./userContext";
import { useState } from "react";

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  return (
      // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
      <UserContexto.Provider value={{ user, setUser }}>
          { children }
      </UserContexto.Provider>
  )
}

import { createContext, useContext, useState } from "react";
import { UserContextProps, UserData, UserProviderProps } from "../types/types";



const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider= ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserData | null>(null);

  const loginUser = (userData: UserData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
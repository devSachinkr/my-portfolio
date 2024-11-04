"use client";

import { User } from "@prisma/client";
import React, { createContext, useEffect, useState } from "react";

type InitialStateProps = {
  token: string;
  user: User | null;
};


type AuthProviderProps = {
  children: React.ReactNode;
};

const initialState: InitialStateProps = {
  token: "",
  user: null,
};

const UserContext = createContext<InitialStateProps | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string>(initialState.token);
  const [user, setUser] = useState<User | null>(initialState.user);

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (storedToken) setToken(JSON.parse(storedToken));
      if (storedUser) setUser(JSON.parse(storedUser));
    } catch (error) {
      console.error("Failed to parse localStorage data:", error);
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const contextValue = React.useMemo(() => ({ token, user, }), [token, user]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useAuthUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useAuthUser must be used within AuthProvider");
  }
  return context;
};

export { UserContext };
export default AuthProvider;

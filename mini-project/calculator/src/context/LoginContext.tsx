import { createContext } from "react";

interface LoginContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export const LoginContext = createContext<LoginContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

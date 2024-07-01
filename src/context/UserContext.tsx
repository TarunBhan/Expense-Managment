import { createContext } from "react";

export const UserContex = createContext<{
  user?: any;
  isLoading: boolean;
}>({
  user: null,
  isLoading: true,
});

import { createContext } from 'react';
import { IUserRole } from '../service/@types/user';

export type AuthContextType = {
  user: IUserRole | null;
  setUser: React.Dispatch<React.SetStateAction<IUserRole | null>>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export type AuthProviderProps = {
  children: React.ReactNode;
};

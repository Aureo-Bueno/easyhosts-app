import { createContext } from 'react';
import { IUser } from '../service/@types/user';

export type AuthContextType = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export type AuthProviderProps = {
  children: React.ReactNode;
};

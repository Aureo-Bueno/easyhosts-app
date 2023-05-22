import { createContext } from 'react';
import { IUser } from '../service/@types/user';

export type BookingContextType = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

export const BookingContext = createContext<BookingContextType>({
  user: null,
  setUser: () => {},
});

export type BookingProviderProps = {
  children: React.ReactNode;
};

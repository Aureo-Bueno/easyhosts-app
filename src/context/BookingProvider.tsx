import { useMemo, useState } from 'react';
import { BookingContext, BookingProviderProps } from './BookingContext';
import { IUser } from '../service/@types/user';

export function BookingProvider ({ children }: BookingProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);

  const value = useMemo(() => ({
    user,
    setUser
  }), [user, setUser]);

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

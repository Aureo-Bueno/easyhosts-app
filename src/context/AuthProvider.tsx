import { useMemo, useState } from 'react';
import { AuthContext, AuthProviderProps } from './AuthContext';
import { IUserRole } from '../service/@types/user';

export function AuthProvider ({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUserRole | null>(null);

  const value = useMemo(() => ({
    user,
    setUser
  }), [user, setUser]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

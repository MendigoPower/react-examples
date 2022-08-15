import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const updateUser = (newUser) => {
    setUser({ ...newUser });
  };

  return (
    <UserContext.Provider
      value={{
        user: { name: 'Provider', email: 'provider@provider.com' },
        updateUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

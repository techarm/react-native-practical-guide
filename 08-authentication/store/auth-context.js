import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState('');

  const authenticateHandler = (token) => {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticateHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;

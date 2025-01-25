/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useEffect, useState } from 'react';
import { KJUR } from 'jsrsasign';

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [update, setUpdate] = useState(0);
  const [userSession, setUserSession] = useState({});

  const AuthUser = () => {
    const accessToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token'))
      ?.split('=')[1];

    if (!accessToken) {
      return null;
    }

    try {
      const decodedPayload = KJUR.jws.JWS.parse(accessToken).payloadObj;
      console.log(decodedPayload.username);
      return decodedPayload.username;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUserSession(AuthUser());
  }, [update]);

  return (
    <AuthContext.Provider value={{ userSession, update, setUpdate }}>
      {children}
    </AuthContext.Provider>
  );
};

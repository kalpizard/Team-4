/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useEffect, useState } from 'react';
import { KJUR } from 'jsrsasign';
import { getData } from '../services/axios';

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [update, setUpdate] = useState(0);
  const [userSession, setUserSession] = useState({});

  

  const AuthUser = async () => {
    const accessToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token'))
      ?.split('=')[1];

    if (!accessToken) {
      return null;
    }

    try {
      const decodedPayload = KJUR.jws.JWS.parse(accessToken).payloadObj;
      const user = await getData(`http://localhost:3001/usuarios/${decodedPayload.username.id}`)
      return user.data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AuthUser().then((data) => setUserSession(data))
  }, [update]);

  return (
    <AuthContext.Provider value={{ userSession, update, setUpdate }}>
      {children}
    </AuthContext.Provider>
  );
};

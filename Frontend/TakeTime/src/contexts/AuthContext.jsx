import { useContext, createContext, useEffect, useState } from 'react';
import { KJUR } from 'jsrsasign';

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userSession, setUserSession] = useState('');

  const AuthUser = () => {
    const accessToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token'))
      ?.split('=')[1];

    if (!accessToken) {
      return;
    }

    try {
      const decodedPayload = KJUR.jws.JWS.parse(accessToken).payload;
      console.log(decodedPayload);
      return decodedPayload;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUserSession(AuthUser());
  }, []);

  return (
    <AuthContext.Provider value={{ userSession }}>
      {children}
    </AuthContext.Provider>
  );
};

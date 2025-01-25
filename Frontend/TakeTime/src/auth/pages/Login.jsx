import { useState } from 'react';
import { getUsers } from '../../services/axios.js';
import { KJUR } from 'jsrsasign';
import {checkTokenAvailability} from '../components/Token.jsx'
export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const secretKey = 'cocodeVersion';

  const submit = async () => {
    if (!username.trim() || !password.trim()) {
      setErrorMessage('Usuario y contraseña son requeridos.');
      return;
    }
    
    try {
      const response = await getUsers();
      console.log(response);
      
      const users = response.data;

      const name = users.find((u) => u.name === username);
      const userPassword = users.find((u) => u.password === password);

      if (!name) {
        return;
      } else if (!userPassword) {
        return;
      }
      if (name && userPassword) {
        console.log('Inicio de sesión exitoso: ' + name.name);

        // Generar token JWT (Access Token)
        const payload = {
          username: name,
          exp: Math.floor(Date.now() / 1000) + 86400, // 1 día de expiración
        };
        const accessToken = KJUR.jws.JWS.sign('HS256', { alg: 'HS256', typ: 'JWT' }, payload, secretKey);

        // Generar refresh token (tendrá una fecha de expiración más larga)
        const refreshToken = KJUR.jws.JWS.sign('HS256', { alg: 'HS256', typ: 'JWT' }, payload, secretKey);

        // Guardar el access token en la cookie (expira en 1 hora)
        document.cookie = `access_token=${accessToken}; path=/; max-age=60`;
        document.cookie = `refresh_token=${refreshToken}; path=/; max-age=86400`;
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  // Comprobar la disponibilidad del token cada minuto
  setInterval(() => {
    checkTokenAvailability();
  }, 60000); // Comprobar cada minuto

  return (
      <>
       <div className='w-full h-full bg-lime-100'>
        <h1>Login</h1>
        <label htmlFor="username">Usuario:</label>
        <input
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          name="username"
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          required
        />
        <input onClick={submit} type="submit" value="Submit" />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </>
     
  );
}

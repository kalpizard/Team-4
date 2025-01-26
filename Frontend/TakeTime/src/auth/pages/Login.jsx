import { useState } from 'react';
import { getData } from '../../services/axios.js';
import { KJUR } from 'jsrsasign';
import { checkTokenAvailability } from '../components/Token.jsx';
import { useNavigate } from 'react-router';
import { AuthLayout } from '../layout/AuthLayout.jsx';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext.jsx';

export const Login = ({ children, title = "Login" }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const secretKey = 'cocodeVersion';
  const Navigate = useNavigate();
  const { update, setUpdate } = useAuthContext();

  const submit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      return;
    }
    const url = 'http://localhost:3001/usuarios'
    try {
      const response = await getData(url);
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
        const accessToken = KJUR.jws.JWS.sign(
          'HS256',
          { alg: 'HS256', typ: 'JWT' },
          payload,
          secretKey
        );

        // Generar refresh token (tendrá una fecha de expiración más larga)
        const refreshToken = KJUR.jws.JWS.sign(
          'HS256',
          { alg: 'HS256', typ: 'JWT' },
          payload,
          secretKey
        );

        // Guardar el access token en la cookie (expira en 1 hora)
        document.cookie = `access_token = ${accessToken}; path =/; max-age=60`;
        document.cookie = `refresh_token = ${refreshToken}; path =/; max-age=86400`;

        setUpdate(update + 1);
        Navigate('/home');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  // Comprobar la disponibilidad del token cada minuto
  setInterval(() => {
    checkTokenAvailability();
  }, 30000); // Comprobar cada minuto

  return (
    <AuthLayout  >
      <form onSubmit={submit}>
        <div className='mb-8'>
          <h3 className='text-3xl font-extrabold text-gray-800'>{title}</h3>
        </div>
      
        <div>
          <label className='text-gray-800 text-sm mb-2 block'>User name</label>
          <div className='relative flex items-center'>
            <input
              autoComplete='off'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type='text'
              id='username'
              name='username'
              className='w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600'
              placeholder='Enter user name'
              required
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#bbb'
              stroke='#bbb'
              className='w-[18px] h-[18px] absolute right-4'
              viewBox='0 0 24 24'
            >
              <circle cx='10' cy='7' r='6'></circle>
              <path d='M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z'></path>
            </svg>
          </div>
        </div>

        <div className='mt-4'>
          <label className='text-gray-800 text-sm mb-2 block'>Password</label>
          <div className='relative flex items-center'>
            <input
              name='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              className='w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600'
              placeholder='Enter password'
              required
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#bbb'
              stroke='#bbb'
              className='w-[18px] h-[18px] absolute right-4 cursor-pointer'
              viewBox='0 0 128 128'
            >
              <path d='M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z'></path>
            </svg>
          </div>
        </div>

        <div className='mt-4 text-right'>
          <a
            href='#'
            onClick={(e) => e.preventDefault()}
            className='text-blue-600 text-sm font-semibold hover:underline'
          >
            Forgot your password?
          </a>
        </div>

        <div className='mt-8'>
          <button
            type='submit'
            className='w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'
          >
            Log in
          </button>
        </div>

        <p className='text-sm mt-6 text-center text-gray-800'>
          Don't have an account{' '}
          {/* <a href="#" onClick={(e) => e.preventDefault()} className="text-blue-600 font-semibold hover:underline ml-1">
=======
          <a
            href='#'
            onClick={(e) => e.preventDefault()}
            className='text-blue-600 font-semibold hover:underline ml-1'
          >
            Register here
          </a> */}

          <Link
            className="text-blue-600 font-semibold hover:underline ml-1"
            to="/register"  >
            Register here

          </Link>





        </p>


      </form>
    </AuthLayout>
  );
};

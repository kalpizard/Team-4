// src/token/refresh.jsx

import { KJUR } from 'jsrsasign';

const secretKey = 'cocodeVersion';

// Función para refrescar el access token utilizando el refresh token
export const refreshAccessToken = () => {
  const refreshToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('refresh_token='))
    ?.split('=')[1];

  if (refreshToken) {
    try {
      // Usamos el refresh token para generar un nuevo access token
      const decodedPayload = KJUR.jws.JWS.parse(refreshToken).payload;
      const newAccessToken = KJUR.jws.JWS.sign(
        'HS256',
        { alg: 'HS256', typ: 'JWT' },
        decodedPayload,
        secretKey
      );
      document.cookie = `access_token=${newAccessToken}; path=/; max-age=3600`; // 1 hora de expiración

      console.log('Nuevo access token generado.');
    } catch (error) {
      console.error('Error al refrescar el token:', error);
    }
  } else {
    console.log('No se encontró el refresh token.');
  }
};

// Verificar si el token de acceso está presente, si no se genera uno nuevo
export const checkTokenAvailability = () => {
  const accessToken = document.cookie
    .split('; ')
    .find((row) => row.startsWith('access_token'))
    ?.split('=')[1];

  if (!accessToken) {
    console.log('No hay access token, usando refresh token para generar uno nuevo.');
    refreshAccessToken(); // Llamar a la función que refresca el token
  }
};
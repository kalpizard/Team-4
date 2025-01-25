import axios from 'axios';
export const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/usuarios'); // URL de la API
      return response
    } catch (error) {
      console.error('Error al realizar la solicitud GET:', error);
    }
  };
import axios from 'axios';
export const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/usuarios'); 
      return response
    } catch (error) {
      console.error('Error al realizar la solicitud GET:', error);
    }
  };


  export const PostUsers = async (url, datos) => {
    try {
      const response = await axios.post(url, datos); 
      return response;
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  };
  

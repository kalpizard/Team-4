import axios from 'axios';
export const getData = async (url) => {
    try {
      const response = await axios.get(url); 
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

  export const postTransaction = async (url, data) => {
    console.log(url, data);
    
    try {
      const response = await axios.post(url, data); 
      return response;
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  };
  

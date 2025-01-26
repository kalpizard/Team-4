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

  export const putData = async (url, id, userBuy) => {
    try {
      // Construye la URL con el ID
      const fullUrl = `${url}/${id}`;

      // Realiza la solicitud PUT
      const response = await axios.put(fullUrl, userBuy);
  
      return response;
    } catch (error) {
      console.error("Error al realizar la solicitud PUT:", error);
    }
  };
  

  export const postTransaction = async (url, data) => {
    
    try {
      const response = await axios.post(url, data); 
      return response;
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  };
  
  export const deleteData = async (url, id) => {
    console.log(id);
    
    try {
      const response = await axios.delete(`${url}/${id}`); 
      return response;
    } catch (error) {
      console.error('error');
    }
  };
